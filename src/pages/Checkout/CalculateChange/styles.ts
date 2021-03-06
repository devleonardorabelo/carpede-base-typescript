import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  lightText: {
    ...TextTheme.lightText,
  },
  boldText: {
    ...TextTheme.boldText,
  },
  text: {
    ...TextTheme.text,
  },
  price: {
    ...TextTheme.subtitle,
    color: ColorTheme.color5,
  },
  section: {
    backgroundColor: ColorTheme.background1,
    flex: 1,
  },
  container: {
    padding: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 16,
    borderBottomColor: ColorTheme.color4,
  },
});
