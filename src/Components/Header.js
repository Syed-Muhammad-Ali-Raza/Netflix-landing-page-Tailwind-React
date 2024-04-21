import React from 'react'
import netflixlogo from './netflixlogi.png'
const Header = () => {
    return (
        <>

            <div className='flex justify-between items-center '>
                <div className='image px-12'> 
                    <img src="./netflixlogi.png  " width="200px" />
                    {/* <div className='bg-[rgba(0,0,0,0.5)] over w-[100%] h-[100vh]'>

                </div> */}

                </div>
              
                <div className='button px-11'>
                    <button className='btn p-2 rounded-md bg-red-600 text-white'>Sign in</button>
                </div>
            </div>
        </>
    )
}

export default Header
