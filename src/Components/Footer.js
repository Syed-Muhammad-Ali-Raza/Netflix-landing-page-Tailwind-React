import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <>
           <p className='underline text-[rgba(255,255,255,0.7)] mx-20 my-10 leading-'>
                    Questions? Contact us.
                </p>

            <div className='grid grid-flow-col ml-20'>

             
                <div className='one'>
                    <p className='underline text-gray-500 mb-4'>
                        FAQ
                    </p>
                    <p className='underline text-gray-500 mb-4 mb-4'>
                        Invester Relations
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Privacy
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Speed Test
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                       
                        <select className='btn bg-zinc-800  p-2 rounded-lg text-white'>
                            <option selected="">
                                English
                            </option>
                        </select>
                    </p>
                    <p className=' text-white'>
                       Netflix Pakistan
                    </p>

                </div>

                <div className='two'>
                    <p className='underline text-gray-500 mb-4'>
                        Help Center
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Jobs
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Cookie Preference
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Legal Notice
                    </p>
                </div>

                <div className='three'>
                    <p className='underline text-gray-500 mb-4'>
                        Account
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Ways to Watch
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Corporate Information
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Only on Netflix
                    </p>
                </div>

                <div className='four'>

                    <p className='underline text-gray-500 mb-4'>
                        Media Center
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Term to Use
                    </p>
                    <p className='underline text-gray-500 mb-4'>
                        Contact Us
                    </p>

                </div>







            </div>

        </>




    )
}

export default Footer
