import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center text-white'>
                <h2 className='text-5xl font-bold'>Unlimited movies, TV shows, and more</h2>
            </div>
            <div className='text-center text-white text-2xl pt-5'>
                <p>Watch anywhere. Cancel anytime.</p>
            </div>
            <div className='text-center text-white text-2xl py-5'>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className='text-center flex gap-5'>
                <input type='text' className='btn p-2 rounded-md'/>
                <button className='btn bg-red-500 text-white px-4 py-2'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
