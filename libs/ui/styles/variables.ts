import { Dimensions } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const isSmallScreen = screenWidth <= 360;
export const rem = isSmallScreen ? 13 : 16;

export const colors = {
  background: '#FFFFFF',
  backgroundSecondary: '#18191F',
  textPrimary: '#000000',
  primary: '#26a0f8'
};

export const spacings = {
  content: 0.8 * rem
};

export const fontSizes = {
  small: 0.7 * rem,
  regular: 1 * rem,
  large: 1.6 * rem
};
