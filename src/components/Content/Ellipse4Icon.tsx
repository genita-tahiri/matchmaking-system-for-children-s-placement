import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 169 169' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M75.617 0.468204C91.1144 -1.17002 106.763 1.50925 120.833 8.20977C134.902 14.9103 146.845 25.3711 155.34 38.4356C163.835 51.5001 168.552 66.6594 168.97 82.2375C169.387 97.8156 165.488 113.206 157.704 126.706L121.102 105.603C124.994 98.8528 126.943 91.1578 126.735 83.3687C126.526 75.5797 124.168 68 119.92 61.4678C115.672 54.9355 109.701 49.7052 102.666 46.3549C95.6314 43.0046 87.8072 41.665 80.0585 42.4841L75.617 0.468204Z'
      fill='#7CF2C1'
    />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
