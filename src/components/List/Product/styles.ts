import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  itemTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  subtitle: TextTheme.subtitle,
  boldText: TextTheme.boldText,
  lightText: TextTheme.lightText,
  price: {
    color: ColorTheme.color5,
  },
  onSale: {
    color: ColorTheme.color3,
    marginLeft: 8,
    fontFamily: 'Montserrat Light',
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
