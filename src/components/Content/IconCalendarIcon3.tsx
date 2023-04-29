import { memo, SVGProps } from 'react';

const IconCalendarIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect y={0.5} width={50} height={27} rx={5} fill='white' />
    <path
      d='M20.0143 8.5V11.25H30V8.5H20.0143ZM20.0143 12.625V19.3762C20.0143 19.445 20.0713 19.5 20.1427 19.5H29.8573C29.9287 19.5 29.9857 19.445 29.9857 19.3762V12.625H20H20.0143ZM21.4408 14H22.8673V15.375H21.4408V14ZM24.2939 14H25.7204V15.375H24.2939V14ZM27.1469 14H28.5735V15.375H27.1469V14ZM21.4408 16.75H22.8673V18.125H21.4408V16.75ZM24.2939 16.75H25.7204V18.125H24.2939V16.75Z'
      fill='#A3A3A3'
    />
    <rect y={0.5} width={50} height={27} rx={5} stroke='#A3A3A3' strokeWidth={0.8} />
  </svg>
);

const Memo = memo(IconCalendarIcon3);
export { Memo as IconCalendarIcon3 };
