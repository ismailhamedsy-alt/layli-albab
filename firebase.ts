import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  writeBatch,
  getDoc,
  getDocs,
} from 'firebase/firestore';
import { MenuItem, RestaurantConfig } from '../types/menu';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db =
  firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)'
    ? getFirestore(app, firebaseConfig.firestoreDatabaseId)
    : getFirestore(app);

const CONFIG_DOC_PATH = 'restaurant_config';
const CONFIG_DOC_ID = 'main';
const MENU_COLLECTION_PATH = 'menu_items';

/**
 * Real-time listener for Restaurant Configuration (delivery fee, address, phone, working hours, etc.)
 */
export function subscribeToRestaurantConfig(
  onUpdate: (config: RestaurantConfig) => void,
  onError?: (err: Error) => void
) {
  const docRef = doc(db, CONFIG_DOC_PATH, CONFIG_DOC_ID);
  return onSnapshot(
    docRef,
    (snapshot) => {
      if (snapshot.exists()) {
        onUpdate(snapshot.data() as RestaurantConfig);
      }
    },
    (error) => {
      console.warn('Real-time config sync error:', error);
      if (onError) onError(error);
    }
  );
}

/**
 * Real-time listener for Menu Items across all categories
 */
export function subscribeToMenuItems(
  onUpdate: (items: MenuItem[]) => void,
  onError?: (err: Error) => void
) {
  const colRef = collection(db, MENU_COLLECTION_PATH);
  return onSnapshot(
    colRef,
    (snapshot) => {
      if (!snapshot.empty) {
        const items: MenuItem[] = [];
        snapshot.forEach((docSnap) => {
          items.push(docSnap.data() as MenuItem);
        });
        onUpdate(items);
      }
    },
    (error) => {
      console.warn('Real-time menu sync error:', error);
      if (onError) onError(error);
    }
  );
}

/**
 * Save restaurant configuration directly to cloud Firestore.
 * Triggers instant real-time updates for all customers everywhere!
 */
export async function saveRestaurantConfigToCloud(config: RestaurantConfig) {
  try {
    const docRef = doc(db, CONFIG_DOC_PATH, CONFIG_DOC_ID);
    await setDoc(docRef, config, { merge: true });
    return true;
  } catch (error) {
    console.error('Error saving restaurant config to Firestore:', error);
    throw error;
  }
}

/**
 * Save or update a single menu item in Firestore.
 */
export async function saveMenuItemToCloud(item: MenuItem) {
  try {
    const docRef = doc(db, MENU_COLLECTION_PATH, item.id);
    await setDoc(docRef, item, { merge: true });
    return true;
  } catch (error) {
    console.error('Error saving menu item to Firestore:', error);
    throw error;
  }
}

/**
 * Delete a menu item from Firestore.
 */
export async function deleteMenuItemFromCloud(itemId: string) {
  try {
    const docRef = doc(db, MENU_COLLECTION_PATH, itemId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting menu item from Firestore:', error);
    throw error;
  }
}

/**
 * Seed initial restaurant data into Firestore if not yet populated.
 */
export async function seedCloudDataIfEmpty(
  defaultConfig: RestaurantConfig,
  defaultItems: MenuItem[]
) {
  try {
    const configRef = doc(db, CONFIG_DOC_PATH, CONFIG_DOC_ID);
    const configSnap = await getDoc(configRef);
    if (!configSnap.exists()) {
      await setDoc(configRef, defaultConfig);
    }

    const menuColRef = collection(db, MENU_COLLECTION_PATH);
    const menuSnap = await getDocs(menuColRef);
    if (menuSnap.empty && defaultItems.length > 0) {
      const batch = writeBatch(db);
      defaultItems.forEach((item) => {
        const itemRef = doc(db, MENU_COLLECTION_PATH, item.id);
        batch.set(itemRef, item);
      });
      await batch.commit();
    }
  } catch (error) {
    console.warn('Could not seed initial cloud data:', error);
  }
}
