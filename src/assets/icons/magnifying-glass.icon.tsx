import * as React from 'react';
import Svg, {Ellipse, Path, SvgProps} from 'react-native-svg';

export const MagnifyingGlassIcon = (props: SvgProps) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Ellipse
        cx={7.66439}
        cy={7.4819}
        rx={7.66439}
        ry={7.4819}
        transform="matrix(-1 0 0 1 16.997 1)"
        stroke="#67686D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.001 14.074L.997 17"
        stroke="#67686D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
