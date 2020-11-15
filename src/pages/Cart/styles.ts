import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../constants';

export default StyleSheet.create({
  title: TextTheme.title,
  subtitle: TextTheme.subtitle,
  text: {
    ...TextTheme.text,
  },
  boldText: {
    ...TextTheme.boldText,
  },
  lightText: {
    ...TextTheme.lightText,
  },
  price: {
    color: ColorTheme.color5,
  },
  section: {
    backgroundColor: ColorTheme.background1,
    flex: 1,
  },
  container: {
    padding: 16,
  },
  orderBottomTab: {
    paddingTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: ColorTheme.color4,
    backgroundColor: ColorTheme.menuColor,
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
    borderColor: ColorTheme.color3,
    alignItems: 'center',
    flexGrow: 1,
  },
});
