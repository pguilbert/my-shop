import { StyleSheet } from "react-native";
const SPACING = 8;
export const spacing = (factor: number) => factor * SPACING;
export const margins = {
  m: (f: number) => ({ margin: spacing(2) }),
  ml: (f: number) => ({ marginLeft: spacing(2) }),
};

export const Colors = {
  primary: {
    main: "black",
    contrastText: "white",
  },
  text: {
    primary: "black",
  },
  background: {
    default: "white",
  },
  grey: {
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
};

export const Typography = StyleSheet.create({
  default: {},
  h1: {
    fontWeight: "800",
    fontSize: 36,
  },
  h2: {
    fontWeight: "400",
    fontSize: 18,
  },
});
