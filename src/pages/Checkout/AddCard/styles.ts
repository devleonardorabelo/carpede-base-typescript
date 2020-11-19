import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  lightText: {
    ...TextTheme.lightText,
    alignSelf: 'center',
    marginBottom: 8,
  },
  section: {
    backgroundColor: ColorTheme.background1,
    flex: 1,
  },
  container: {
    padding: 16,
  },
  imageCardFlags: {
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  rowInput: {
    flexDirection: 'row',
  },
});
