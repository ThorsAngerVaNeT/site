import { FC } from 'react';
import { ArrowIconProps } from './icon.types';

export const Arrow: FC<ArrowIconProps> = ({ color }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      id="btn-arrow"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
