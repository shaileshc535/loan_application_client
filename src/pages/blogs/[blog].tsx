/* eslint-disable prettier/prettier */
/* eslint-disable react/no-danger */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import moment from 'moment';
import Heading from '../../shared/ui/Heading/Heading';
import Header from '../../shared/ui/Header/Header';
import { Loader } from '../../shared/ui/Loader/Loader';
import Footer from '../../shared/ui/Footer/Footer';
import { BlogSlider } from './BlogSlider';
import { useGetBlogQuery } from '../../shared/api/blogApi/blogApi';

const Home = () => {
  const router = useRouter();

  const { blog } = router.query;

  const { data, isLoading } = blog ? useGetBlogQuery(blog) : { data: null, isLoading: false };

  const createMarkupSummary = () => {
    return { __html: data ? data.summary : null };
  };

  const createMarkupDescription = () => {
    return { __html: data ? data.description : null };
  };

  return (
    <div>
      <div className="navbar relative z-10">
        <Header />
      </div>
      {isLoading ? (
        <div className="container max-w-6xl mt-12 p-6 mx-auto space-y-6 sm:space-y-12">
          <Loader />
        </div>
      ) : (
        <div className="container max-w-6xl mt-12 p-6 mx-auto space-y-6 sm:space-y-12">
          {data ? (
            <div>
              <div className="block max-w-sm gap-3 mx-auto sm:max-w-full p-4 mb-4 rounded-lg lg:grid lg:grid-cols-12 dark:bg-[#e9e9e9]">
                <img
                  src={data.main_image}
                  alt={data.main_image}
                  className="object-cover w-full h-auto rounded sm:h-96 lg:col-span-7 "
                />
                <div className="p-6 space-y-2 lg:col-span-5 flex flex-col justify-center">
                  <Heading
                    title={data.title}
                    type="xl"
                    color="primary"
                    classes="font-semibold group-hover:underline group-focus:underline"
                  />
                  <Heading
                    title={moment(data.createdAt).format('ll')}
                    type="sm"
                    color="primary"
                    classes="text-2xl font-medium dark:text-gray-400"
                  />
                  {data && <div dangerouslySetInnerHTML={createMarkupSummary()} />}
                </div>
              </div>

              <div className="block w-full mx-auto p-4 mb-4 rounded-lg dark:bg-[#e9e9e9]">
                <div className="w-full mx-auto">
                  <div className="p-6 space-y-2">
                    {data && <div dangerouslySetInnerHTML={createMarkupDescription()} />}
                  </div>
                </div>
              </div>

              <div className="block w-full mx-auto p-4 mb-4 rounded-lg dark:bg-[#e9e9e9]">
                <BlogSlider />
              </div>
            </div>
          ) : (
            <div>Fetching..</div>
          )}
        </div>
      )}
      <div className="div">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
