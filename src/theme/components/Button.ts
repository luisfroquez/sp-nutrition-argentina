import { whiten, darken } from "@chakra-ui/theme-tools";

export const Button = {
  // style object for base or default style
  baseStyle: {
    bg: "transparent",
    _focus: {
      boxShadow: "none",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      borderRadius: "0.75em",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: "white",
      fontWeight: "normal",
      border: "1px solid red",
      bg: "red",
      paddingX: 4,
      _hover: {
        bg: "transparent",
        color: "red"
      },
      _focus: {
        bg: "red.900",
        color: "red"
      },
      _active: {
        bg: "red.400",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "sm",
    variant: "",
  },
};
