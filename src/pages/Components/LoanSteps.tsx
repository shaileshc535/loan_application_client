/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Heading from '../../shared/ui/Heading/Heading';
import MobileImage from '../../../public/mobile_image.png';
import Count1 from '../../../public/count1.png';
import Count2 from '../../../public/count2.png';
import Count3 from '../../../public/count3.png';

const LoanSteps: React.FC = () => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-10">
      <div className="w-[89%] flex flex-nowrap items-center justify-between mx-auto">
        <div className="content w-[45%]">
          <div className="w-[50%] pr-19">
            <Heading
              title="Three simple steps to get Unsecured Business Loan"
              type="newxl"
              color="primary"
              classes="text-black font-bold"
            />

            <button
              type="button"
              className="mt-4 text-[#7913E5] font-medium rounded-lg text-sm text-center transform transition duration-300 hover:scale-110"
            >
              Learn more`{'>'}`
            </button>
          </div>
        </div>

        <div className="content w-[55%] ">
          <div className="flex justify-end w-[100%]">
            <div className="p-1 flex justify-between items-start w-[75%] bg-[#f9f9f9] border rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <div className="flex flex-col justify-between w-[50%] px-[18px] py-10">
                <div className="py-1">
                  <Image
                    src={Count1}
                    className="card-image w-[25px] pr-2.5 inline cursor-pointer"
                    alt="Image"
                  />
                  <Heading
                    title="Enter Details"
                    type="lg"
                    color="primary"
                    classes="text-black font-bold mr-3"
                  />
                </div>
                <div className="py-1 pt-10 w-[50%]">
                  <Image
                    src={Count2}
                    className="card-image w-[25px] pr-2.5 inline cursor-pointer"
                    alt="Image"
                  />
                  <Heading
                    title="Complete Your KYC!"
                    type="lg"
                    color="primary"
                    classes="text-black font-bold mr-3"
                  />
                </div>
                <div className="py-1 pt-10 w-[50%]">
                  <Image
                    src={Count3}
                    className="card-image w-[25px] pr-2.5 inline cursor-pointer"
                    alt="Image"
                  />
                  <Heading
                    title="Get Loans for your business"
                    type="lg"
                    color="primary"
                    classes="text-black font-bold mr-3"
                  />
                </div>
              </div>
              <div className="w-[50%] pr-11">
                <Image
                  src={MobileImage}
                  className="card-image w-[100%] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSteps;
