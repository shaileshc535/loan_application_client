import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex flex-row justify-center items-center">
    <Oval
      height={40}
      width={40}
      color="#91754A"
      wrapperClass=""
      visible
      ariaLabel="oval-loading"
      secondaryColor="#CB9D54"
      strokeWidth={6}
      strokeWidthSecondary={6}
    />
  </div>
);

export { Loader };
