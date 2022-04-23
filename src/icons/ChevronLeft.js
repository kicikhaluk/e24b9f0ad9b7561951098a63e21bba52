import * as React from 'react';

const SvgChevronLeft = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='chevron-left_svg__feather chevron-left_svg__feather-chevron-left'
    {...props}
  >
    <path d='m15 18-6-6 6-6' />
  </svg>
);

export default SvgChevronLeft;
