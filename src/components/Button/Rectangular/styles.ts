import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  rectangularButton: {
    backgroundColor: THEME.button.color,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: THEME.borderRadius,
    flexGrow: 1,
  },
  rectangularButtonDisabled: {
    backgroundColor: THEME.button.disabledColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: THEME.borderRadius,
  },
  retangularButtonText: {
    ...THEME.text,
    color: THEME.button.contentColor,
  },
  retangularButtonTextDisabled: {
    ...THEME.text,
    color: THEME.button.contentColorDisabled,
  },
});
