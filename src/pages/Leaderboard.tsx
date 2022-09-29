import { useEffect, useState } from 'react'
import { swaggerMurderLedger } from '../axios'
import LeaderboardListItem from '../components/LeaderboardListItem'
import Loading from '../components/Loading'
const Leaderboard = () => {
  const [stalkerLeaderboard, setStalkerLeaderboard] = useState([])
  const [slayerLeaderboard, setSlayerLeaderboard] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    handleLeaderBoardDataStalker();
    handleLeaderBoardDataSlayer();
  }, [])
  const handleLeaderBoardDataStalker = async () => {
    const { data } = await swaggerMurderLedger.get(`${encodeURIComponent("leaderboards/1v1?skip=0&take=20&type=stalker")}`)
    const res = JSON.parse(data.contents)
    // console.log(res.data);
    setStalkerLeaderboard(res.data)
  }
  const handleLeaderBoardDataSlayer = async () => {
    const { data } = await swaggerMurderLedger.get(`${encodeURIComponent("leaderboards/1v1?skip=0&take=20&type=slayer")}`)
    const res = JSON.parse(data.contents)
    // console.log(res.data);
    setSlayerLeaderboard(res.data)
    setIsLoading(false)
  }
  return (
    <div>
      {isLoading ? <div className='flex justify-center'><Loading /></div> : <div className='relative'>
        <h2 className='text-2xl story-gradient w-fit'>
          Leaderboard
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-around'>
          <div className='p-4 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-[45%]'>
            <div className="small-nav flex justify-center text-2xl mb-4">Stalker Build</div>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Favourite Weopon</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  stalkerLeaderboard.map((item, index) => <LeaderboardListItem key={item['rank']} favorite_weapon_item={item['favorite_weapon_item'] != "" ? item['favorite_weapon_item'] : ""} name={item['name']} rank={item['rank']} rating={item['rating']} twitchName={item['twitch_username']} />)
                }
              </tbody>
            </table>
          </div>
          <div className='p-4 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-[45%]'>
            <div className="small-nav flex justify-center text-2xl mb-4">Slayer Build</div>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Favourite Weopon</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  slayerLeaderboard.map((item, index) => <LeaderboardListItem key={item['rank']} favorite_weapon_item={item['favorite_weapon_item'] != "" ? item['favorite_weapon_item'] : ""} name={item['name']} rank={item['rank']} rating={item['rating']} twitchName={item['twitch_username']} />)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Leaderboard