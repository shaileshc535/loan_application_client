/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Heading from '../../shared/ui/Heading/Heading';
import Group11 from '../../../public/Group11.png';
import Group12 from '../../../public/Group12.png';
import Group21 from '../../../public/Group21.png';
import Group22 from '../../../public/Group22.png';
import ArrowRight1 from '../../../public/arrow_right.png';
import ArrowRight2 from '../../../public/arrow_right_2.png';
import ArrowRight3 from '../../../public/arrow_right_3.png';
import ArrowRight4 from '../../../public/arrow_right_4.png';

const Empower: React.FC = () => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-10">
      <div className="w-[89%] flex flex-nowrap items-center justify-between mx-auto">
        <div className="content w-[45%]">
          <div className="w-[50%] pr-19">
            <Heading
              title="Empowering Businesses all over India"
              type="newxl"
              color="primary"
              classes="text-[#0C1825] font-bold"
            />
            <Heading
              title="Earn 5%-15% when you save with any of these plans.
"
              type="sm"
              color="primary"
              classes="text-black font-normal"
            />
            <button
              type="button"
              className="mt-5 text-white bg-bordercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center md:mr-0 transform transition duration-300 hover:scale-110"
            >
              Start Saving
            </button>
          </div>
        </div>

        <div className="content w-[55%] ">
          <div className="flex justify-between w-[100%]">
            <div className="px-4 py-6 flex flex-col justify-between items-start w-[319px] max-h-[340px] min-h-[340px] bg-[#f9f9f9] border rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <Image src={Group11} className="card-image w-[50px]" alt="Image" />

              <div className="">
                <Heading
                  title="1,70,000+"
                  type="xl"
                  color="primary"
                  classes="text-black font-bold"
                />
                <Heading
                  title="Loans Disbursed"
                  type="sm"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
              <div className="">
                <Image
                  src={ArrowRight1}
                  className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
                <button type="button" className="inline font-medium">
                  Know more
                </button>
              </div>
            </div>

            <div className="px-4 py-6 flex flex-col justify-between items-start w-[319px] max-h-[340px] min-h-[340px] bg-[#f9f9f9] border rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <Image src={Group12} className="card-image w-[50px]" alt="Image" />
              <div className="">
                <Heading title="11,700+" type="xl" color="primary" classes="text-black font-bold" />
                <Heading
                  title="Pincodes"
                  type="sm"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
              <div className="">
                <Image
                  src={ArrowRight2}
                  className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
                <button type="button" className="inline font-medium">
                  Know more
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-[100%] mt-16">
            <div className="px-4 py-6 flex flex-col justify-between items-start w-[319px] max-h-[340px] min-h-[340px] bg-[#f9f9f9] border rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <Image src={Group21} className="card-image w-[50px]" alt="Image" />
              <div className="">
                <Heading title="11,500+ Cr" type="xl" color="primary" classes="text-black font-bold" />
                <Heading
                  title="Amount Disbursed till date"
                  type="sm"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
              <div className="">
                <Image
                  src={ArrowRight3}
                  className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
                <button type="button" className="inline font-medium">
                  Know more
                </button>
              </div>
            </div>

            <div className="px-4 py-6 flex flex-col justify-between items-start w-[319px] max-h-[340px] min-h-[340px] bg-[#f9f9f9] border rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
              <Image src={Group22} className="card-image w-[50px]" alt="Image" />
              <div className="">
                <Heading title="4,000+" type="xl" color="primary" classes="text-black font-bold" />
                <Heading title="Cities & Towns" type="sm" color="primary" classes="text-black font-normal" />
              </div>
              <div className="">
                <Image
                  src={ArrowRight4}
                  className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
                <button type="button" className="inline font-medium">
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
