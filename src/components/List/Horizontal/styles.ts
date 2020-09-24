import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  largeItem: {
    marginBottom: 16,
  },
  largeItemImage: {
    width: 200,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  largeItemName: {
    fontSize: 18,
    fontFamily: 'Montserrat SemiBold',
    color: THEME.color1,
  },
});
