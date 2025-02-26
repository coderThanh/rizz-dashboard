import format from "number-format.js";

export const getPriceWithCurrency = (price: number | null): null | string => {
  if(price === null) {
    return price
  }
  return format('#,###. đ', price, {enforceMaskSign: false})
}