import { StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  squareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: THEME.borderRadius,
    borderWidth: 2,
    borderColor: THEME.button.color,
  },
  squareButtonDisabled: {
    backgroundColor: THEME.button.disabledColor,
    borderColor: THEME.button.disabledColor,
  },
});
