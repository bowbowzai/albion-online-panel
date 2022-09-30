import React from 'react'
import { AiFillGithub } from "react-icons/ai"
const Footer = () => {
  return (
    <div className='w-[650px]  md:w-full mt-auto flex justify-center flex-col mb-5 text-white font-playfair shrink-0'>
      <div className='flex items-center justify-center'>
        Developed by <a href="https://github.com/bowbowzai" target="_blank" rel='noopenner noreferrer' className='hover:text-[#ff98eab9] transition'>@bowbowzai</a>
      </div>
      <div className='flex items-center justify-center'>
        <p>Data sources from API provided by : </p>
        <a target="_blank" rel='noopenner noreferrer' className='block hover:text-[#ff98eab9] transition' href="https://www.tools4albion.com/api_info.php">@tools4albion</a>,
        <a target="_blank" rel='noopenner noreferrer' className='block hover:text-[#ff98eab9] transition' href="https://editor.swagger.io/?url=https://murderledger.com/api/openapi.json">@murder ledger</a>,
        <a target="_blank" rel='noopenner noreferrer' className='block hover:text-[#ff98eab9] transition' href="https://www.albion-online-data.com/">@albion-online-data</a>
      </div>
      <a target="_blank" rel='noopenner noreferrer' className='mx-auto w-fit block cursor-pointer flex items-center justify-center transition hover:text-[#ff98eab9]'>
        <a href="https://github.com/bowbowzai/albionOL-panel" target={'_blank'} rel="noopenner noreferrer">Source Code </a>
        <AiFillGithub className='text-2xl ml-2' />
      </a>
    </div>
  )
}

export default Footer