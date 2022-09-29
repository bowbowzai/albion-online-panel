import axios from "axios";

export const tool4albionAxios = axios.create({
  baseURL: `https://api.allorigins.win/get?url=${encodeURIComponent('https://gameinfo.albiononline.com/api/gameinfo')}`,
  withCredentials: false
})

export const swaggerMurderLedger = axios.create({
  baseURL: `https://api.allorigins.win/get?url=${encodeURIComponent('https://murderledger.com/api')}`,
  withCredentials: false
})

export const twitchStreams = axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  headers: {
    "Client-Id": import.meta.env.VITE_SOME_KEY_CLIENT_ID_KEY
  }
})

export const albionData = axios.create({
  baseURL: `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.albion-online-data.com/api/v2")}`
})

// fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://gameinfo.albiononline.com/api/gameinfo/events/killfame?range=week&offset=0&limit=6')}`)
//   .then(response => {
//     if (response.ok) return response.json()
//     throw new Error('Network response was not ok.')
//   })
//   .then(data => console.log(JSON.parse(data.contents)));