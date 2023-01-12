/* eslint-disable prettier/prettier */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../../shared/ui/Heading/Heading';
import Hero_Image from '../../../public/hero_image.svg';

const Hero: React.FC = () => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full">
      <div className="w-[89%] flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <div className="content w-[45%] px-2">
            <Heading
              title="The Better Way to Save & Invest."
              type="xxl"
              color="primary"
              classes="text-black font-bold transform transition duration-300 hover:scale-105"
            />

            <Heading
              title="We helps over 3 million customers acheive their financial goals by helping them save
              and invest with ease"
              type="sm"
              color="primary"
              classes="text-bordercolor font-normal mt-3.5 mb-10"
            />

            <Link
              href="/auth/signin/"
              className="text-white bg-bordercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3.5 text-center mr-3 md:mr-0 transform transition duration-300 hover:scale-110"
            >
              create free account
            </Link>
          </div>
          <div className="content">
            <Image src={Hero_Image} className="hero-image" alt="Hero_Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
