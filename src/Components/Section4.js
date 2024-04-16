import React from 'react'
import kid from './kid.png'
const Section4 = () => {
  return (
  <>
  <div className='container flex gap-5 px-40 py-24 h-[80vh]'>
    <div className='image'>
        <img src={kid}/>
    </div>
    <div className='content flex  flex-col  justify-center items-start'>
        <h2 className='text-4xl font-bold px-5 py-7'>
        Create profiles for kids
        </h2>
        <p className='text-2xl px-5 justify-center items-start '>
        Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
        </p>
        </div>
  </div>
  
  </>
  )
}

export default Section4
