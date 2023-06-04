import { darken, whiten } from '@chakra-ui/theme-tools';
import { colors } from '../../constants/colors';

export const buttonStyles = {
  baseStyle: {},
  sizes: {
    md: {
      px: '18px',
    },
  },
  variants: {
    primary: {
      bg: colors.green,
      color: colors.white,
      borderRadius:"12px",
      _hover: {
        bg: colors.lightGreen,
        _disabled: {
          opacity: 0.4,
          bg: colors.green,
        },
      },
    },
    primaryOutline: {
      bg: colors.white,
      color: colors.green,
      borderWidth: '1px',
      borderColor: colors.green,
      _hover: {
        bg: colors.green,
        color: colors.white,
      },
      borderRadius: "12px",
    },
    default: {
      bg: colors.white,
      color: colors.black,
      _hover: {
        bg: darken(colors.white, 80),
        color: whiten(colors.black, 80),
      },
      borderRadius: "12px",
    },
  },
};