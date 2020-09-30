import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    width: 72,
    borderRadius: 100,
    marginVertical: 16,
    backgroundColor: THEME.background3,
  },
  iconButtonDisabled: {
    backgroundColor: THEME.background2,
  },
});
