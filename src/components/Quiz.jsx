import React from 'react'

function Quiz() {
  return (
    <div className='bg-white w-full h-screen mt-80 flex justify-center relative '>
        <div className=' w-11/12 absolute bottom-1/4 h-full  bg-white  flex flex-col items-center'>
            <h1 className='text-Pblue text-9xl font-medium pt-14 mb-24'>
                QUIZ WEB
            </h1>
            <h3 className='text-Pblack text-5xl'>
             Choisissez la difficulté de le Quiz
            </h3>
            <div className='card-container grid grid-cols-2 w-2/3 bg-black '>
                <div className='card bg-EasyBg'>
                          Easy
                </div>
                <div className='card bg-MedBg'>
                          medium
                </div>
                <div className='card bg-HardBg'>
                          hard
                </div>
                <div className='card bg-EasyBg'>
                          very hard
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quiz