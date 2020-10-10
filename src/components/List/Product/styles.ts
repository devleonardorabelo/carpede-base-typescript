import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: THEME.subtitle,
  boldText: THEME.boldText,
  onSale: {
    marginLeft: 8,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  largeItem: {
    marginBottom: 24,
    width: 200,
  },
  largeItemImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
});
