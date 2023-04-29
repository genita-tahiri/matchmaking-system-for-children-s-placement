import { memo, SVGProps } from 'react';

const LineChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 712 147' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M116.406 36C72.3302 36 19.2127 117 0 117V147H712V85C645.321 85 623.283 29 584.857 29C546.432 29 515.352 104.5 469.016 104.5C422.679 104.5 399.511 0 350.914 0C302.317 0 287.625 80 232.813 80C178 80 160.483 36 116.406 36Z'
      fill='url(#paint0_linear_40_71)'
    />
    <path
      d='M0 117C19.2127 117 72.3302 36 116.406 36C160.483 36 178 80 232.813 80C287.625 80 302.317 0 350.914 0C399.511 0 422.679 104.5 469.016 104.5C515.352 104.5 546.432 29 584.857 29C623.283 29 645.321 85 712 85'
      stroke='#16AC6D'
    />
    <defs>
      <linearGradient id='paint0_linear_40_71' x1={356} y1={0} x2={356} y2={147} gradientUnits='userSpaceOnUse'>
        <stop stopColor='#7CF2C1' stopOpacity={0.2} />
        <stop offset={1} stopColor='#7CF2C1' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(LineChartIcon);
export { Memo as LineChartIcon };
