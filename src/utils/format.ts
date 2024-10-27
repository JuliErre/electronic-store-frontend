export const getPriceFormat = (number: number | string): string => {
    const price = String(number);
    const priceWithDot = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return priceWithDot;
};
