import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const ExploreIcon: React.FC<Props> = ({
  width = 29,
  height = 25,
  color = '#181725',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 29 19"
      fill="none"
      {...others}>
      <Path
        d="M18.324 14.238a6 6 0 100-12.002 6 6 0 000 12.002zm6.32-1.095l3.58 3.58a1.004 1.004 0 01.23 1.099 1 1 0 01-1.645.315l-3.58-3.58a8 8 0 111.414-1.415l.001.002z"
        fill={color}
      />
      <Rect
        x={0.179443}
        y={0.23704}
        width={8.85499}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
      <Rect
        x={0.179443}
        y={7.67523}
        width={6.46414}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
      <Rect
        x={0.179443}
        y={15.1138}
        width={8.85499}
        height={2.39923}
        rx={1.19961}
        fill={color}
      />
    </Svg>
  );
};
