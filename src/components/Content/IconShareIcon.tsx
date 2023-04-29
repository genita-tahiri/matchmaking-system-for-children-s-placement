import { memo, SVGProps } from 'react';

const IconShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7.5 0.75V3.75C1.5 3.75 0 6.825 0 11.25C0.78 8.28 3 6.75 6 6.75H7.5V9.75L12 5.01L7.5 0.75Z' fill='black' />
  </svg>
);

const Memo = memo(IconShareIcon);
export { Memo as IconShareIcon };
