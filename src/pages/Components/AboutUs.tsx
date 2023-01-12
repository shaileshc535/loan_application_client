/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Heading from '../../shared/ui/Heading/Heading';
import Image11 from '../../../public/image11.png';
import Image12 from '../../../public/image12.png';
import Image13 from '../../../public/image13.png';
import Image21 from '../../../public/image21.png';
import Image22 from '../../../public/image22.png';
import Image23 from '../../../public/image23.png';

const AboutUs: React.FC = () => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-12">
      <div className="w-[89%] flex flex-wrap items-center justify-between mx-auto">
        <div className="divider w-[100%] h-[1px] bg-bordercolor" />
        <div className="flex justify-between w-[100%] flex-nowrap pt-10 px-2">
          <div className="content flex flex-col justify-center items-start w-[140px] transform transition duration-300 hover:scale-110">
            <Heading title="10L+" type="xxl" color="primary" classes="text-[#27221F] font-bold" />
            <Heading
              title="Members signed up so far"
              type="xl"
              color="primary"
              classes="text-[#3362CC] font-bold"
            />
          </div>
          <div className="content flex flex-col justify-center items-start w-[180px] transform transition duration-300 hover:scale-110">
            <Heading title="$520M+" type="xxl" color="primary" classes="text-[#27221F] font-bold" />
            <Heading
              title="Loans secured at the lowest rates"
              type="xl"
              color="primary"
              classes="text-[#3362CC] font-bold"
            />
          </div>
          <div className="content flex flex-col justify-center items-start w-[180px] transform transition duration-300 hover:scale-110">
            <Heading title="1.6%" type="xxl" color="primary" classes="text-[#27221F] font-bold" />
            <Heading
              title="Lower rate for the median member"
              type="xl"
              color="primary"
              classes="text-[#3362CC] font-bold"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto w-[89%] mt-[150px]">
        <div className="flex justify-between w-[100%]">
          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image11} className="card-image w-[100px]" alt="Image" />
            <Heading
              title="Parents Loans"
              type="xl"
              color="primary"
              classes="text-black font-bold"
            />
          </div>

          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image12} className="card-image w-[100px]" alt="Image" />
            <Heading
              title="Education Loans"
              type="xl"
              color="primary"
              classes="text-black font-bold"
            />
          </div>
          
          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image13} className="card-image w-[100px]" alt="Image" />
            <Heading
              title="Business Loans"
              type="xl"
              color="primary"
              classes="text-black font-bold"
            />
          </div>
        </div>

        <div className="flex justify-between w-[100%] mt-[100px]">
          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image21} className="card-image w-[100px]" alt="Image" />
            <div className="w-[50%] pt-5">
              <Heading
                title="Home Loans"
                type="xl"
                color="primary"
                classes="text-black font-bold"
              />
            </div>
          </div>
          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image22} className="card-image w-[100px]" alt="Image" />
            <div className="w-[50%] pt-5">
              <Heading
                title="Gold Loans"
                type="xl"
                color="primary"
                classes="text-black font-bold"
              />
            </div>
          </div>
          <div className="px-20 flex flex-col justify-center items-start w-[310px] h-[260px] bg-white rounded-2xl shadow-lg border-solid border-gray-300 border-2 transform transition duration-300 hover:scale-105">
            <Image src={Image23} className="card-image w-[100px]" alt="Image" />
            <div className="w-[50%] pt-5">
              <Heading title="Car Loans" type="xl" color="primary" classes="text-black font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
