import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: ColorTheme.background1,
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 0,
  },
  subtitle: {
    ...TextTheme.subtitle,
    marginBottom: -4,
  },
  title: {
    ...TextTheme.title,
    marginBottom: 16,
  },
});
