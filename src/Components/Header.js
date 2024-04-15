import React from 'react'

const Header = () => {
    return (
        <>

            <div className='flex justify-between items-center '>
                <div className='image px-12'> 
                    <img src="./netflixlogi.png  " width="200px" />

                </div>
                <div className='button px-11'>
                    <button className='btn p-2 rounded-md bg-red-600 text-white'>Sign in</button>
                </div>
            </div>
        </>
    )
}

export default Header
