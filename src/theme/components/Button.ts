import { defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    fontFamily: "Sharpie",
    fontWeight: "bold",
    fontSize: "4rem",
    rounded: "none",
    _active: {
      transform: "translateY(2px)",
      bgColor: "#fafafa",
    },
  },

  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },
  variants: {
    formGray: (props: StyleFunctionProps) => ({
      border: "1px",
      fontSize: "5rem",
      bg: "socialIconsGray",
      borderTop: "8px solid #E9EBED",
      color: "white",
      w: "full",
      px: "-4rem",
      h: "fit",
    }),
    formBlue: (props: StyleFunctionProps) => ({
      border: "1px",
      fontSize: "5rem",
      bg: "formBlueDark",
      borderTop: "8px solid #89DCFF",
      color: "white",
      w: "full",
      px: "-4rem",
      h: "fit",
    }),
    formGreen: (props: StyleFunctionProps) => ({
      border: "1px",
      fontSize: "5rem",
      bg: "#5DBA14",
      borderTop: "8px solid #99DA67",
      color: "white",
      w: "full",
      px: "-4rem",
      h: "fit",
    }),

    login: {
      w: "full",
      color: "loginBtnGray",
      fontWeight: "normal",
      fontSize: "2.5rem",
      border: "1px",
      borderColor: "#E5E7EB",
      textAlign: "left",
      justifyContent: "start",
      borderRadius: "lg",
      h: "fit",
      rounded: "md",
    },

    ramps: (props: StyleFunctionProps) => ({
      w: "full",
      fontFamily: "Inter",
      fontSize: "32px",
      lineHeight: "32px",
      justifyContent: "start",
      color: `${props.color}`,
      border: "solid #E5E7EB 1px",
      rounded: "6px",
      py: "2rem",
    }),
  },
  defaultProps: {
    size: "md",
    variant: "formGray",
  },
});

export default Button;