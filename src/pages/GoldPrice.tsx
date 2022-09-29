import React, { useEffect, useState } from 'react'
import { albionData } from '../axios'
import { format } from "date-fns"
import { AreaChart, XAxis, YAxis, Area, Tooltip, ResponsiveContainer, TooltipProps } from "recharts"
import { TiTick } from "react-icons/ti"
import Loading from '../components/Loading';


interface GoldPriceData {
  price: number;
  timestamp: string;
}


const CustomTooltip = ({
  active,
  payload,
  label,
}
  : TooltipProps<number | string, number | string>
) => {
  return (
    <div className='text-white py-2 px-3 bg-[#26313c] small-nav'>
      <h3>{label && format(new Date(label).getTime(), "d,MMM h aaa")}</h3>
      <div className='flex items-center'>
        {
          payload && payload.length != 0 && payload[0].payload.price.toLocaleString()
        } Siver per  <img src="/src/assets/gold-icon.png" alt="" className='ml-1 mt-1 w-[20px]' />
      </div>
    </div>
  )
}

const GoldPrice = () => {
  const [goldPrice, setGoldPrice] = useState<GoldPriceData[]>([])
  const [priceLowestAndHighest, setPriceLowestAndHighest] = useState<number[]>([])
  const [isSelected, setIsSelected] = useState("1")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    handleGoldPriceOneDay();
  }, [])

  const handleGoldPriceOneDay = async () => {
    setIsLoading(true)
    const { data } = await albionData.get(`${encodeURIComponent('stats/gold.json?count=24')}`)
    // console.log(data)
    const res = JSON.parse(data.contents)
    const lowest = Math.min(...res.map((item: GoldPriceData) => item.price));
    const highest = Math.max(...res.map((item: GoldPriceData) => item.price));
    setPriceLowestAndHighest([lowest, highest])
    setGoldPrice(res.reverse());
    setIsLoading(false)
  }

  const handleGoldPriceThreeDay = async () => {
    setIsLoading(true)
    const { data } = await albionData.get(`${encodeURIComponent('stats/gold.json?count=72')}`)
    // console.log(data)
    const res = JSON.parse(data.contents)
    const lowest = Math.min(...res.map((item: GoldPriceData) => item.price));
    const highest = Math.max(...res.map((item: GoldPriceData) => item.price));
    setPriceLowestAndHighest([lowest, highest])
    setGoldPrice(res.reverse());
    setIsLoading(false)
  }

  const handleGoldPriceSevenDay = async () => {
    setIsLoading(true)
    const { data } = await albionData.get(`${encodeURIComponent('stats/gold.json?count=168')}`)
    // console.log(data)
    const res = JSON.parse(data.contents)
    const lowest = Math.min(...res.map((item: GoldPriceData) => item.price));
    const highest = Math.max(...res.map((item: GoldPriceData) => item.price));
    setPriceLowestAndHighest([lowest, highest])
    setGoldPrice(res.reverse());
    setIsLoading(false)
  }

  return (
    <div>
      {
        isLoading ? <div className='flex justify-center'><Loading /></div> : <div><div>
          <div>
            <h2 className='text-2xl story-gradient w-fit'>
              Gold Price
            </h2>
          </div>
          <div className='mt-10 text-black'>
            {
              goldPrice.length != 0 && <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={goldPrice}>
                  <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ba59ff" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis interval={isSelected == "1" ? 8 : isSelected == "3" ? 15 : 30} dataKey="timestamp" tickFormatter={date => {
                    const d = new Date(date).getTime()
                    return (format(d, "d,MMM h aaa"));
                  }} />
                  <YAxis tickCount={8} dataKey="price" domain={priceLowestAndHighest} tickFormatter={(value) => value.toLocaleString()} />
                  <Tooltip content={<CustomTooltip />} />

                  <Area type="monotone" dataKey="price" stroke="#f93cd367" fill="url(#color)" />
                </AreaChart>
              </ResponsiveContainer>
            }
          </div>
          <div className='mt-3'>
            <div className='flex'>
              <div className={`flex items-center ${isSelected === "1" ? "small-nav" : ""}`}>
                {isSelected === "1" && <TiTick className='text-xl' />}
                <span className='cursor-pointer ' onClick={() => {
                  setIsSelected("1"); handleGoldPriceOneDay();
                }}>1 day</span>
              </div>
              <div className={`mx-4 flex items-center ${isSelected === "3" ? "small-nav" : ""}`}>
                {isSelected === "3" && <TiTick className='text-xl' />}
                <span className='cursor-pointer ' onClick={() => {
                  setIsSelected("3");
                  handleGoldPriceThreeDay();
                }}>3 days</span>
              </div>
              <div className={`flex items-center ${isSelected === "7" ? "small-nav" : ""}`}>
                {isSelected === "7" && <TiTick className='text-xl' />}
                <span className='cursor-pointer ' onClick={() => {
                  setIsSelected("7");
                  handleGoldPriceSevenDay();
                }}>7 days</span>
              </div>
            </div>
          </div>
        </div></div>
      }
    </div>
    // <div></div>
  )
}

export default GoldPrice

