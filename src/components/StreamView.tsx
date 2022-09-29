import React from 'react'
import { AiFillEye } from "react-icons/ai"
import { MdLanguage } from "react-icons/md"


interface StreamViewProps {
  thumbnail_url: string;
  title: string;
  user_name: string;
  user_login: string;
  viewer_count: number;
  type: string;
  language: string;
}

const StreamView = ({ language, thumbnail_url, title, type, user_login, user_name, viewer_count }: StreamViewProps) => {
  return (
    <a href={`https://www.twitch.tv/${user_login}`} target="_blank" rel='noreferrer noopenner' className='block cursor-pointer border border-[#f93cd367] transition hover:scale-105'>
      <div className='relative '>
        {type == "live" && <div className='absolute left-3 top-0 w-[70px]'>
          <img src="/live.png" alt="" />
        </div>}
        <img src={thumbnail_url.replace("{width}x{height}", "500x300")} alt="" className='w-full md:w-auto select-none' />
        <div className='py-[3px] px-2 bg-[#191919b7] absolute flex items-center justify-center bottom-5 left-3'>
          <AiFillEye className='text-white mr-2 text-lg' />
          <div className='font-mono'>{viewer_count}</div>
        </div>
        <div className='py-[3px] px-2 bg-[#191919b7] absolute flex items-center justify-center bottom-5 right-3'>
          <MdLanguage className='text-white mr-2 text-lg' />
          <div className='font-serif'>{language}</div>
        </div>
      </div>
      <div className='truncate mt-1 px-2'>
        {title}
      </div>
      <div className='truncate mt-1 mb-1 px-2'>
        {user_name}
      </div>
    </a>
  )
}

export default StreamView