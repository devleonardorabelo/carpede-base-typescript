import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  boldText: {
    ...TextTheme.boldText,
  },
  lightText: {
    ...TextTheme.lightText,
    marginTop: -4,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: ColorTheme.color4,
    backgroundColor: ColorTheme.menuColor,
  },
  itemContentRight: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  itemImage: {
    width: 28,
    height: 28,
    marginRight: 16,
  },
});
