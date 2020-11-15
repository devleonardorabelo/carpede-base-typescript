import { Dimensions, StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: ColorTheme.background1,
  },
  container: {
    padding: 16,
  },
  title: TextTheme.title,
  subtitle: TextTheme.subtitle,
  text: TextTheme.text,
  price: {
    color: ColorTheme.color5,
  },
  onSale: {
    textDecorationLine: 'line-through',
    color: ColorTheme.color3,
  },
  image: {
    width: '100%',
    height: Dimensions.get('screen').width / 2,
    resizeMode: 'cover',
  },
  bottomTabAdd: {
    width: '100%',
    padding: 16,
    backgroundColor: ColorTheme.background1,
    flexDirection: 'row',
  },
});
