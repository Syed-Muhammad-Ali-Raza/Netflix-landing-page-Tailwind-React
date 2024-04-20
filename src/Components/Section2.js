import React from 'react';

const Section2 = () => {
    return (
        <div>
            <div className='flex gap-7 h-[100vh]'>

                <div className='left '>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />

                    <div className='bg-black h-12 relative w-[53%] ml-[140px] border-gray-600 rounded-lg border-2 mx-6 px-8	mt-[-91px] flex items-center justify-between px-3'>
                        <div className='image class1'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='h-8' />
                        </div>
                        <div className='content class2  items-center text-white'>
                            <div className=''>
                                Stranger Things
                            </div>
                            <div className='text-blue-700'>
                                Downloading...
                            </div>
                        </div>
                        <div className='class3'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" className='h-9' />
                        </div>
                    </div>

                </div>

                <div className='right flex justify-center items-center basis-[50%]'>
                    <div className='grid justify-center items-center'>
                        <h2 className='text-4xl font-semibold w-[80%]'>
                            Download your shows to watch offline
                        </h2>
                        <p className='text-xl w-[70%] my-4'>
                            Save your favorites easily and always have something to watch.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Section2;
