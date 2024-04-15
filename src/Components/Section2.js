import React from 'react';

const Section2 = () => {
    return (
        <div>
            <div className='flex gap-7'>

                <div className='left '>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
                    <div className='bg-white h-12  relative'>

                        <div className='image'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='h-8' />
                        </div>
                        <div className='content flex'>
                            <div className=''>
                                Stranger Things

                            </div>
                            <div>
                                Downlaoding...
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>

                <div className='right flex justify-center items-center basis-[50%]'>
                    <div className='grid justify-center items-center'>
                        <h2 className='text-4xl font-semibold'>
                            Download your shows to watch offline
                        </h2>
                        <p className='text-xl'>
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section2;
