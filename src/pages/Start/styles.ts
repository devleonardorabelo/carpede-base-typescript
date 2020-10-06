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
  text: THEME.text,
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 16,
    alignItems: 'center',
  },
});
