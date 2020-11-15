import { StyleSheet } from 'react-native';
import { ColorTheme, TextTheme } from '../../../constants';

export default StyleSheet.create({
  boldText: {
    ...TextTheme.boldText,
    color: ColorTheme.background1,
    alignSelf: 'center',
  },
  orderFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: ColorTheme.background4,
  },
  orderFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  orderFooterLeft: {
    width: 80,
  },
  orderFooterLeftBadge: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 20,
    borderRadius: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: 'Montserrat Bold',
    left: 16,
    top: 14,
    color: ColorTheme.background4,
  },
  orderFooterCenter: {
    alignItems: 'center',
  },
  orderFooterRight: {
    width: 80,
    textAlign: 'right',
  },
});
