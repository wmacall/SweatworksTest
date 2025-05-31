import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M12.68 17.5a.65.65 0 01-.462-.19l-5.69-5.641a2.356 2.356 0 010-3.34l5.69-5.64a.663.663 0 01.925 0 .649.649 0 010 .916l-5.69 5.641a1.059 1.059 0 000 1.506l5.69 5.64a.649.649 0 010 .918.689.689 0 01-.462.19z"
        fill="#fff"
      />
    </Svg>
  );
};
