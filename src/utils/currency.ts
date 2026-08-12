export type Currency = 'PKR' | 'USD';

const EXCHANGE_RATE = 270;
const MARKUP_MULTIPLIER = 1.15; // 15% markup for international clients

export const convertAndFormatPrice = (priceInPKR: number, currency: Currency): string => {
  if (currency === 'PKR') {
    return `Rs. ${priceInPKR.toLocaleString()}`;
  } else {
    // Convert to USD with markup and round to nearest $5
    const usdRaw = (priceInPKR / EXCHANGE_RATE) * MARKUP_MULTIPLIER;
    const roundedUSD = Math.ceil(usdRaw / 5) * 5;
    return `$${roundedUSD.toLocaleString()}`;
  }
};
