const PriceToString = (text: number): string => String(text.toFixed(2)).replace('.', '');

export default PriceToString;
