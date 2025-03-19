import format from "number-format.js";

export const getPriceWithCurrency = (price: number | null): null | string => {
  if(price === null) {
    return price
  }
  return format(`#,###.## ${getSymbolCurrency()}`, price, {enforceMaskSign: false})
}

export const getSymbolCurrency = () => {
  const locale   = 'vi-VN'; // Vietnamese locale
  const currency = 'VND'; // Vietnamese Dong currency code

  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency', currency: currency,
  });

  return formatter.format(0).replace(/\d+\.?\d*/g, '').trim();
}

export const formatterPrice = (value: number) => {
  return format(`#,###.##`, value, {enforceMaskSign: false})
}

export  const formatterNumber = (value: number) => {
  return format('#,###.', value, {enforceMaskSign: false})
}
