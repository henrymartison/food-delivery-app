import React from "react";

import Text from "../common/CustomText";
import Colors from "../../utils/Colors";

const LogoAlt = ({ style }) => (
  <Text
    type="extra-bold"
    style={[
      {
        color: Colors.primary,
        fontSize: 18,
        textTransform: "uppercase",
        letterSpacing: 6
      },
      style
    ]}
  >
    reso
  </Text>
);

export default LogoAlt;
