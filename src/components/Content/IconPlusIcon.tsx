import { memo, SVGProps } from 'react';

const IconPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.49852 0.335308V3.83383H0V6.16617H3.49852V9.66469H5.83086V6.16617H9.32938V3.83383H5.83086V0.335308H3.49852Z'
      fill='white'
      stroke='#17AD6E'
      strokeWidth={0.5}
    />
  </svg>
);

const Memo = memo(IconPlusIcon);
export { Memo as IconPlusIcon };
