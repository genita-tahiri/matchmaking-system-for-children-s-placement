import { memo, SVGProps } from 'react';

const DividerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 311 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H311' stroke='#DDDDDD' />
  </svg>
);

const Memo = memo(DividerIcon);
export { Memo as DividerIcon };
