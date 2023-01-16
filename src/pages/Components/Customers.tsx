/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../../shared/ui/Heading/Heading';
import People1 from '../../../public/people1.png';
import People2 from '../../../public/people2.png';
import People3 from '../../../public/people3.png';
import Icon1 from '../../../public/Icon1.png';
import Icon2 from '../../../public/Icon2.png';

const Customers: React.FC = () => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-10">
      <div className="w-[89%] flex flex-nowrap items-center justify-between mx-auto">
        <div className="flex justify-start items-center content w-[50%]">
          <div className="flex flex-col">
            <div className="flex w-[65%] transform transition duration-300 hover:scale-105">
              <Image src={People1} className="card-image h-[30px] w-[30px] mr-3" alt="Image" />
              <div>
                <Heading
                  title="Tunde Ayodele"
                  type="sm"
                  color="primary"
                  classes="text-bordercolor font-bold"
                />
                <Heading
                  title="Piggyvest has helped a lot on my saving journey. The platform has made me appreciate diligence."
                  type="xs"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
            </div>

            <div className="flex w-[65%] mt-9 transform transition duration-300 hover:scale-105">
              <Image src={People2} className="card-image h-[30px] w-[30px] mr-3" alt="Image" />
              <div>
                <Heading
                  title="Ayoola Saheed"
                  type="sm"
                  color="primary"
                  classes="text-bordercolor font-bold"
                />
                <Heading
                  title="Piggyvest has helped a lot on my saving journey. The platform has made me appreciate diligence."
                  type="xs"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
            </div>

            <div className="flex w-[65%] mt-9 transform transition duration-300 hover:scale-105">
              <Image src={People3} className="card-image h-[30px] w-[30px] mr-3" alt="Image" />
              <div>
                <Heading
                  title="Mide Moyosore"
                  type="sm"
                  color="primary"
                  classes="text-bordercolor font-bold"
                />
                <Heading
                  title="Piggyvest has helped a lot on my saving journey. The platform has made me appreciate diligence."
                  type="xs"
                  color="primary"
                  classes="text-black font-normal"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center content w-[50%]">
          <div className="flex flex-col">
            <Heading
              title="3 Million + customers"
              type="newxl"
              color="primary"
              classes="text-bordercolor font-bold pt-1 transform transition duration-300 hover:scale-105"
            />
            <Heading
              title="Since launching in 2016, over 3,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable."
              type="sm"
              color="primary"
              classes="text-black font-normal pt-4 mb-10 max-w-[410px] transform transition duration-300 hover:scale-105"
            />
            <div>
              <Link
                href="/auth/signup/"
                className="shadow-lg text-white bg-bordercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3.5 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-110"
              >
                create free account
              </Link>
            </div>
            <div className="flex">
              <div className="pt-10">
                <button
                  type="button"
                  className="rounded-xl shadow-lg border-solid border-2 border-gray-300 py-4 px-5 font-medium inline text-bordercolor transform transition duration-300 hover:scale-110"
                >
                  <Image
                    src={Icon1}
                    className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                    alt="Image"
                  />
                  Get on iphone
                </button>
              </div>
              <div className="px-5 py-4.5 border-1 ml-8 pt-10">
                <button
                  type="button"
                  className="rounded-xl shadow-lg border-solid border-2 border-gray-300 py-4 px-5 font-medium inline text-bordercolor transform transition duration-300 hover:scale-110"
                >
                  <Image
                    src={Icon2}
                    className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                    alt="Image"
                  />
                  Get on Android
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
