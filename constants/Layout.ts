import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// Layout to get relative dimensions and 
// reescalate in right way.
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isMediumDevice: width <= 485 && width >= 375,
  isLargeDevice: width > 485
};
