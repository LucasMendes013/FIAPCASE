import * as React from "react";
import Svg, { Rect } from "react-native-svg";
const DotIcon = (props) => (
  <Svg
    width={6}
    height={6}
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={5} height={5} rx={2.5} stroke="#CCCCCC" />
  </Svg>
);
export default DotIcon;
