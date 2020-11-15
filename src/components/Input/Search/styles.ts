import { StyleSheet } from 'react-native';
import { SizeTheme, ColorTheme } from '../../../constants';

export default StyleSheet.create({
  searchBox: {
    paddingHorizontal: 16,
    borderRadius: SizeTheme.borderRadius,
    backgroundColor: ColorTheme.background2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: ColorTheme.fontColor1,
    flexGrow: 1,
  },
});
