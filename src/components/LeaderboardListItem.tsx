import React from 'react'
import { BsTwitch } from 'react-icons/bs'

interface LeaderboardListItemProps {
  favorite_weapon_item: string;
  name: string;
  rank: number;
  rating: number;
  twitchName?: string;
}

const LeaderboardListItem = ({ favorite_weapon_item, name, rank, rating, twitchName }: LeaderboardListItemProps) => {
  return (
    <tr>
      <td className='w-[25%] text-center text-2xl'># {rank}</td>
      <td className='w-[25%] text-center'>
        <div className='flex items-center justify-center'>
          {name}
          {twitchName && <a target="_blank" rel='noopenner noreferrer' className='ml-2' href={`https://www.twitch.tv/${twitchName}`}><BsTwitch className='hover:text-blue-300 cursor-pointer text-xl' /></a>}
        </div>
        <div>

        </div>
      </td>
      <td className='w-[25%] '>
        <div className='flex justify-center items-center select-none'>
          <img src={`https://render.albiononline.com/v1/item/T8_${favorite_weapon_item}.png`} alt="" className='w-[60px]' />
        </div>
      </td>
      <td className='w-[25%] text-center'>
        {rating}
      </td>
    </tr>
  )
}

export default LeaderboardListItem