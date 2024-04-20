import clamp from "react-native-web/src/vendor/react-native/Utilities/clamp";
import {responsiveWidth} from "react-native-responsive-dimensions";

const SIZES = {
  paragraphSmall: clamp(16, responsiveWidth(4), 20),

  h1: clamp(24, responsiveWidth(4), 30),
  h2: clamp(18, responsiveWidth(4), 20),

  defaultRounding: 15,
  defaultBorderWidth: 4,
  defaultContentWidth: clamp(200, responsiveWidth(90), 1000),
};

export { SIZES };
