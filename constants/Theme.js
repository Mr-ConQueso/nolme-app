import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";
import {Dimensions, Platform} from "react-native";

const SIZES = {
  paragraphSmall: clamp(16, responsiveWidth(4), 20),

  h1: clamp(24, responsiveWidth(4), 30),
  h2: clamp(18, responsiveWidth(4), 20),

  defaultRounding: 15,
  defaultBorderWidth: 4,
  defaultContentWidth: clamp(200, responsiveWidth(90), 1000),
};

const IsVertical = () => {
  return Dimensions.get("window").width / Dimensions.get("window").height < 1;
}

const FONTS = {
  default: Platform.select({
    android: 'Lato_400Regular',
    ios: 'Lato-Regular',
  }),
  bold: Platform.select({
    android: 'Lato_700Bold',
    ios: 'Lato-Bold',
  }),
  tengwar: 'Tengwar_Telcontar',
  cirth: 'Cirth',
}

export { SIZES, FONTS, IsVertical};
