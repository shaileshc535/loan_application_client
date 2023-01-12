import React from 'react';
import Image from 'next/image';
import Heading from '../../shared/ui/Heading/Heading';
import VideoThumbnailImage from '../../../public/video_thumbnail.png';
import Arrow5 from '../../../public/arrow5.png';

const VideoThumbnail: React.FC = () => {
  return (
    <div className="hero container bg-transparent w-full">
      <div className="w-[100%] flex flex-wrap items-center justify-center mx-auto max-h-[472px]">
        <div className="flex justify-start items-center content w-[60%] h-[458px] bg-[#0051EE]">
          <div className="pl-[10%] w-[50%]">
            <Heading
              title="Even Rajkummar Rao says Business Loans Bole Toh Sirf DAMS!"
              type="newxl"
              color="primary"
              classes="text-white font-bold"
            />
            <div className="pt-10">
              <button
                type="button"
                className="font-medium inline text-white transform transition duration-300 hover:scale-110"
              >
                <Image
                  src={Arrow5}
                  className="card-image w-[30px] pr-2.5 inline cursor-pointer"
                  alt="Image"
                />
                Play Video
              </button>
            </div>
          </div>
        </div>
        <div className="content w-[40%] h-auto">
          <Image src={VideoThumbnailImage} className="card-image w-[100%]" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
