import { Dimensions } from 'react-native';

export default {
  borderRadius: 8,
  iconSize: 8,
  product: {
    normal: {
      width: Dimensions.get('screen').width * 0.4,
      height: Dimensions.get('screen').width * 0.25,
    },
    order: {
      width: Dimensions.get('screen').width * 0.15,
      height: Dimensions.get('screen').width * 0.15,
    },
  },
  category: {
    normal: {
      width: Dimensions.get('screen').width * 0.4,
      height: Dimensions.get('screen').width * 0.25,
    },
  },
};
