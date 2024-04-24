import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {Platform} from "react-native";

const SIZES = {
  paragraphSmall: clamp(16, responsiveWidth(4), 20),

  h1: clamp(24, responsiveWidth(4), 30),
  h2: clamp(18, responsiveWidth(4), 20),

  defaultRounding: 15,
  defaultBorderWidth: 4,
  defaultContentWidth: clamp(200, responsiveWidth(90), 1000),
};

const FONTS = {
  default: Platform.select({
    android: 'Lato_400Regular',
    ios: 'Lato-Regular',
  }),
  bold: Platform.select({
    android: 'Lato_700Bold',
    ios: 'Lato-Bold',
  }),
  tengwar: Platform.select({
    android: 'Tengwar Telcontar',
    ios: 'Tengwar Telcontar',
  }),
  cirth: Platform.select({
    android: 'Tolkien Dwarf Runes',
    ios: 'Tolkien Dwarf Runes',
  })
}

export { SIZES, FONTS};
