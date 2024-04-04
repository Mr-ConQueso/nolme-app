import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";

const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
};

const FONT = {
  regular: "Lato",
  bold: "Lato-Bold",
  tengwar: "Tengwar-Telcontar",
  tengwar_bold: "Tengwar-Telcontar-Bold",
  cirth: "Tolkien-Dwarf-Runes",
};

const SIZES = {
  paragraphSmall: clamp(16, responsiveWidth(4), 20),

  h1: clamp(24, responsiveWidth(4), 30),

  defaultRounding: 15,
};

export { COLORS, FONT, SIZES };
