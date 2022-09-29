import React, { useEffect, useState } from 'react'
import { swaggerMurderLedger } from '../axios'
import BuildStatsListItem from '../components/BuildStatsListItem';
import { NavLink, Routes, Route } from "react-router-dom"
import { BiUpArrow, BiDownArrow } from "react-icons/bi"
import Loading from '../components/Loading';

interface UsageBuilds {
  assists: number;
  averageItemPower: number;
  mainHandId: string;
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
  death_fame: number;
  deaths: number;
  fame_ratio: number;
  kill_fame: number;
  kills: number;
  usages: number;
  win_rate: number;
}

const BuildStats = () => {
  const [stalkerData, setStalkerData] = useState<UsageBuilds[]>([])
  const [slayerData, setSlayerData] = useState<UsageBuilds[]>([])
  const [stalkerUsageDescend, setStalkerUsageDescend] = useState(true)
  const [stalkerWinRateDescend, setStalkerWinRateDescend] = useState(true)
  const [stalkerKillDescend, setStalkerKillDescend] = useState(true)
  const [stalkerDeathDescend, setStalkerDeathDescend] = useState(true)
  const [slayerUsageDescend, setSlayerUsageDescend] = useState(true)
  const [slayerWinRateDescend, setSlayerWinRateDescend] = useState(true)
  const [slayerKillsDescend, setSlayerKillsDescend] = useState(true)
  const [slayerDeathDescend, setSlayerDeathDescend] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    stalker7dayData();
    slayer7dayData();

  }, [])
  const stalker7dayData = async () => {
    const { data } = await swaggerMurderLedger.get(`${encodeURIComponent(`builds/1v1_stalker_7_day`)}`)
    const buildsData = JSON.parse(data.contents);
    buildsData.builds.sort((a: UsageBuilds, b: UsageBuilds) => {
      return b['usages'] - a['usages'];
    })
    let most50UsageBuilds = [];
    for (let i = 0; i < 50; i++) {
      most50UsageBuilds.push(buildsData.builds[i]);
    }
    setStalkerData(most50UsageBuilds);
  }
  const slayer7dayData = async () => {
    const { data } = await swaggerMurderLedger.get(`${encodeURIComponent(`builds/1v1_high_ip_7_day`)}`)
    const buildsData = JSON.parse(data.contents);
    buildsData.builds.sort((a: UsageBuilds, b: UsageBuilds) => {
      return b['usages'] - a['usages'];
    })
    let most50UsageBuilds = [];
    for (let i = 0; i < 50; i++) {
      most50UsageBuilds.push(buildsData.builds[i]);
    }
    setSlayerData(most50UsageBuilds);
    setIsLoading(false)
  }
  return (
    <div>
      {isLoading ? <div className='flex justify-center'><Loading /></div> : <div>
        <div className='relative'>
          <h2 className='text-2xl story-gradient w-fit'>
            BuildStats
          </h2>
          <div className='absolute left-[50%] translate-x-[-50%] top-0 grid grid-cols-2 gap-x-5'>
            <NavLink to="/buildstats/stalker" className={({ isActive }) => (isActive ? "small-nav" : "text-white")}>Stalker Build</NavLink>
            <NavLink to="/buildstats/slayer" className={({ isActive }) => (isActive ? "small-nav" : "text-white")}>Slayer Build</NavLink>
          </div>
        </div>
        <div className='p-4 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367]'>
          <Routes>
            <Route path='/stalker' element={
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Build</th>
                      <th className='cursor-pointer' onClick={() => {
                        if (stalkerUsageDescend) {
                          const sortedUsagesArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['usages'] - a['usages'];
                          })
                          setStalkerData([...sortedUsagesArr])
                          setStalkerUsageDescend(false)
                        } else {
                          const sortedUsagesArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['usages'] - b['usages'];
                          })
                          setStalkerData([...sortedUsagesArr])
                          setStalkerUsageDescend(true)
                        }
                      }}>Usages
                        {!stalkerUsageDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {stalkerUsageDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='cursor-pointer' onClick={() => {
                        if (stalkerWinRateDescend) {
                          const sortedWinRatesArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['win_rate'] - a['win_rate'];
                          })
                          setStalkerData([...sortedWinRatesArr])
                          setStalkerWinRateDescend(false)
                        } else {
                          const sortedWinRatesArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['win_rate'] - b['win_rate'];
                          })
                          setStalkerData([...sortedWinRatesArr])
                          setStalkerWinRateDescend(true)
                        }
                      }}>
                        Win Rate
                        {!stalkerWinRateDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {stalkerWinRateDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='hidden md:table-cell cursor-pointer' onClick={() => {
                        if (stalkerKillDescend) {
                          const sortedKillArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['kills'] - a['kills'];
                          })
                          setStalkerData([...sortedKillArr])
                          setStalkerKillDescend(false)
                        } else {
                          const sortedKillArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['kills'] - b['kills'];
                          })
                          setStalkerData([...sortedKillArr])
                          setStalkerKillDescend(true)
                        }
                      }}>Kills
                        {!stalkerKillDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {stalkerKillDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='hidden md:table-cell cursor-pointer' onClick={() => {
                        if (stalkerDeathDescend) {
                          const sortedDeathArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['deaths'] - a['deaths'];
                          })
                          setStalkerData([...sortedDeathArr])
                          setStalkerDeathDescend(false)
                        } else {
                          const sortedDeathArr = stalkerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['deaths'] - b['deaths'];
                          })
                          setStalkerData([...sortedDeathArr])
                          setStalkerDeathDescend(true)
                        }
                      }}>Deaths
                        {!stalkerDeathDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {stalkerDeathDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stalkerData.map((item) =>
                      <BuildStatsListItem key={item.kill_fame} build={item.build} deaths={item.deaths} kills={item.kills} usages={item.usages} win_rate={item.win_rate} />
                    )}
                  </tbody>
                </table>
              </div>
            } />
            <Route path='/slayer' element={
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Build</th>
                      <th className='cursor-pointer' onClick={() => {
                        if (slayerUsageDescend) {
                          const sortedUsagesArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['usages'] - a['usages'];
                          })
                          setSlayerData([...sortedUsagesArr])
                          setSlayerUsageDescend(false)
                        } else {
                          const sortedUsagesArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['usages'] - b['usages'];
                          })
                          setSlayerData([...sortedUsagesArr])
                          setSlayerUsageDescend(true)
                        }
                      }}>Usages
                        {!slayerUsageDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {slayerUsageDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='cursor-pointer' onClick={() => {
                        if (slayerWinRateDescend) {
                          const sortedWinRatesArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['win_rate'] - a['win_rate'];
                          })
                          setSlayerData([...sortedWinRatesArr])
                          setSlayerWinRateDescend(false)
                        } else {
                          const sortedWinRatesArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['win_rate'] - b['win_rate'];
                          })
                          setSlayerData([...sortedWinRatesArr])
                          setSlayerWinRateDescend(true)
                        }
                      }}>
                        Win Rate
                        {!slayerWinRateDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {slayerWinRateDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='cursor-pointer hidden md:table-cell' onClick={() => {
                        if (slayerKillsDescend) {
                          const sortedKillArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['kills'] - a['kills'];
                          })
                          setSlayerData([...sortedKillArr])
                          setSlayerKillsDescend(false)
                        } else {
                          const sortedKillArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['kills'] - b['kills'];
                          })
                          setSlayerData([...sortedKillArr])
                          setSlayerKillsDescend(true)
                        }
                      }}>Kills
                        {!slayerKillsDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {slayerKillsDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                      <th className='cursor-pointer hidden md:table-cell' onClick={() => {
                        if (slayerDeathDescend) {
                          const sortedDeathArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return b['deaths'] - a['deaths'];
                          })
                          setSlayerData([...sortedDeathArr])
                          setSlayerDeathDescend(false)
                        } else {
                          const sortedDeathArr = slayerData.sort((a: UsageBuilds, b: UsageBuilds) => {
                            return a['deaths'] - b['deaths'];
                          })
                          setSlayerData([...sortedDeathArr])
                          setSlayerDeathDescend(true)
                        }
                      }}>Deaths
                        {!slayerDeathDescend && <BiUpArrow className='ml-2 mt-[2px] small-nav inline' />}
                        {slayerDeathDescend && <BiDownArrow className='ml-2 mt-[2px] small-nav inline' />}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slayerData.map((item) => <BuildStatsListItem key={item.kill_fame} build={item.build} deaths={item.deaths} kills={item.kills} usages={item.usages} win_rate={item.win_rate} />)}
                  </tbody>
                </table>
              </div>

            } />
            <Route path='/*' element={
              stalkerData.map((item) => <BuildStatsListItem key={item.kill_fame} build={item.build} deaths={item.deaths} kills={item.kills} usages={item.usages} win_rate={item.win_rate} />)
            } />
          </Routes>
        </div >
      </div >}
    </div>
  )
}

export default BuildStats