import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme, ImageTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  boldText: TextTheme.boldText,
  lightText: TextTheme.lightText,
  subtitle: TextTheme.subtitle,
  price: {
    color: ColorTheme.color5,
  },
  onSale: {
    textDecorationLine: 'line-through',
    color: ColorTheme.color3,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardBody: {
    paddingHorizontal: 8,
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').width / 4,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  illustration: {
    ...ImageTheme.illustration,
    resizeMode: 'center',
  },
});
