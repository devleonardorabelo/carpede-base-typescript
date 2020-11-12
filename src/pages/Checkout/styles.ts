import { StyleSheet } from 'react-native';
import { THEME } from '../../constants';

export default StyleSheet.create({
  title: THEME.title,
  subtitle: THEME.subtitle,
  text: {
    ...THEME.text,
  },
  boldText: {
    ...THEME.boldText,
  },
  lightText: {
    ...THEME.lightText,
  },
  clearText: {
    color: THEME.color3,
  },
  price: {
    color: THEME.color5,
  },
  section: {
    backgroundColor: THEME.background1,
    flex: 1,
  },
  container: {
    padding: 16,
  },
  orderBottomTab: {
    paddingTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME.color4,
    backgroundColor: THEME.menuColor,
  },
  orderBottomTabItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  textButton: {
    flexDirection: 'row',
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: THEME.color3,
    alignItems: 'center',
    flexGrow: 1,
  },
});
