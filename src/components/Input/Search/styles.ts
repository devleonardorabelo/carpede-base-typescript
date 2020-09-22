import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  searchBox: {
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: THEME.background2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  searchInput: {
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: THEME.color1,
    flexGrow: 1,
  },
});
