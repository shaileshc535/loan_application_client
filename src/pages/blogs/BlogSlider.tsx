/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import moment from 'moment';
import Heading from '../../shared/ui/Heading/Heading';
import { Loader } from '../../shared/ui/Loader/Loader';
import Header from '../../shared/ui/Header/Header';
import Footer from '../../shared/ui/Footer/Footer';
import { useGetAllBlogMutation } from '../../shared/api/blogApi/blogApi';

const BlogSlider = () => {
  const [page] = useState(1);
  const [limit] = useState(10);

//   const [getAllFaq, { data, isLoading }] = useGetAllBlogMutation();

//   const GetData = async () => {
//     try {
//       await getAllFaq({
//         page,
//         limit,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     GetData();
//   }, []);

  //   if (isLoading) {
  //     return (
  //       <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
  //         <Loader />
  //       </div>
  //     );
  //   }

  return (
    <div className="mt-10">
      <h1>Slider</h1>
    </div>
  );
};

export { BlogSlider };

// /* eslint-disable prettier/prettier */
// import React from 'react';
// import { Oval } from 'react-loader-spinner';

// const Loader = () => (
//   <div className="flex flex-row justify-center items-center">
//     <Oval
//       height={40}
//       width={40}
//       color="#91754A"
//       wrapperClass=""
//       visible
//       ariaLabel="oval-loading"
//       secondaryColor="#CB9D54"
//       strokeWidth={6}
//       strokeWidthSecondary={6}
//     />
//   </div>
// );

// export { Loader };
