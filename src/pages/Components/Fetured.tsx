/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Heading from '../../shared/ui/Heading/Heading';
import Screenshot from '../../../public/Screenshot.png';

const Fetured: React.FC = () => {
  return (
    <div className="hero container bg-[#f9f9f9] w-full">
      <div className="w-[80%] h-[283px] flex mx-auto">
        <div className="flex justify-start items-center content w-[50%]">
          <Heading
            title="3 Million + customers"
            type="newxl"
            color="primary"
            classes="text-bordercolor font-bold pt-1 transform transition duration-300 hover:scale-105"
          />
        </div>
        <div className="flex justify-start items-center content w-[50%]">
          <Image
            src={Screenshot}
            className="card-image w-[100%] transform transition duration-300 hover:scale-105"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Fetured;
