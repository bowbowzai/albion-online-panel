import axios from 'axios';
import { useEffect, useState } from 'react'
import { tool4albionAxios, swaggerMurderLedger, twitchStreams } from '../axios'
import RecentTopFameKillListItem from '../components/RecentTopFameKillListItem'
import Loading from '../components/Loading'
import StreamView from '../components/StreamView';
import WinRateBuild from '../components/WinRateWeopons';
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar, Mousewheel, Autoplay } from "swiper";
import { HiTrendingUp } from "react-icons/hi"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import 'swiper/css';
import "swiper/css/scrollbar";
import "swiper/css/autoplay"
import { Link } from 'react-router-dom';

interface WinRateBuild {
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

const Home = () => {
  const [topKilLFame, setTopKillFame] = useState([])
  const [topWinRateBuild, setTopWinRateBuild] = useState<WinRateBuild[]>([])
  const [streamsData, setStreamsData] = useState([]);
  const [loadingTwitter, setLoadingTwitter] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

  const getTopKillFame = async () => {
    const { data } = await tool4albionAxios.get(`${encodeURIComponent('events/killfame?range=week&offset=0&limit=5')}`)
    const res = JSON.parse(data.contents);
    setTopKillFame(res)
  }
  const getTopWinRateStalkerWeopon = async () => {
    const { data } = await swaggerMurderLedger.get(`${encodeURIComponent("builds/1v1_stalker_7_day")}`)
    const res = JSON.parse(data.contents)
    // console.log(res)
    let topFiveWinRateBuilds = [];
    res.builds.sort((a: WinRateBuild, b: WinRateBuild) => {
      return b['win_rate'] - a['win_rate'];
    })
    for (let i = 0; i < 5; i++) {
      topFiveWinRateBuilds.push(res.builds[i]);
    }
    setTopWinRateBuild(topFiveWinRateBuilds);
    // console.log(topFiveWinRateBuilds);
    // setIsLoading(false)
  }

  const getTwitchALOLStreams = async () => {
    const twitchAccessTokenExpiredTime = window.localStorage.getItem("twitchAccessTokenExpiredTime");
    if (!twitchAccessTokenExpiredTime || Number(twitchAccessTokenExpiredTime) <= Date.now()) {
      if (twitchAccessTokenExpiredTime) {
        window.localStorage.removeItem("TwitchAccessToken")
        window.localStorage.removeItem("twitchAccessTokenExpiredTime")
      }
      const res = await axios.post("https://id.twitch.tv/oauth2/token", {
        client_id: import.meta.env.VITE_CLIENT_ID_KEY,
        client_secret: import.meta.env.VITE_CLIENT_SECRET_KEY,
        grant_type: "client_credentials"
      })
      window.localStorage.setItem("TwitchAccessToken", res.data.access_token);
      window.localStorage.setItem("twitchAccessTokenExpiredTime", res.data.expires_in + Date.now());

    }
    const res = await twitchStreams.get("games?name=Albion Online", {
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("TwitchAccessToken")
      }
    })
    // console.log(res)
    const albionGameID = res.data.data[0].id;
    // console.log(albionGameID);
    const streams = await twitchStreams.get(`streams?game_id=${albionGameID}`, {
      headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("TwitchAccessToken")
      }
    })
    // console.log(streams.data.data)
    setStreamsData(streams.data.data)
    // setStreamsData([])
    setIsLoading(false)
  }

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth)
    // console.log(window.innerWidth);
    // console.log("hi")
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    getTopKillFame();
    getTopWinRateStalkerWeopon();
    getTwitchALOLStreams();
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div>
      {
        isLoading ? <div className='flex justify-center'><Loading /></div> : <div>
          <div className='flex flex-col md:flex-row justify-around'>
            <div className='p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-fit md:w-[45%]'>
              <div>
                <h2 className='text-xl story-gradient w-fit '>
                  Top Recently Kill Fame
                </h2>
                <div className='mt-2'>
                  {
                    topKilLFame ? (
                      topKilLFame.map((item, index) => {
                        return <RecentTopFameKillListItem key={item['BattleId']} eventID={item['EventId']} killFame={item['TotalVictimKillFame']} killerId={item['Killer']['Id']} killerMainHand={item['Killer']['Equipment']['MainHand'] ? item['Killer']['Equipment']['MainHand']['Type'] : ""} killerName={item['Killer']['Name']} timestamp={item['TimeStamp']} victimId={item['Victim']['Id']} victimMainHand={item['Victim']['Equipment']['MainHand'] ? item['Victim']['Equipment']['MainHand']['Type'] : ""} victimName={item['Victim']['Name']} killerMainHandQuality={item['Killer']['Equipment']['MainHand'] ? item['Killer']['Equipment']['MainHand']['Quality'] : 0} victimMainHandQuality={item['Victim']['Equipment']['MainHand'] ? item['Victim']['Equipment']['MainHand']['Quality'] : 0} />
                      })
                    ) : <Loading />
                  }
                </div>
              </div>
            </div>
            <div className='mt-5 md:mt-0 p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-fit md:w-[40%]'>
              <div>
                <div className='flex justify-between items-center'>
                  <h2 className='text-xl story-gradient w-fit '>
                    Top 5 Highest Win Rate Builds in Stalker
                  </h2>
                  <Link to='/buildstats/stalker' className='text-xs cursor-pointer transition hover:text-[#ff98eab9] hover:scale-105 '>
                    More details -&gt;
                  </Link>
                </div>
                <div className='mt-2'>
                  {
                    topWinRateBuild.map((item, index) => {
                      return (
                        <WinRateBuild index={index} build={item.build} deaths={item.deaths} kills={item.kills} win_rate={item.win_rate} key={item.death_fame} />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='p-4 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367]'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl story-gradient w-fit '>
                Live Albion Online Twitch Streams
              </h2>
              <a href='https://www.twitch.tv/directory/game/Albion%20Online' target="_blank" rel='noreferrer noopennner' className='block text-md cursor-pointer transition hover:text-[#ff98eab9] hover:scale-105 flex items-center'>
                <div className='mr-1'>View More</div>
                <HiTrendingUp />
              </a>
            </div>
            <div></div>
            {streamsData.length >= 1 ? <Swiper
              scrollbar={{ hide: true }}
              modules={[Autoplay, Scrollbar, Mousewheel]}
              className='mt-2 flex flex-wrap p-4 pb-5 md:max-w-[1480px]' spaceBetween={40}
              slidesPerView={windowInnerWidth >= 768 ? 3 : 1}
              mousewheel={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false
              }}
            >
              {
                streamsData.map((item, index) =>
                  <SwiperSlide key={Number(item['id'])} >
                    <StreamView language={item["language"]} thumbnail_url={item["thumbnail_url"]} title={item["title"]} type={item["type"]} user_login={item["user_login"]} user_name={item["user_name"]} viewer_count={item["viewer_count"]} />
                  </SwiperSlide>)
              }
            </Swiper> : <div className='mt-2'>No live streaming now..</div>}
          </div>
          <div className='mt-5 flex flex-col flex-col-reverse md:flex-row items-start justify-around'>
            <div className='mt-5 md:mt-0 h-auto p-4 bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-[60%]'>
              <h2 className='text-xl story-gradient w-fit '>
                WHAT?! You are not Albion Online Player ?!
              </h2>
              <div className='mt-2'>
                <div>
                  Click this button to download it right now!!!
                </div>
                <a title='It will direct to Albion Online official website download link, not virus link XD' href="https://albiononline.com/en/download" target="_blank" rel='noreferrer noopenner' className='border border-[#f93cd367] block mt-2 px-3 py-2 w-fit rounded hover:border-white transition hover:text-[#ffb9f1d7]'>
                  DOWNLOAD
                </a>
                <h2 className='mt-5 text-xl story-gradient w-fit '>
                  WHAT?! You will not download it until you understand what Albion Online is?!
                </h2>
                <div className='mt-2'>
                  No worries, check the video below!
                </div>
                <div className='mt-3 w-full h-[400px] '>
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/HKb8NPs5YDY" title="What is Albion Online?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                <div className='mt-2'>
                  Another video that you can watch!
                </div>
                <div className='mt-3 w-full h-[400px]'>
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/DA9vGFTeMEc" title="What is Albion Online?" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
              </div>
            </div>
            <div className='p-4 w-full md:w-[35%] h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367]'>
              <h2 className='text-xl story-gradient w-fit '>
                News
              </h2>
              <div className='mt-3'>
                <TwitterTimelineEmbed
                  onLoad={function noRefCheck() { setLoadingTwitter(false) }}
                  options={{
                    height: 600
                  }}
                  borderColor="#191b1bc0"
                  screenName="albiononline"
                  sourceType="profile"
                  theme='dark'
                  noScrollbar={true}
                />
                {loadingTwitter && <div className='my-3 flex items-center justify-center'>
                  <Loading />
                </div>}
              </div>
            </div>
          </div>
        </div>
      }


    </div>
  )
}

export default Home