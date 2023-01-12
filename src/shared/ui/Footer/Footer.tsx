/* eslint-disable prettier/prettier */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '../Heading/Heading';
import Logo from '../../../../public/logo.svg';
import Icon3 from '../../../../public/Icon3.png';
import Icon4 from '../../../../public/icon4.png';
import Icon5 from '../../../../public/Icon5.png';

interface FooterInterface {
  content?: string;
  onClick?: () => void;
}

const Footer: React.FC<FooterInterface> = ({ content, onClick }) => {
  return (
    <div className="hero container bg-transparent px-2 sm:px-4 w-full pt-10">
      <div className="w-[89%] flex flex-nowrap items-start justify-between mx-auto">
        <div className="content w-[25%]">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              className="header-logo transform transition duration-300 hover:scale-110"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="content w-[50%] flex">
          <div className="list_item ">
            <ul>
              <li className="Heading">
                <Heading
                  title="Products"
                  type="sm"
                  color="primary"
                  classes="text-black font-bold transform transition duration-300 hover:scale-110 hover:font-bold"
                />
              </li>
              <li className="footer-link pt-4">
                <Link href="/products/piggybank" className="flex items-center">
                  <Heading
                    title="Piggybank"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/products/invest" className="flex items-center">
                  <Heading
                    title="Invest"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/products/safelock" className="flex items-center">
                  <Heading
                    title="Safelock"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/products/target-saving" className="flex items-center">
                  <Heading
                    title="Target Savings"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/products/flexnaira" className="flex items-center">
                  <Heading
                    title="Flex Naira"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="list_item ml-24 mr-24">
            <ul className="ml-1 mr-1">
              <li className="Heading">
                <Heading
                  title="Company"
                  type="sm"
                  color="primary"
                  classes="text-black font-bold transform transition duration-300 hover:scale-110 hover:font-bold"
                />
              </li>
              <li className="footer-link pt-4">
                <Link href="/aboutus/" className="flex items-center">
                  <Heading
                    title="About"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/faq/" className="flex items-center">
                  <Heading
                    title="FAQs"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/blogs" className="flex items-center">
                  <Heading
                    title="Blog"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-110 hover:font-medium"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="list_item">
            <ul>
              <li className="Heading">
                <Heading
                  title="Legal"
                  type="sm"
                  color="primary"
                  classes="text-black font-bold transform transition duration-300 hover:scale-110 hover:font-bold"
                />
              </li>
              <li className="footer-link pt-4">
                <Link href="/term/" className="flex items-center">
                  <Heading
                    title="Terms"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-105 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/privacy/" className="flex items-center">
                  <Heading
                    title="Privacy"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-105 hover:font-medium"
                  />
                </Link>
              </li>
              <li className="footer-link pt-4">
                <Link href="/security/" className="flex items-center">
                  <Heading
                    title="Security"
                    type="xs"
                    color="primary"
                    classes="text-black font-normal transform transition duration-300 hover:scale-105 hover:font-medium"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="content w-[25%] px-14">
          <div className="icon-container flex justify-end px-6">
            <Link href="#" className="flex items-center">
              <Image
                src={Icon3}
                className="social-icon mr-4 w-[24px] transform transition duration-300 hover:scale-110"
                alt="icons"
              />
            </Link>
            <Link href="#" className="flex items-center">
              <Image
                src={Icon4}
                className="social-icon mr-4 w-[24px] transform transition duration-300 hover:scale-110"
                alt="icons"
              />
            </Link>
            <Link href="#" className="flex items-center">
              <Image
                src={Icon5}
                className="social-icon w-[24px] transform transition duration-300 hover:scale-110"
                alt="icons"
              />
            </Link>
          </div>
          <Heading
            title="Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria."
            type="xs"
            color="primary"
            classes="text-black font-normal mt-3 transform transition duration-300 hover:scale-105"
          />
          <Heading
            title="contact@dams.com"
            type="xs"
            color="primary"
            classes="text-black font-normal mt-5 transform transition duration-300 hover:scale-105"
          />
          <Heading
            title="+234 700 933 933 933"
            type="xs"
            color="primary"
            classes="text-black font-normal mt-5 transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-nowrap justify-center mt-36 pb-10">
        <Heading
          title="copyright 2022 DAMS "
          type="xs"
          color="primary"
          classes="text-[#0047FF] font-medium mt-5 transform transition duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Footer;
