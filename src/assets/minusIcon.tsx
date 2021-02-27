import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

export const MinusIcon: React.FC<Props> = ({
  height = 4,
  width = 18,
  color = '#B3B3B3',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 4"
      fill="none"
      {...others}>
      <Path
        d="M17.744 2.138c0 .376-.144.739-.413 1.002-.264.27-.627.42-1.003.42H2.16a1.422 1.422 0 01-1.003-2.424A1.423 1.423 0 012.16.721h14.168a1.407 1.407 0 011.416 1.416z"
        fill={color}
      />
    </Svg>
  );
};
