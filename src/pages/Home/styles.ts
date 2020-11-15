import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../constants';

export default StyleSheet.create({
  section: {
    backgroundColor: ColorTheme.background1,
    minHeight: '100%',
  },
  container: {
    padding: 16,
  },
  title: TextTheme.title,
  subtitle: TextTheme.subtitle,
});
