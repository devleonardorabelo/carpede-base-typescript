import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: THEME.subtitle,
  boldText: THEME.boldText,
  lightText: THEME.lightText,
  price: {
    color: THEME.color5,
  },
  onSale: {
    marginLeft: 8,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  largeItem: {
    marginBottom: 24,
    width: Dimensions.get('screen').width / 1.8,
  },
  largeItemImage: {
    width: '100%',
    height: Dimensions.get('screen').width / 3,
    borderRadius: 8,
    marginBottom: 8,
  },
});
