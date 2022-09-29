import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { swaggerMurderLedger, tool4albionAxios } from '../axios';
import PlayerUsageBuildsListItem from '../components/PlayerUsageBuildsListItem';
import numberFormat from '../utils/numberFormat';
import PlayerUsageWeaponListItem from '../components/PlayerUsageWeaponListItem';
import PlayerRecentBattles from '../components/PlayerRecentBattles';
import Loading from '../components/Loading';



const Player = () => {
  const { id, playerName } = useParams();
  const exploreMoreBuildRef = useRef<HTMLDivElement>(null)
  const exploreMoreWeoponRef = useRef<HTMLDivElement>(null)
  const [playerBasicInfo, setPlayerBasicInfo] = useState()
  const [playerBuilds, setPlayerBuilds] = useState([]);
  const [playerWeopons, setPlayerWeopons] = useState([]);
  const [playerMostUsageBuilds, setPlayerMostUsageBuilds] = useState([]);
  const [playerMostUsageWeopons, setPlayerMostUsageWeopons] = useState([])
  const [playerEvents, setPlayerEvents] = useState<any>([])
  const [playerAllBuilds, setPlayerAllBuilds] = useState([])
  const [playerAllWeopons, setPlayerAllWeopons] = useState([])
  const [isExploreMoreBuilds, setIsExploreMoreBuilds] = useState(false)
  const [isExploreMoreWeopons, setIsExploreMoreWeopons] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isFetchingAll, setIsFetchingAll] = useState(false)

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideExploreMoreBuild, false);
    document.addEventListener("click", handleClickOutsideExploreMoreWeopon, false);

    tool4AbionFetchPlayerInformation();
    murderLedgerFetchPlayerBuilds();
    murderLedgerFetchPlayerWeopon();
    tool4AbionFetchPlayerLedger();

    return () => {
      document.removeEventListener("click", handleClickOutsideExploreMoreBuild, false);
      document.removeEventListener("click", handleClickOutsideExploreMoreWeopon, false);
    }
  }, [])

  const handleClickOutsideExploreMoreBuild = (e: MouseEvent) => {
    if (exploreMoreBuildRef.current && !exploreMoreBuildRef.current.contains(e.target as Element)) {
      setIsExploreMoreBuilds(false);
    }
  };

  const handleClickOutsideExploreMoreWeopon = (e: MouseEvent) => {
    if (exploreMoreWeoponRef.current && !exploreMoreWeoponRef.current.contains(e.target as Element)) {
      setIsExploreMoreWeopons(false);
    }
  };

  const tool4AbionFetchPlayerInformation = async () => {
    const { data } = await tool4albionAxios.get(`${encodeURIComponent(`players/${id}`)}`)
    const res = JSON.parse(data.contents);
    // console.log(res)
    setPlayerBasicInfo(res)
  }

  const tool4AbionFetchPlayerLedger = async () => {
    const { data: deathData } = await tool4albionAxios.get(`${encodeURIComponent(`players/${id}/deaths`)}`)
    const resDeaths = JSON.parse(deathData.contents);

    const { data: killData } = await tool4albionAxios.get(`${encodeURIComponent(`players/${id}/kills`)}`)
    const resKills = JSON.parse(killData.contents);
    let playerLedger = [...resDeaths, ...resKills];
    playerLedger.sort((a, b) => {
      const dateA = new Date(a['TimeStamp']).getTime();
      const dateB = new Date(b['TimeStamp']).getTime();
      return dateB - dateA;
    })
    // console.log(playerLedger);
    setPlayerEvents(playerLedger);
    setIsLoading(false)
  }

  const murderLedgerFetchPlayerBuilds = async () => {
    const { data } = await swaggerMurderLedger.get(`players/${playerName}/stats/builds?lookback_days=90`);
    const res = JSON.parse(data.contents)
    setPlayerBuilds(res.builds);
    setPlayerMostUsageBuilds(res.builds.slice(0, 3));
    // console.log(res.builds.slice(0, 3))
  }

  const murderLedgerFetchAllPlayerBuilds = async () => {
    setIsFetchingAll(true)
    const { data } = await swaggerMurderLedger.get(`players/${playerName}/stats/builds?lookback_days=9999`);
    const res = JSON.parse(data.contents)
    setPlayerAllBuilds(res.builds)
    setIsFetchingAll(false)
  }

  const murderLedgerFetchPlayerWeopon = async () => {
    const { data } = await swaggerMurderLedger.get(`players/${playerName}/stats/weapons?lookback_days=90`);
    const res = JSON.parse(data.contents)
    setPlayerWeopons(res.weopons)
    setPlayerMostUsageWeopons(res.weapons.slice(0, 3))
    // console.log(res.weapons.slice(0, 3));
  }

  const murderLedgerFetchPlayerAllWeopons = async () => {
    setIsFetchingAll(true)
    const { data } = await swaggerMurderLedger.get(`players/${playerName}/stats/weapons?lookback_days=9999`);
    const res = JSON.parse(data.contents)
    setPlayerAllWeopons(res.weapons)
    setIsFetchingAll(false)
  }

  return (
    <div>
      {
        isLoading ? <div className='flex justify-center'><Loading /></div> : <div>
          <div ref={exploreMoreBuildRef} className={`fixed translate-x-[-50%] left-[50%] w-[90%] md:w-[60%] h-[50%]  transition z-[10] overflow-y-scroll rounded px-3 py-2 exploreMoreBuildFocus bg-[#27292a] border border-[#f93cd367]   ${isExploreMoreBuilds ? "scale-100 " : "scale-0"}`}>
            {isFetchingAll ? <div className='w-full h-full flex justify-center items-center'><Loading /></div> : playerAllBuilds.length != 0 ? <table>
              <thead>
                <tr>
                  <th>Build</th>
                  <th className='cursor-pointer' >Usages
                  </th>
                  <th className='cursor-pointer'>
                    Win Rate
                  </th>
                  <th className='cursor-pointer hidden md:table-cell'>Kills
                  </th>
                  <th className='cursor-pointer hidden md:table-cell'>Deaths
                  </th>
                  <th className='cursor-pointer hidden md:table-cell'>Assists
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  playerAllBuilds.map((item, index) => {
                    return (<PlayerUsageBuildsListItem key={item['kill_fame']} build={item['build']} deaths={item['deaths']} kills={item['kills']} usages={item['usages']} win_rate={item['win_rate']} assists={item['assists']} />)
                  })
                }
              </tbody>
            </table> : <div className='flex flex-col items-center justify-center w-full h-full'><img src="/src/assets/data-not-found.png" alt="" />No data... </div>}
          </div>
          <div ref={exploreMoreWeoponRef} className={`fixed translate-x-[-50%] left-[50%] w-[90%] md:w-[60%] h-[50%]  transition z-[10] overflow-y-scroll rounded px-3 py-2 exploreMoreBuildFocus bg-[#27292a] border border-[#f93cd367]   ${isExploreMoreWeopons ? "scale-100 " : "scale-0"}`}>
            {isFetchingAll ? <div className='w-full h-full flex justify-center items-center'><Loading /></div> : playerAllWeopons.length != 0 ? <table>
              <thead>
                <tr>
                  <th>Weopon</th>
                  <th className='cursor-pointer' >Usages
                  </th>
                  <th className='cursor-pointer'>
                    Win Rate
                  </th>
                  <th className='cursor-pointer'>Kills
                  </th>
                  <th className='cursor-pointer'>Deaths
                  </th>
                  <th className='cursor-pointer'>Assists
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  playerAllWeopons.map((item, index) => {
                    return (<PlayerUsageWeaponListItem key={item['kill_fame']} weopon={item['weapon']} deaths={item['deaths']} kills={item['kills']} usages={item['usages']} win_rate={item['win_rate']} assists={item['assists']} />)
                  })
                }
              </tbody>
            </table> : <div className='flex flex-col items-center justify-center w-full h-full'><img src="/src/assets/data-not-found.png" alt="" />No data... </div>}
          </div>
          <div className='flex items-center'>
            <h2 className='text-2xl story-gradient w-fit'>
              {playerBasicInfo && playerBasicInfo['Name']}
            </h2>
            <p className='ml-2 mt-1'>
              {playerBasicInfo && playerBasicInfo['GuildName'] && `(${playerBasicInfo['GuildName']})`}
            </p>
          </div>
          <div className='mt-4 flex flex-col md:flex-row'>
            <div className='w-fit border border-[#f93cd367] py-1 px-3 rounded-full shadow-md transition shadow-[#f93cd367]'>
              Killing Players Fame: <p className='inline font-mono'>
                {playerBasicInfo && numberFormat(playerBasicInfo['KillFame'])}
                <img src="/src/assets/fame.png" alt="" className='w-[15px] inline ml-2' />
              </p>
            </div>
            <div className='mt-3 md:mt-0 w-fit md:ml-4 border border-[#f93cd367] py-1 px-3 rounded-full shadow-md transition shadow-[#f93cd367]'>
              Killing Mobs Fame: <p className='inline font-mono'>
                {playerBasicInfo && numberFormat(playerBasicInfo['LifetimeStatistics']['PvE']['Total'])}
                <img src="/src/assets/fame.png" alt="" className='w-[15px] inline ml-2' />
              </p>
            </div>
            <div className='my-3 md:my-0 w-fit md:mx-4 border border-[#f93cd367] py-1 px-3 rounded-full shadow-md transition shadow-[#f93cd367]'>
              Gathering Fame: <p className='inline font-mono'>
                {playerBasicInfo && numberFormat(playerBasicInfo['LifetimeStatistics']['Gathering']['All']['Total'])}
                <img src="/src/assets/fame.png" alt="" className='w-[15px] inline ml-2' />
              </p>
            </div>
            <div className='w-fit border border-[#f93cd367] py-1 px-3 rounded-full shadow-md transition shadow-[#f93cd367]'>
              Crafting Fame: <p className='inline font-mono'>
                {playerBasicInfo && numberFormat(playerBasicInfo['LifetimeStatistics']['Crafting']['Total'])}
                <img src="/src/assets/fame.png" alt="" className='w-[15px] inline ml-2' />
              </p>
            </div>
          </div>
          <div className='mt-5 flex flex-col md:flex-row justify-around'>
            <div className='p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-[55%]'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-lg story-gradient w-fit '>
                    Recently Most Usage Builds for  {playerName}
                  </h2>
                  <div className='text-xs cursor-pointer transition hover:text-[#ff98eab9] hover:scale-105' ref={exploreMoreBuildRef} onClick={() => {
                    setIsExploreMoreBuilds(true)
                    murderLedgerFetchAllPlayerBuilds()
                  }}>
                    Explore more -&gt;
                  </div>
                </div>
                {playerMostUsageBuilds.length != 0 ? <div className='mt-2'>
                  <table>
                    <thead>
                      <tr>
                        <th>Build</th>
                        <th className='cursor-pointer' >Usages
                        </th>
                        <th className='cursor-pointer'>
                          Win Rate
                        </th>
                        <th className='cursor-pointer hidden md:table-cell'>Kills
                        </th>
                        <th className='cursor-pointer hidden md:table-cell'>Deaths
                        </th>
                        <th className='cursor-pointer hidden md:table-cell'>Assists
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        playerMostUsageBuilds.map((item, index) => {
                          return (<PlayerUsageBuildsListItem key={item['kill_fame']} build={item['build']} deaths={item['deaths']} kills={item['kills']} usages={item['usages']} win_rate={item['win_rate']} assists={item['assists']} />)
                        })
                      }
                    </tbody>
                  </table>
                </div> : <div className='mt-2'>This player appears to have a long history of not playing Albion online. </div>}
              </div>
            </div>
            <div className='mt-5 md:mt-0 p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-[40%]'>
              <div className='flex justify-between items-center'>
                <h2 className='truncate text-lg story-gradient w-fit '>
                  Recently Most Usage Weopons for  {playerName}
                </h2>
                <div className='text-xs cursor-pointer transition hover:text-[#ff98eab9] hover:scale-105' ref={exploreMoreWeoponRef} onClick={() => {
                  setIsExploreMoreWeopons(true)
                  murderLedgerFetchPlayerAllWeopons()
                }}>
                  Explore more -&gt;
                </div>
              </div>
              <div className='mt-2'>
                <div className='mt-2'>
                  {playerMostUsageWeopons.length != 0 ? <table>
                    <thead>
                      <tr>
                        <th>Weopon</th>
                        <th className='cursor-pointer' >Usages
                        </th>
                        <th className='cursor-pointer'>
                          Win Rate
                        </th>
                        <th className='cursor-pointer'>Kills
                        </th>
                        <th className='cursor-pointer'>Deaths
                        </th>
                        <th className='cursor-pointer'>Assists
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        playerMostUsageWeopons.map((item, index) => {
                          return (<PlayerUsageWeaponListItem key={item['kill_fame']} weopon={item['weapon']} deaths={item['deaths']} kills={item['kills']} usages={item['usages']} win_rate={item['win_rate']} assists={item['assists']} />)
                        })
                      }
                    </tbody>
                  </table> : <div>This player appears to have a long history of not playing Albion online.</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-5 p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full'>
            <h2 className='text-lg story-gradient w-fit '>
              Recent battles for  {playerName}
            </h2>
            {playerEvents.length != 0 ? <div className='mt-2'>
              {
                playerEvents.map((item: any, index: number) => {
                  // console.log(item)
                  return <PlayerRecentBattles TimeStamp={item['TimeStamp']} key={item['BattleId']} BattleId={item['BattleId']} KillerName={item['Killer']['Name']} KillerAverageItemPower={item['Killer']['AverageItemPower']} KillerEquipment={item['Killer']['Equipment']} KillerId={item['Killer']['Id']} VictimAverageItemPower={item['Victim']['AverageItemPower']} VictimEquipment={item['Victim']['Equipment']} VictimId={item['Victim']['Id']} VictimName={item['Victim']['Name']} numberOfParticipants={item['numberOfParticipants']} TotalVictimKillFame={item['TotalVictimKillFame']} isPlayerBeKilled={playerName == item['Victim']['Name']} />
                })
              }
            </div> : <div className='mt-2'>This player appears to have a long history of not playing Albion online.</div>}
          </div>
        </div>
      }
    </div>
  )
}

export default Player