import { CartItem, Currency, OrderDetails, RestaurantConfig } from '../types/menu';

export function formatPrice(
  amountTRY: number,
  currency: Currency,
  config: RestaurantConfig
): string {
  if (currency === 'TRY') {
    return `${Math.round(amountTRY)} ₺`;
  }
  if (currency === 'USD') {
    const usd = amountTRY / (config.usdRate || 35);
    return `$${usd.toFixed(2)}`;
  }
  if (currency === 'SYP') {
    const syp = amountTRY * (config.sypRate || 420);
    return `${Math.round(syp).toLocaleString('ar-SY')} ل.س`;
  }
  return `${amountTRY} ₺`;
}

export function generateWhatsAppMessage(
  cartItems: CartItem[],
  orderDetails: OrderDetails,
  config: RestaurantConfig,
  currency: Currency = 'TRY'
): string {
  const subtotalTRY = cartItems.reduce((acc, item) => acc + item.totalPriceTRY, 0);
  const deliveryFee = orderDetails.orderType === 'delivery' ? config.deliveryFeeTRY : 0;
  const grandTotalTRY = subtotalTRY + deliveryFee;

  const orderTypeArabic =
    orderDetails.orderType === 'delivery'
      ? '🛵 توصيل إلى العنوان'
      : orderDetails.orderType === 'pickup'
      ? '🛍️ استلام سفري من المطعم'
      : '🍽️ طلب داخل الصالة';

  let message = `السلام عليكم ورحمة الله،\n`;
  message += `أرغب في تثبيت طلب جديد من *${config.name}* 🍗🌯\n\n`;
  message += `📋 *تفاصيل الطلب:*\n`;
  message += `----------------------------\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.menuItem.name}* × ${item.quantity}\n`;
    if (item.selectedSize) {
      message += `   • الحجم: ${item.selectedSize.name}\n`;
    }
    if (item.selectedExtras && item.selectedExtras.length > 0) {
      const extrasStr = item.selectedExtras.map((e) => e.name).join('، ');
      message += `   • إضافات: ${extrasStr}\n`;
    }
    if (item.notes && item.notes.trim()) {
      message += `   • ملاحظة خاصة: ${item.notes.trim()}\n`;
    }
    message += `   • السعر: ${formatPrice(item.totalPriceTRY, currency, config)}\n\n`;
  });

  message += `----------------------------\n`;
  message += `💰 *المجموع الفرعي:* ${formatPrice(subtotalTRY, currency, config)}\n`;
  if (orderDetails.orderType === 'delivery') {
    message += `🛵 *أجور التوصيل (مدينة الباب):* ${formatPrice(deliveryFee, currency, config)}\n`;
  }
  message += `💳 *الإجمالي الكلي:* *${formatPrice(grandTotalTRY, currency, config)}*\n\n`;

  message += `👤 *معلومات الزبون والتوصيل:*\n`;
  message += `• *نوع الطلب:* ${orderTypeArabic}\n`;
  if (orderDetails.customerName) {
    message += `• *الاسم:* ${orderDetails.customerName}\n`;
  }
  if (orderDetails.customerPhone) {
    message += `• *رقم الهاتف:* ${orderDetails.customerPhone}\n`;
  }
  if (orderDetails.orderType === 'delivery') {
    if (orderDetails.deliveryArea) {
      message += `• *المنطقة / الحي:* ${orderDetails.deliveryArea}\n`;
    }
    if (orderDetails.deliveryAddress) {
      message += `• *العنوان التفصيلي:* ${orderDetails.deliveryAddress}\n`;
    }
  }
  if (orderDetails.notes && orderDetails.notes.trim()) {
    message += `• *ملاحظات إضافية:* ${orderDetails.notes.trim()}\n`;
  }

  message += `\n⏰ *وقت الإرسال:* ${new Date().toLocaleTimeString('ar-SY', {
    hour: '2-digit',
    minute: '2-digit',
  })}\n`;
  message += `شكراً لكم وبارك الله برزقكم! ✨`;

  return message;
}

export function cleanPhoneNumber(phone: string): string {
  // Remove non-numeric characters except +
  return phone.replace(/[^0-9]/g, '');
}
