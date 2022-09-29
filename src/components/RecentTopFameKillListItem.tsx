import React from 'react'

interface RecentTopFameKillListItemProps {
  eventID: number;
  timestamp: string;
  killerId: string;
  killerName: string;
  killerMainHand: string;
  killerMainHandQuality: number;
  victimId: string;
  victimName: string;
  victimMainHand: string;
  victimMainHandQuality: number;
  killFame: number;
}

const RecentTopFameKillListItem = ({ eventID, timestamp, killerId, killerName, killerMainHand, victimId, victimName, victimMainHand, killFame, killerMainHandQuality, victimMainHandQuality }: RecentTopFameKillListItemProps) => {
  return (
    <a href={`/events/${eventID}`} className='block grid grid-cols-[1fr_60px_1fr_0.7fr] cursor-pointer py-2 mx-1 px-2 rounded-lg border border-transparent transition hover:border-[#fd6de0b9] hover:scale-105 '>
      <div className='truncate flex items-center'>
        <div className='min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] select-none'>
          <img src={`https://render.albiononline.com/v1/item/${killerMainHand}.png?quality=${killerMainHandQuality}`} alt="" />
        </div>
        <a href={`/players/${killerId}/${killerName}`} className='ml-2 block text-lg font-mono transition hover:text-[#ba59ff]'>
          {killerName}
        </a>
      </div>
      <div className='mx-3 flex items-center justify-center place-items-center select-none'>
        <img src="/knife.png" alt="" className='w-[30px]' />
      </div>
      <div className='truncate flex items-center'>
        <div className='min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px] select-none'>
          <img src={`https://render.albiononline.com/v1/item/${victimMainHand}.png?quality=${victimMainHandQuality}`} alt="" />
        </div>
        <a href={`/players/${victimId}/${victimName}`} className='ml-2 block text-lg font-mono transition hover:text-[#ba59ff]'>
          {victimName}
        </a>
      </div>
      <div className='truncate flex items-center justify-end'>
        <div className='text-xl w-[90%] truncate flex justify-end'>
          <p>
            {killFame.toLocaleString()}
          </p>
        </div>
        <div className='ml-1 pt-2 w-[25px] select-none'>
          <img src="/fame.png" alt="Fame" />
        </div>
      </div>
    </a>
  )
}

export default RecentTopFameKillListItem