import { formatDistance } from "date-fns"

interface PlayerRecentBattlesProps {
  BattleId: number;
  numberOfParticipants: number;
  TimeStamp: string;
  TotalVictimKillFame: number;
  isPlayerBeKilled: boolean;
  KillerName: string;
  KillerId: string;
  KillerAverageItemPower: number;
  KillerEquipment: {
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
  }
  VictimName: string;
  VictimId: string;
  VictimAverageItemPower: number;
  VictimEquipment: {
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
  }
}

// interface PlayerRecentBattlesProps {
//   battle_id: number;
//   participant_count: number;
//   killer: {
//     item_power: number;
//     name: string;
//     kill_fame: number;
//     loadout: {
//       bag: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       body: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       cape: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       food: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       head: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       main_hand: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       mount: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       off_hand: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       potion: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       shoe: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       }
//     }
//   }
//   victim: {
//     item_power: number;
//     name: string;
//     loadout: {
//       bag: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       body: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       cape: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       food: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       head: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       main_hand: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       mount: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       off_hand: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       potion: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       },
//       shoe: {
//         en_name: string;
//         enchant: number;
//         id: string;
//         quality: number;
//         tier: number;
//         type: string;
//       }
//     }
//   }
//   tags: {
//     fair: boolean;
//     is_1v1: boolean;
//     is_2v2: boolean;
//     is_5v5: boolean;
//     is_zvz: boolean;
//     unfair: boolean;
//   }
//   time: number;
//   total_kill_fame: number;
//   isPlayerBeKilled: boolean;
// }

const PlayerRecentBattles = ({ BattleId, KillerName, TimeStamp, TotalVictimKillFame, numberOfParticipants, isPlayerBeKilled, KillerAverageItemPower, KillerEquipment, KillerId, VictimAverageItemPower, VictimEquipment, VictimId, VictimName }: PlayerRecentBattlesProps) => {

  return (
    <a href={`/events/${BattleId}`} className='block my-5 flex justify-center'>
      <div className={'flex flex-col md:flex-row items-center justify-between w-full cursor-pointer py-2 mx-1 px-2 rounded-lg transition hover:scale-[101.5%] ' + (isPlayerBeKilled ? "playerBeKilled" : "playerKilled")}>
        <div>
          <h3 className='text-lg font-mono'>{isPlayerBeKilled == true ? `${VictimName} (${VictimAverageItemPower.toFixed(0)}IP)` : `${KillerName} (${KillerAverageItemPower.toFixed(0)}IP)`}</h3>
          <div className='truncate flex flex-wrap  items-center'>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.MainHand?.Type}.png?quality=${VictimEquipment?.MainHand?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.MainHand?.Type}.png?quality=${KillerEquipment.MainHand?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.OffHand?.Type}.png?quality=${VictimEquipment?.OffHand?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.OffHand?.Type}.png?quality=${KillerEquipment.OffHand?.Quality}`} alt="" />
              }

            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Head?.Type}.png?quality=${VictimEquipment.Head?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Head?.Type}.png?quality=${KillerEquipment.Head?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Armor?.Type}.png?quality=${VictimEquipment.Armor?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Armor?.Type}.png?quality=${KillerEquipment.Armor?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Shoes?.Type}.png?quality=${VictimEquipment.Shoes?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Shoes?.Type}.png?quality=${KillerEquipment.Shoes?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Cape?.Type}.png?quality=${VictimEquipment.Cape?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Cape?.Type}.png?quality=${KillerEquipment.Cape?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Bag?.Type}.png?quality=${VictimEquipment.Bag?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Bag?.Type}.png?quality=${KillerEquipment.Bag?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Mount?.Type}.png?quality=${VictimEquipment.Mount?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Mount?.Type}.png?quality=${KillerEquipment.Mount?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Potion?.Type}.png?quality=${VictimEquipment.Potion?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Potion?.Type}.png?quality=${KillerEquipment.Potion?.Quality}`} alt="" />
              }
            </div>
            <div className={`min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none ${VictimEquipment.Food != null ? " block" : "hidden"}`}>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Food?.Type}.png?quality=${VictimEquipment.Food?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Food?.Type}.png?quality=${KillerEquipment.Food?.Quality}`} alt="" />
              }
            </div>
          </div>
        </div>
        <div className="mx-0 my-3 md:my-0 md:mx-3">
          {
            isPlayerBeKilled == true ?
              <div className='flex flex-col justify-center items-center font-mono'>
                <img src="/src/assets/death.png" alt="" className='w-[30px]' />
                <div className='flex items-center'>
                  {TotalVictimKillFame.toLocaleString()}
                  <div className='ml-1 pt-2 w-[20px] select-none'>
                    <img src="/src/assets/fame.png" alt="Fame" />
                  </div>
                </div>
              </div> : <div className='flex flex-col justify-center items-center text-center font-mono'>
                <img src="/src/assets/knife.png" alt="" className='w-[30px]' />
                <div className='flex items-center'>
                  {TotalVictimKillFame.toLocaleString()}
                  <div className='ml-1 mt-1 w-[20px] select-none'>
                    <img src="/src/assets/fame.png" alt="Fame" />
                  </div>
                </div>
              </div>
          }
          <div className="font-mono text-center">
            {
              formatDistance(new Date(TimeStamp).getTime(), new Date().getTime())
            }
            &nbsp;ago
          </div>
          <div className="flex items-center justify-center">
            {numberOfParticipants <= 1 && <div className="mt-1 font-mono text-center border border-[#f93cd367] w-fit px-2 ">
              <div>1v1</div>
            </div>}
            <div className="ml-2 mt-1 font-mono text-center border border-[#f93cd367] w-fit px-2 ">
              {
                Math.abs(KillerAverageItemPower - VictimAverageItemPower) >= 150 ? <div>Ip unfair</div> : <div>Ip fair</div>
              }
            </div>
          </div>
        </div>
        <div>
          <a href={`/players/${isPlayerBeKilled == true ? KillerId : VictimId}/${isPlayerBeKilled == true ? KillerName : VictimName}`} className='block text-lg font-mono transition hover:text-[#ba59ff]'>{isPlayerBeKilled == true ? `${KillerName} (${KillerAverageItemPower.toFixed(0)}IP)` : `${VictimName} (${VictimAverageItemPower.toFixed(0)}IP)`}</a>
          <div className='truncate flex flex-wrap items-center'>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.MainHand?.Type}.png?quality=${KillerEquipment.MainHand?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.MainHand?.Type}.png?quality=${VictimEquipment.MainHand?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.OffHand?.Type}.png?quality=${KillerEquipment.OffHand?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.OffHand?.Type}.png?quality=${VictimEquipment.OffHand?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Head?.Type}.png?quality=${KillerEquipment.Head?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Head?.Type}.png?quality=${VictimEquipment.Head?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Armor?.Type}.png?quality=${KillerEquipment.Armor?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Armor?.Type}.png?quality=${VictimEquipment.Armor?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Shoes?.Type}.png?quality=${KillerEquipment.Shoes?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Shoes?.Type}.png?quality=${VictimEquipment.Shoes?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Cape?.Type}.png?quality=${KillerEquipment.Cape?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Cape?.Type}.png?quality=${VictimEquipment.Cape?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Bag?.Type}.png?quality=${KillerEquipment.Bag?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Bag?.Type}.png?quality=${VictimEquipment.Bag?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Mount?.Type}.png?quality=${KillerEquipment.Mount?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Mount?.Type}.png?quality=${VictimEquipment.Mount?.Quality}`} alt="" />
              }
            </div>
            <div className='min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none'>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Potion?.Type}.png?quality=${KillerEquipment.Potion?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Potion?.Type}.png?quality=${VictimEquipment.Potion?.Quality}`} alt="" />
              }
            </div>
            <div className={`min-w-[60px] min-h-[60px] max-w-[60px] max-h-[60px] select-none ${KillerEquipment.Food != null ? "block" : "hidden"} md:block`}>
              {
                isPlayerBeKilled == true ? <img src={`https://render.albiononline.com/v1/item/${KillerEquipment.Food?.Type}.png?quality=${KillerEquipment.Food?.Quality}`} alt="" /> : <img src={`https://render.albiononline.com/v1/item/${VictimEquipment.Food?.Type}.png?quality=${VictimEquipment.Food?.Quality}`} alt="" />
              }
            </div>

          </div>
        </div>
      </div>
    </a>
  )
}

export default PlayerRecentBattles