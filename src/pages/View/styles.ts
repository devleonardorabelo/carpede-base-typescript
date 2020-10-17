import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: THEME.background1,
  },
  container: {
    padding: 16,
  },
  title: THEME.title,
  subtitle: THEME.subtitle,
  text: THEME.text,
  price: {
    color: THEME.color5,
  },
  onSale: {
    textDecorationLine: 'line-through',
    color: THEME.color3,
  },
  image: {
    width: '100%',
    height: Dimensions.get('screen').width / 2,
    resizeMode: 'cover',
  },
  bottomTabAdd: {
    width: '100%',
    padding: 16,
    backgroundColor: THEME.background1,
    flexDirection: 'row',
  },
});
