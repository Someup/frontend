import * as React from 'react';
const ThreeDotsFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12.5 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
  </svg>
);
export default ThreeDotsFilled;
