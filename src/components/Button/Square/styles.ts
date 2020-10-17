import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  squareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: THEME.background3,
  },
  squareButtonDisabled: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: THEME.background2,
    borderColor: THEME.background2,
  },
});
