import React from 'react';

const Section1 = () => {
  return (
    <>
      <div className='flex justify-center items-center py-10  gap-10 border-b-slate-500'>
        <div className='grid text-center'>
          <h2 className='text-4xl'>Enjoy on your TV</h2>
          <h6 className='py-8'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h6>
        </div>
        <div className='text-center'>
          <video autoPlay src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" controls />
        </div>
      </div>
    </>
  );
};

export default Section1;
