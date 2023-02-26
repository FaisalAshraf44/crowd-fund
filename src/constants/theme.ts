import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#161616',
    secondary: '#7C7D7D',
    primaryDark: '#141414',
    darkGray: '#9C9C9C',
    lightGray: '#E6E6E6',
    blue: '#2D53DA',
    lightBlue: '#F2F5FD',
    lightYellow: '#FDEFC4',
    value: '#232323',
    green: '#58A771',
    lightGreen: `rgba(88, 167, 113, 0.1)`,
    red: '#CC3133',
    lightRed: 'rgba(204, 49, 51, 0.1)'
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 32,

    // font sizes
    largeTitle: 29,
    h1: 30,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 18,
        lineHeight: 25,
        color: COLORS.value,
    },
    h1: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 20,
        lineHeight: 28,
        color: COLORS.primaryDark,
    },
    h2: {
        fontFamily: 'Metropolis-Light',
        fontSize: 16,
        color: '#656565',
        lineHeight: 22,
    },
    h3: {
        fontFamily: 'Metropolis-Medium',
        fontSize: 16,
        color: COLORS.primary,
        lineHeight: 20,
    },
    body2: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 18,
        lineHeight: 27,
        color: COLORS.primary,
    },
    body3: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 16,
        lineHeight: 24,
        color: COLORS.white,
    },
    body4: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 14,
        lineHeight: 18,
        color: COLORS.white,
    },
    body5: {
        fontFamily: 'Metropolis-Regular',
        fontSize: 12,
        color: COLORS.secondary,
        lineHeight: 16,
    }
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;