import * as React from 'react';
import { SVGProps } from 'react';
const PlusOutlined = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M19.5 13h-6v6h-2v-6h-6v-2h6V5h2v6h6v2Z" />
  </svg>
);
export default PlusOutlined;
