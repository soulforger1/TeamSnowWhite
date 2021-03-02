import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const ShareIcon: React.FC<Props> = ({
  height = 20,
  width = 20,
  color = '#181725',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...others}>
      <Path
        d="M11.552 5.267l-.256-.256v7.801a1.169 1.169 0 01-2.337 0V5.01l-.256.256-1.478 1.48s0 0 0 0a1.17 1.17 0 01-1.653-1.655l3.73-3.728h0a1.164 1.164 0 011.651 0h0l3.73 3.729s0 0 0 0a1.169 1.169 0 11-1.654 1.654l-1.477-1.48zM3.535 11.27h-.15V16.844H16.87V11.27H15.4a1.168 1.168 0 110-2.337h1.319a2.487 2.487 0 012.487 2.487v5.274a2.487 2.487 0 01-2.487 2.486H3.535a2.487 2.487 0 01-2.487-2.486V11.42a2.487 2.487 0 012.487-2.487h1.319a1.168 1.168 0 010 2.337H3.535z"
        fill={color}
        stroke="#fff"
        strokeWidth={0.3}
      />
    </Svg>
  );
};
