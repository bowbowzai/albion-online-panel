interface PlayerUsageBuildsListItemProps {
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
  usages: number;
  win_rate: number;
  assists: number;
}

const PlayerUsageBuildsListItem = ({ build, deaths, kills, usages, win_rate, assists }: PlayerUsageBuildsListItemProps) => {
  return (
    <tr>
      <td>
        <div className='flex items-center'>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.main_hand.type}.png`} alt="" />
          </div>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.off_hand.type}.png`} alt="" />
          </div>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.head.type}.png`} alt="" />
          </div>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.body.type}.png`} alt="" />
          </div>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.shoe.type}.png`} alt="" />
          </div>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${build.cape.type}.png`} alt="" />
          </div>
        </div>
      </td>
      <td className='w-[25%] text-xl text-center'>
        <div>
          <div>
            {usages.toLocaleString()}
          </div>
        </div>
      </td>
      <td className='w-[25%] text-xl text-center'>

        <div className='flex items-center justify-center'>
          <div className='mr-2'>
            {Number(win_rate * 100).toFixed(2)}%
          </div>
        </div>

      </td>
      <td className='w-[25%] text-xl text-center hidden md:table-cell'>
        {kills.toLocaleString()}
      </td>
      <td className='w-[25%] text-xl text-center hidden md:table-cell'>
        {deaths.toLocaleString()}
      </td>
      <td className='text-xl text-center hidden md:table-cell'>
        {assists.toLocaleString()}
      </td>
    </tr>
  )
}

export default PlayerUsageBuildsListItem