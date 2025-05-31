import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const HomeIcon = (props: SvgProps) => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        d="M16.524 22H5.606c-1.737 0-3.146-1.54-3.146-3.438V9.847c.007-.747.328-1.45.872-1.904l5.934-5.258a2.67 2.67 0 013.572 0l5.96 5.248c.542.456.863 1.158.872 1.905v8.724c0 1.899-1.408 3.438-3.146 3.438z"
        stroke={props.fill || '#67686D'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
