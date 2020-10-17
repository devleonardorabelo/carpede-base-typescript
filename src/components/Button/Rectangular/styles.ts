import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  rectangularButton: {
    backgroundColor: THEME.background4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    flexGrow: 1,
  },
  rectangularButtonDisabled: {
    backgroundColor: THEME.background2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
  },
  retangularButtonText: {
    ...THEME.text,
    color: THEME.background1,
  },
});
