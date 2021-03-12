import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export const RightArrow: React.FC<Props> = ({
  width = 10,
  height = 15,
  color = '#181725',
  ...others
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 15"
      fill="none"
      {...others}>
      <Path
        d="M1.29607 2.68224C1.09894 2.48224 0.989422 2.21908 1.00037 1.9454C1.00037 1.67171 1.10989 1.41908 1.31798 1.21908C1.51511 1.02961 1.7889 0.913817 2.07365 0.913817C2.35839 0.913817 2.63219 1.00855 2.84027 1.19803L9.03897 7.15592C9.13753 7.25066 9.2142 7.36645 9.26895 7.49277C9.32371 7.61908 9.35657 7.75592 9.35657 7.89277C9.35657 8.02961 9.32371 8.16645 9.26895 8.30329C9.2142 8.42961 9.13753 8.5454 9.03897 8.64013L2.84027 14.598C2.7417 14.6928 2.62123 14.777 2.48981 14.8296C2.34744 14.8822 2.20507 14.9138 2.06269 14.9138C1.92032 14.9138 1.767 14.8928 1.63557 14.8401C1.50415 14.7875 1.38368 14.7033 1.27417 14.6086C1.1756 14.5138 1.09894 14.3875 1.04418 14.2612C0.978469 14.1349 0.956566 13.998 0.956566 13.8507C0.956566 13.7138 0.989421 13.577 1.04418 13.4507C1.09894 13.3243 1.18655 13.2086 1.29607 13.1033L6.71719 7.89277L5.68773 6.91382L1.29607 2.68224Z"
        fill={color}
        stroke="#fff"
        strokeWidth={0.1}
      />
    </Svg>
  );
};