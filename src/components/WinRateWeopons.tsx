import React from 'react'

interface WinRateBuildProps {
  build: {
    body: {
      en_name: string;
      type: string;
    }
    cape: {
      en_name: string;
      type: string;
    }
    head: {
      en_name: string;
      type: string;
    }
    main_hand: {
      en_name: string;
      type: string;
    }
    off_hand: {
      en_name: string;
      type: string;
    }
    shoe: {
      en_name: string;
      type: string;
    }
  }
  deaths: number;
  kills: number;
  win_rate: number;
  index: number;
}

const WinRateBuild = ({ build, win_rate, kills, deaths, index }: WinRateBuildProps) => {
  return (
    <div className={'border-[#fd6de0b9] flex items-center ' + (index == 4 ? "border-b-[0px]" : "border-b-[1px] ")}>
      <div className='flex py-2 mx-1 px-2'>
        <div className='flex items-center mr-2 text-xl'>
          #{index + 1}
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          <img src={`https://render.albiononline.com/v1/item/T8_${build.main_hand?.type}.png`} alt="" />
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          {
            build.off_hand.en_name ? (<img src={`https://render.albiononline.com/v1/item/T8_${build.off_hand?.type}.png`} alt="" />) : (
              <div className='w-full h-full'></div>
            )
          }
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          <img src={`https://render.albiononline.com/v1/item/T8_${build.head?.type}.png`} alt="" />
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          <img src={`https://render.albiononline.com/v1/item/T8_${build.body?.type}.png`} alt="" />
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          <img src={`https://render.albiononline.com/v1/item/T8_${build.shoe?.type}.png`} alt="" />
        </div>
        <div className='select-none min-w-[50px] min-h-[50px] max-w-[50px] max-h-[50px]'>
          {
            build.cape.en_name ? (<img src={`https://render.albiononline.com/v1/item/T8_${build.cape?.type}.png`} alt="" />) : (
              <div className='w-full h-full'></div>
            )
          }
        </div>
      </div>
      <div className=''>
        <div>
          <p>Win Rate: {(win_rate * 100).toFixed(2)}%</p>
        </div>
        <div className='flex'>
          <p>
            Kills: {kills}
          </p>
          <p className='ml-2'>
            Deaths: {deaths}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WinRateBuild