import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../../constants';

export default StyleSheet.create({
  textInputBox: {
    flexDirection: 'column',
    marginBottom: 16,
  },
  labelInput: {
    fontFamily: 'Montserrat SemiBold',
    fontSize: 16,
    color: ColorTheme.color1,
    paddingBottom: 8,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    fontFamily: 'Montserrat Medium',
    fontSize: 16,
    color: ColorTheme.color1,
    backgroundColor: ColorTheme.background2,
  },
});
