import { useCallback, useState, useRef, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { tool4albionAxios } from "../axios"
import { Link } from "react-router-dom"

const Navbar = () => {
  let timer: ReturnType<typeof setTimeout>;
  const [searchPlayer, setSearchPlayer] = useState("")
  const [players, setPlayers] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const searchBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideSearch, false);
    return () => {
      document.removeEventListener("click", handleClickOutsideSearch, false);
    }
  }, [])


  const handleSearchPlayerOnchange = useCallback((searchName: string) => {
    clearTimeout(timer)
    timer = setTimeout(async () => {
      setPlayers([])
      const { data } = await tool4albionAxios.get(`${encodeURIComponent(`search?q=${searchName}`)}`)
      const searchRes = JSON.parse(data.contents);
      setPlayers(searchRes.players)
      if (searchRes.players.length == 0) {
        setIsFetching(false);
      } else {
        setIsFetching(true)
      }
      // console.log(searchRes.players);
    }, 400);

  }, [])

  const handleClickOutsideSearch = (e: MouseEvent) => {
    if (searchBarRef.current && !searchBarRef.current.contains(e.target as Element)) {
      setSearchPlayer("");
      setPlayers([]);
    }
  };

  return (
    <div className='text-white flex items-center justify-between p-1 md:p-3 font-playfair'>
      <Link to="/">
        <div className='flex items-center justify-center w-[100px] h-[100px] rounded-full cursor-pointer transition hover:scale-105'>
          <img src="../assets/logo.png" alt="logo" />
        </div></Link>
      <div ref={searchBarRef} className='flex justify-center items-center'>
        <div className='relative w-[150px] md:w-[200px] flex items-center justify-center rounded-full bg-[#79797978] border border-transparent focus-within:border-[#f47b8f] focus-within:bg-[#79797940] transition mr-2'>
          <AiOutlineSearch className="text-xl" />
          <input value={searchPlayer} onChange={(e) => {
            setSearchPlayer(e.target.value)
            handleSearchPlayerOnchange(e.target.value)
          }} type="text" name="" id="" placeholder="Search Player..." className='px-2 py-1 outline-none bg-transparent w-[75%]' />
          {players.length != 0 && <div className={`h-auto absolute  w-[calc(100%+100px)] rounded border border-[#f93cd367] bg-[#363636f6] top-[calc(100%+20px)] transition duration-500 ${searchPlayer === "" ? "opacity-0 z-[-10]" : "opacity-100 z-[10]"}`}>
            {players.length != 0 ? players.map((item, index) =>
              // render player name
              <a href={`/players/${item['Id']}/${searchPlayer}`} key={item['Id']}>
                <div className="transition py-2 px-3 cursor-pointer ransition hover:bg-[#5c5c5cf6]">{item['Name']}</div>
              </a>
            ) :
              (!isFetching && <div className="p-3 select-none">
                <div className="flex items-center justify-center">
                  <img src="/data-not-found.png" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>Oops!</div>
                  <div>Data not found!</div>
                </div>
              </div>)}

          </div>}
        </div>
        <Link to="/buildstats/stalker">
          <div className='relative mx-1 md:mx-2 cursor-pointer hover:text-[#f47b8f] transition after:transition-[transform] after:content-[""] after:block after:absolute after:w-full after:-bottom-[4px] after:border-b after:border-white after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100'>
            Build Stats
          </div></Link>
        <Link to="/leaderboard">
          <div className='relative mx-1 md:mx-2 cursor-pointer hover:text-[#f47b8f] transition after:transition-[transform] after:content-[""] after:block after:absolute after:w-full after:-bottom-[4px] after:border-b after:border-white after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100'>
            Leaderboards
          </div>
        </Link>
        <Link to="/about">
          <div className='relative mx-1 md:mx-2 cursor-pointer hover:text-[#f47b8f] transition after:transition-[transform] after:content-[""] after:block after:absolute after:w-full after:-bottom-[4px] after:border-b after:border-white after:origin-left after:transform after:scale-x-0 hover:after:scale-x-100'>
            About
          </div></Link>
      </div>
      <Link to="/goldprice">
        <div className='mx-1 md:mx-2 cursor-pointer flex justify-center  items-center border border-[#f47b8f] p-2 rounded-full hover:bg-[#f47b8f57] transition hover:border-[#f9506c]'>
          <span className="ml-1">Gold Price</span>
          <div className='flex justify-center items-center'>
            <img src="/gold-icon.png" alt="" className='w-[65%]' />
          </div>
        </div></Link>
    </div>
  )
}

export default Navbar