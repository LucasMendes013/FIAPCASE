import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SignOutIcon = (props) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.6875 9.37507H0.625008V0.625089H4.6875C4.86 0.625089 4.99999 0.485078 4.99999 0.312598C4.99999 0.140117 4.85998 0.000106812 4.6875 0.000106812H0.312491C0.140011 0.000106812 0 0.140091 0 0.312598V9.68756C0 9.86007 0.140011 10.0001 0.312491 10.0001H4.68747C4.85998 10.0001 4.99996 9.86004 4.99996 9.68756C4.99999 9.51506 4.85998 9.37507 4.6875 9.37507Z"
      fill="white"
    />
    <Path
      d="M9.90934 4.78187L7.7531 2.59469C7.63091 2.47125 7.4331 2.47156 7.31122 2.59469C7.18903 2.71782 7.18903 2.9178 7.31122 3.04093L8.93623 4.68937H2.50094C2.32843 4.68937 2.18845 4.83062 2.18845 5.005C2.18845 5.17938 2.32846 5.32063 2.50094 5.32063H8.93623L7.31122 6.96907C7.18903 7.09251 7.18903 7.29218 7.31122 7.41531C7.43341 7.53875 7.63122 7.53875 7.7531 7.41531L9.90903 5.22813C10.0297 5.10657 10.0309 4.90312 9.90934 4.78187Z"
      fill="white"
    />
  </Svg>
);
export default SignOutIcon;
