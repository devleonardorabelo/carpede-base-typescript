import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: THEME.subtitle,
  boldText: THEME.boldText,
  normalItem: {
    width: 150,
    marginBottom: 24,
  },
  onSale: {
    marginLeft: 8,
  },
  normalItemImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
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
