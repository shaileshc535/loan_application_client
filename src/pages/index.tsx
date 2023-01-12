/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
import Head from 'next/head';
import { NextPage } from 'next';
import Header from '../shared/ui/Header/Header';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Calculator from './Components/Calculator';
import Empower from './Components/Empower';
import LoanSteps from './Components/LoanSteps';
import VideoThumbnail from './Components/VideoThumbnail';
import Customers from './Components/Customers';
import Fetured from './Components/Fetured';
import Footer from '../shared/ui/Footer/Footer';

// @ts-ignore
const Home: NextPage = () => (
  <div>
    <Head>
      <title>DAMS</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#151515" />
    </Head>
    <main>
      <div className="dashboard relative">
        <div className="navbar relative z-10">
          <Header />
        </div>
        
        <div className="hero-div relative z-10">
          <Hero />
        </div>
        <div className="ractangle bg-[rgba(206,255,243,0.31)] w-[33%] h-[110vh] absolute right-0 top-0 z-0" />
      </div>
      <div className="div">
        <AboutUs />
      </div>
      <div className="div mt-[144px]">
        <Calculator />
      </div>
      <div className="div mt-[144px]">
        <Empower />
      </div>
      <div className="div mt-[144px]">
        <LoanSteps />
      </div>
      <div className="div mt-[144px]">
        <VideoThumbnail />
      </div>
      <div className="div mt-[144px]">
        <Customers />
      </div>
      <div className="div mt-[144px]">
        <Fetured />
      </div>
      <div className="div mt-[144px]">
        <Footer />
      </div>
    </main>
  </div>
);

export default Home;