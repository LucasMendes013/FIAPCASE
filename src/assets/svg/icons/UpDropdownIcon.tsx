import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const UpDropdownIcon = (props) => (
  <Svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_3_291)">
      <Path
        d="M13.8136 10.6318C13.5651 10.8803 13.1622 10.8803 12.9137 10.6318L7.00015 4.71812L1.08634 10.6318C0.837858 10.8803 0.434912 10.8803 0.186391 10.6318C-0.0621303 10.3832 -0.0621303 9.98034 0.186391 9.73182L6.5502 3.36818C6.66954 3.24884 6.83138 3.18181 7.00015 3.18181C7.16891 3.18181 7.3308 3.24889 7.4501 3.36822L13.8136 9.73186C14.0621 9.98034 14.0621 10.3833 13.8136 10.6318Z"
        fill="#29F4D5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3_291">
        <Rect
          width={14}
          height={14}
          fill="white"
          transform="matrix(1 0 0 -1 0 14)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default UpDropdownIcon;
