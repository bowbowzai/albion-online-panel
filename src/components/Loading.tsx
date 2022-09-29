import React from 'react'

const Loading = () => {
  return (
    <div className='w-fit relative '>
      <div className='overflow-hidden rounded-full h-[200px] w-[200px] p-[2px] relative bg-[#191b1bc0] container-box-shadow'>
        <div className='flex flex-col items-center justify-center rounded-full w-full h-full '>
          <img src="/loading.png" alt="" className='loading-animate w-[50%]' />
          <div className='mt-1 text-2xl flex bounce'>
            <div className='animate-bounce'>L</div>
            <div className='animate-bounce'>O</div>
            <div className='animate-bounce'>A</div>
            <div className='animate-bounce'>D</div>
            <div className='animate-bounce'>I</div>
            <div className='animate-bounce'>N</div>
            <div className='animate-bounce'>G</div>
            <div className='animate-bounce'>.</div>
            <div className='animate-bounce'>.</div>
            <div className='animate-bounce'>.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading