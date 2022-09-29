import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { tool4albionAxios } from '../axios';
import { BiArrowBack } from "react-icons/bi"
import { format } from "date-fns"
import Loading from '../components/Loading';
type PlayerInfo = {
  AllianceId: string;
  AllianceName: string;
  AllianceTag: string;
  Avatar: string;
  AvatarRing: string;
  AverageItemPower: number;
  DeathFame: number;
  Equipment: {
    Armor: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Bag: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Cape: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Food: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Head: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    MainHand: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Mount: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    OffHand: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Potion: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
    Shoes: {
      ActiveSpells: [];
      Count: number;
      PassiveSpells: [];
      Quality: number;
      Type?: string;
    },
  };
  FameRatio: number;
  GuildId: string;
  GuildName: string;
  Id: string;
  Inventory: [];
  KillFame: number;

  Name: string;
}

interface EventData {
  BattleId: number;
  Category: null;
  EventId: number;
  GroupMembers: PlayerInfo[];
  GvGMatch: null;
  KillArea: string;
  Killer: PlayerInfo;
  Location: null;
  Participants: PlayerInfo[];
  TimeStamp: string;
  TotalVictimKillFame: number;
  Type: string;
  Version: number;
  Victim: PlayerInfo;
  groupMemberCount: number;
  numberOfParticipants: number;
}

const Events = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState<EventData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    handleFetchEventData()
  }, [])

  const handleFetchEventData = async () => {
    const { data } = await tool4albionAxios.get(`${encodeURIComponent(`events/${id}`)}`)
    const res = JSON.parse(data.contents)
    console.log(res)
    setEventData(res)
    setIsLoading(false)
  }

  return (
    <div>
      {isLoading ? <div className='flex justify-center'><Loading /></div> :
        <div>
          <div onClick={() => { history.back() }} className='flex items-center mb-2 hover:text-[#ba59ff] transition cursor-pointer w-fit'>
            <BiArrowBack />
            <p>Back</p>
          </div>
          <div className='mt-5 p-4 h-auto bg-[#191b1bc0] rounded-lg border border-[#f93cd367]  w-full'>
            <div className='flex flex-col md:flex-row items-center justify-around'>
              <div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Bag?.Type}.png?quality=${eventData?.Killer.Equipment.Bag?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Head?.Type}.png?quality=${eventData?.Killer.Equipment.Head?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Cape?.Type}.png?quality=${eventData?.Killer.Equipment.Cape?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.MainHand?.Type}.png?quality=${eventData?.Killer.Equipment.MainHand?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Armor?.Type}.png?quality=${eventData?.Killer.Equipment.Armor?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    {
                      eventData?.Killer.Equipment.OffHand != null ? (<img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.OffHand?.Type}.png?quality=${eventData?.Killer.Equipment.OffHand?.Quality}`} alt="" className='w-[120px]' />) : <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.MainHand?.Type}.png?quality=${eventData?.Killer.Equipment.MainHand?.Quality}`} alt="" className='w-[120px] opacity-50' />
                    }
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Potion?.Type}.png?quality=${eventData?.Killer.Equipment.Potion?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Shoes?.Type}.png?quality=${eventData?.Killer.Equipment.Shoes?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Food?.Type}.png?quality=${eventData?.Killer.Equipment.Food?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Killer.Equipment.Mount?.Type}.png?quality=${eventData?.Killer.Equipment.Mount?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img className='w-[120px]' />
                  </div>
                </div>
              </div>
              <div className='my-5 md:my-0 flex flex-col items-center'>
                <div className='text-xl font-mono mb-5'>
                  {eventData && format(new Date(eventData.TimeStamp).getTime(), "Pp")}
                </div>
                <div className='text-xl mb-5 flex items-center justify-center'>
                  <div>
                    <div className='flex flex-col justify-center items-center'>
                      <a href={`/players/${eventData?.Killer.Id}/${eventData?.Killer.Name}`} className="div hover:text-[#ba59ff] transition cursor-pointer">
                        {eventData && eventData.Killer.Name}
                      </a>
                      <div className='font-mono'>
                        {eventData && eventData.Killer.AverageItemPower.toFixed(0)} ip
                      </div>
                    </div>
                  </div>
                  <img src="/static/vs.png" alt="" className='w-[150px]' />
                  <div>
                    <div className='flex flex-col justify-center items-center'>
                      <a href={`/players/${eventData?.Victim.Id}/${eventData?.Victim.Name}`} className="div hover:text-[#ba59ff] transition cursor-pointer">
                        {eventData && eventData.Victim.Name}
                      </a>
                      <div className='font-mono'>
                        {eventData && eventData.Victim.AverageItemPower.toFixed(0)} ip
                      </div>
                    </div>
                  </div>
                </div>
                <img src="/static/knife.png" alt="" className='w-[120px]' />
                <div>
                  Killed
                </div>
                <div className='text-4xl font-mono flex items-center'>
                  {eventData && eventData.TotalVictimKillFame.toLocaleString()}
                  <img src="/static/fame.png" alt="" className='w-[40px] inline ml-2 mt-1' />
                </div>
              </div>
              <div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Bag?.Type}.png?quality=${eventData?.Victim.Equipment.Bag?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Head?.Type}.png?quality=${eventData?.Victim.Equipment.Head?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Cape?.Type}.png?quality=${eventData?.Victim.Equipment.Cape?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.MainHand?.Type}.png?quality=${eventData?.Victim.Equipment.MainHand?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Armor?.Type}.png?quality=${eventData?.Victim.Equipment.Armor?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    {eventData?.Victim.Equipment.OffHand != null ? (<img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.OffHand?.Type}.png?quality=${eventData?.Victim.Equipment.OffHand?.Quality}`} alt="" className='w-[120px]' />) : <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.MainHand?.Type}.png?quality=${eventData?.Victim.Equipment.MainHand?.Quality}`} alt="" className='w-[120px] opacity-50' />}
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Potion?.Type}.png?quality=${eventData?.Victim.Equipment.Potion?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Shoes?.Type}.png?quality=${eventData?.Victim.Equipment.Shoes?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Food?.Type}.png?quality=${eventData?.Victim.Equipment.Food?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                </div>
                <div className='flex items-center'>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/undefined.png?quality=undefined`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/${eventData?.Victim.Equipment.Mount?.Type}.png?quality=${eventData?.Victim.Equipment.Mount?.Quality}`} alt="" className='w-[120px]' />
                  </div>
                  <div>
                    <img src={`https://render.albiononline.com/v1/item/undefined.png?quality=undefined`} alt="" className='w-[120px]' />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-3'>
              <h2 className='text-xl story-gradient w-fit '>
                Participants from the killer side(if any)
              </h2>
              <div className='mt-3'>
                {
                  eventData && eventData.Participants.length >= 2 ? eventData.Participants.map((item, index) => {
                    if (item.Name !== eventData.Killer.Name) {
                      return (
                        <div >
                          <a href={`/players/${item.Id}/${item.Name}`} className="div hover:text-[#ba59ff] transition cursor-pointer">
                            {item.Name}
                          </a>
                          <span className='font-mono ml-2'>({item.AverageItemPower.toFixed(0)} ip)</span>
                          <div className='flex items-center'>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.MainHand?.Type}.png?quality=${item.Equipment.MainHand?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.OffHand?.Type}.png?quality=${item.Equipment.OffHand?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Head?.Type}.png?quality=${item.Equipment.Head?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Armor?.Type}.png?quality=${item.Equipment.Armor?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Shoes?.Type}.png?quality=${item.Equipment.Shoes?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Cape?.Type}.png?quality=${item.Equipment.Cape?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Mount?.Type}.png?quality=${item.Equipment.Mount?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Potion?.Type}.png?quality=${item.Equipment.Potion?.Quality}`} alt="" />
                            </div>
                            <div className='select-none min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px]'>
                              <img src={`https://render.albiononline.com/v1/item/${item.Equipment.Food?.Type}.png?quality=${item.Equipment.Food?.Quality}`} alt="" />
                            </div>
                          </div>
                        </div>
                      )
                    }

                  }) : <div>No participant from the killer side~</div>
                }
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Events