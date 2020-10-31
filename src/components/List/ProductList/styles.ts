import { Dimensions, StyleSheet } from 'react-native';
import { THEME } from '../../../constants';

export default StyleSheet.create({
  boldText: THEME.boldText,
  lightText: THEME.lightText,
  subtitle: THEME.subtitle,
  price: {
    color: THEME.color5,
  },
  onSale: {
    textDecorationLine: 'line-through',
    color: THEME.color3,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  cardBody: {
    paddingHorizontal: 8,
    flexShrink: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').width / 4,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  illustration: {
    ...THEME.illustration,
    resizeMode: 'center',
  },
});
