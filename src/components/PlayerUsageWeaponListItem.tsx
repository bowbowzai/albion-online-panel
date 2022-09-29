interface PlayerUsageWeaponListItemProps {
  weopon: string;
  deaths: number;
  kills: number;
  usages: number;
  win_rate: number;
  assists: number;
}


const PlayerUsageWeaponListItem = ({ weopon, deaths, kills, usages, win_rate, assists }: PlayerUsageWeaponListItemProps) => {
  return (
    <tr>
      <td>
        <div className='flex items-center'>
          <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
            <img src={`https://render.albiononline.com/v1/item/T8_${weopon}.png`} alt="" />
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
      <td className='w-[25%] text-xl text-center'>
        {kills.toLocaleString()}
      </td>
      <td className='w-[25%] text-xl text-center'>
        {deaths.toLocaleString()}
      </td>
      <td className='text-xl text-center'>
        {assists.toLocaleString()}
      </td>
    </tr >
  )
}

export default PlayerUsageWeaponListItem