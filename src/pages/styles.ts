import { StyleSheet } from 'react-native';
import { THEME } from '../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: THEME.background1,
    minHeight: '100%',
  },
  container: {
    padding: 16,
  },
  title: {
    fontFamily: 'Montserrat Bold',
    fontSize: 28,
    color: THEME.color1,
  },
  subtitle: {
    fontFamily: 'Montserrat Medium',
    fontSize: 20,
    color: THEME.color2,
  },
});
