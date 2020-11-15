import { StyleSheet } from 'react-native';
import { ButtonTheme, SizeTheme } from '../../../constants';

export default StyleSheet.create({
  squareButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: SizeTheme.borderRadius,
    borderWidth: 2,
    borderColor: ButtonTheme.background,
  },
  squareButtonDisabled: {
    backgroundColor: ButtonTheme.backgroundDisabled,
    borderColor: ButtonTheme.backgroundDisabled,
  },
});
