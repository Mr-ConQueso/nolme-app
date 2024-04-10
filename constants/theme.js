import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";

const COLORS = {

  // --- / DARK THEME / --- //
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  background: "#1E1F22",
  gray: "#2B2D30",
  lightGray: "#4D4E51",

  heading: "#DfE1E5",
  text: "#DfE1E5",
  subtitle: "#4D4E51",

  // --- / LIGHT THEME / --- //
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
