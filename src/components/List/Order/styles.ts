import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  boldText: {
    ...THEME.boldText,
  },
  lightText: {
    ...THEME.lightText,
  },
  text: {
    ...THEME.text,
  },
  price: {
    color: THEME.color5,
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  orderItemImage: {
    width: THEME.product.order.width,
    height: THEME.product.order.width,
    borderRadius: THEME.borderRadius,
    marginRight: 16,
  },
  orderItemBody: {
    flexDirection: 'column',
    flexShrink: 1,
  },
});
