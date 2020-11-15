import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: ColorTheme.background1,
    minHeight: '100%',
  },
  section: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  title: TextTheme.title,
  subtitle: TextTheme.subtitle,
  text: TextTheme.text,
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 16,
    alignItems: 'center',
  },
  marker: {
    alignItems: 'center',
  },
  callout: {
    backgroundColor: ColorTheme.background1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
  },
});
