import axios from 'axios'
import { useEffect, useState } from 'react'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import BuildStats from './pages/BuildStats'
import Leaderboard from './pages/Leaderboard'
import About from './pages/About'
import GoldPrice from './pages/GoldPrice'
import Player from './pages/Player'
import Events from './pages/Events'

function App() {
  useEffect(() => {
    document.title = "AlbionOL Panel"
    console.log(import.meta.env.VITE_CLIENT_ID_KEY);
  }, [])
  return (
    <div className="App">

      <div className="bg-shine bg-main fixed top-0 left-0 right-0 bottom-0 z-[-1] pointer-events-none w-[500vw] "></div>
      <div className='flex flex-col min-h-screen px-3 md:px-0'>
        <div className='mb-5 w-[650px] md:min-w-[1480px] lg:max-w-[1480px] mx-auto text-white font-playfair '>
          <Navbar />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/buildstats/*' element={<BuildStats />} />
              <Route path='/leaderboard' element={<Leaderboard />} />
              <Route path='/about' element={<About />} />
              <Route path='/goldprice' element={<GoldPrice />} />
              <Route path='/players/:id/:playerName' element={<Player />} />
              <Route path='/events/:id' element={<Events />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </div >
  )
}

export default App
