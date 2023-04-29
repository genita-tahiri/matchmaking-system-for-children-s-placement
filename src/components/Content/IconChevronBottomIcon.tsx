import { memo, SVGProps } from 'react';

const IconChevronBottomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.65045 0.0542412L0.134583 3.57011L9.51023 12.9458L18.8859 3.57011L15.37 0.0542412L9.51023 5.91402L3.65045 0.0542412Z'
      fill='#A3A3A3'
      stroke='white'
      strokeWidth={1.5}
    />
  </svg>
);

const Memo = memo(IconChevronBottomIcon);
export { Memo as IconChevronBottomIcon };
