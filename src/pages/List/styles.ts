import { StyleSheet } from 'react-native';
import { THEME } from '../../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: THEME.background1,
    minHeight: '100%',
  },
  container: {
    padding: 16,
  },
  subtitle: {
    ...THEME.subtitle,
    marginBottom: -4,
  },
  title: {
    ...THEME.title,
    marginBottom: 16,
  },
});
