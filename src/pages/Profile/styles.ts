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
  title: {
    ...TextTheme.title,
    marginBottom: 16,
  },
  text: TextTheme.text,
  boldText: TextTheme.boldText,
  profileNavigation: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  buttonNavigation: {
    paddingBottom: 8,
    marginRight: 16,
    borderBottomWidth: 3,
    borderBottomColor: ColorTheme.background3,
  },
  row: {
    flexDirection: 'row',
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
  mapFooter: {
    backgroundColor: ColorTheme.background3,
    padding: 16,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mapFooterText: {
    color: ColorTheme.background1,
    textAlign: 'center',
  },
});
