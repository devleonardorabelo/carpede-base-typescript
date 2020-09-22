import { StyleSheet } from 'react-native';
import { THEME } from '../../constants';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  navigationTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat SemiBold',
    color: THEME.color1,
  },
});
