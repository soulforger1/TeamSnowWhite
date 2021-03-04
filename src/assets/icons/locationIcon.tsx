import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
  others?: any;
}

export const LocationIcon: React.FC<Props> = ({
  height = 19,
  width = 16,
  color = '#4C4F4D',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      fill="none"
      {...others}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.02 1.308A7.468 7.468 0 008.123.696a7.397 7.397 0 00-5.399 2.22 7.801 7.801 0 00-.09 10.87l4.601 4.763a1.009 1.009 0 001.108.238.948.948 0 00.325-.228l4.683-4.693a7.8 7.8 0 00.101-10.87 7.467 7.467 0 00-2.432-1.688zm-3.058 9.697a2.443 2.443 0 100-4.885 2.443 2.443 0 000 4.885z"
        fill={color}
      />
    </Svg>
  );
};
