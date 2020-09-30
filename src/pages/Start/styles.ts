import { StyleSheet } from 'react-native';
import { THEME } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: THEME.background1,
    minHeight: '100%',
    padding: 16,
  },
  title: THEME.title,
  subtitle: THEME.subtitle,
});
