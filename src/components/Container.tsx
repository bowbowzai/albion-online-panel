import React, { ReactNode } from 'react'
import Loading from './Loading';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='w-full h-auto bg-[#27292a88] text-white font-playfair container-box-shadow rounded-lg p-6 '>
      {children}
    </div>
  )
}

export default Container