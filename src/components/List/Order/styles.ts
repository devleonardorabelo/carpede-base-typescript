import { Dimensions, StyleSheet } from 'react-native';
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
  },
  orderItemImage: {
    width: Dimensions.get('screen').width / 5,
    height: Dimensions.get('screen').width / 5,
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 16,
  },
  orderItemBody: {
    flexDirection: 'column',
    flexShrink: 1,
  },
});
