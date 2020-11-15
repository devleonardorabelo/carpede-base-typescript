import { StyleSheet } from 'react-native';
import { ButtonTheme, SizeTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  rectangularButton: {
    backgroundColor: ButtonTheme.background,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: SizeTheme.borderRadius,
    flexGrow: 1,
  },
  rectangularButtonDisabled: {
    backgroundColor: ButtonTheme.backgroundDisabled,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    borderRadius: SizeTheme.borderRadius,
  },
  retangularButtonText: {
    ...TextTheme.text,
    color: ButtonTheme.contentColor,
  },
  retangularButtonTextDisabled: {
    ...TextTheme.text,
    color: ButtonTheme.contentColor,
  },
});
