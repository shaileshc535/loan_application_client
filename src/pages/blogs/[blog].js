import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  useGetAllBlogMutation,
  useGetAllBlogCategoryMutation,
  useGetBlogQuery,
} from '../../shared/api/blogApi/blogApi';
import Link from 'next/link';
import moment from 'moment';
import Heading from '../../shared/ui/Heading/Heading';
import Header from '../../shared/ui/Header/Header';
import Footer from '../../shared/ui/Footer/Footer';

const Home = () => {
  const router = useRouter();
  const { blog } = router.query;

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [blogData, setBlogData] = useState([]);
  const [summary, setSummary] = useState({ __html: '' });

  const { data, isError, isSuccess, error, isLoading } = useGetBlogQuery(blog);

  useEffect(() => {
    if (data) {
      setSummary(data.summary);
      console.log('data', data);
      // setBlogData(data);
    }

    if (isError) {
      setErrorMsg(error);
    }
  }, [data, isError]);

  const createMarkupSummary = () => {
    return { __html: data.summary };
  };

  const createMarkupDescription = () => {
    return { __html: data.description };
  };

  return (
    <div>
      <div className="navbar relative z-10">
        <Header />
      </div>
      {isLoading ? (
        <div>loader</div>
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
                  {data && <div dangerouslySetInnerHTML={createMarkupDescription()}></div>}
                </div>
              </div>

              <div className="block w-full mx-auto p-4 mb-4 rounded-lg dark:bg-[#e9e9e9]">
                <div className="w-full mx-auto">
                  {/* <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src="https://source.unsplash.com/random/480x360?1"
                  /> */}
                  <div className="p-6 space-y-2">
                    {data && <div dangerouslySetInnerHTML={createMarkupSummary()}></div>}

                    {/* <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      In usu laoreet repudiare legendos
                    </h3>
                    <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                    <p>
                      Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has
                      tantas percipit perfecto. At per tempor albucius perfecto, ei probatus
                      consulatu patrioque mea, ei vocent delicata indoctum pri.
                    </p> */}
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
                >
                  Load more posts...
                </button>
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

<div className="card-header">
  <h4 className="font-normal text">
    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit
    perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent
    delicata indoctum pri. Contrary to popular belief, Lorem Ipsum is not simply random text. It has
    roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
    the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
    cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
    from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and
    Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
    during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from
    a line in section 1.10.32.
  </h4>
</div>;

<div className="card-header">
  <h3 className="font-semibold text">
    In usu laoreet repudiare legendos
  </h3>
</div>;
