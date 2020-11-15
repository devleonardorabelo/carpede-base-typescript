import { StyleSheet } from 'react-native';
import { ColorTheme, SizeTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  boldText: {
    ...TextTheme.boldText,
  },
  lightText: {
    ...TextTheme.lightText,
  },
  text: {
    ...TextTheme.text,
  },
  price: {
    color: ColorTheme.color5,
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  orderItemImage: {
    width: SizeTheme.product.order.width,
    height: SizeTheme.product.order.width,
    borderRadius: SizeTheme.borderRadius,
    marginRight: 16,
  },
  orderItemBody: {
    flexDirection: 'column',
    flexShrink: 1,
  },
});
