import { StyleSheet } from 'react-native';
import { ButtonTheme } from '../../../constants';

export default StyleSheet.create({
  iconCircularButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    width: 72,
    borderRadius: 100,
    marginVertical: 16,
    backgroundColor: ButtonTheme.background,
  },
  iconCircularButtonDisabled: {
    backgroundColor: ButtonTheme.backgroundDisabled,
  },
});
