import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai"
import { FiTwitch } from "react-icons/fi"
import { DiReact } from "react-icons/di"
import { SiTailwindcss, SiRedux } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const About = () => {
  return (
    <div className="text-xl text-justify">
      <h2 className='text-2xl story-gradient w-fit'>
        About the Developer
      </h2>
      <div className='p-8 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367]'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='select-none overflow-hidden rounded-full w-[40%] mb-5 md:mb-0 md:w-[20%]'>
            <img src="/src/assets/developer.jpeg" alt="" className='w-full' />
          </div>
          <div className='md:ml-5 w-full text-xl text-justify'>
            Hello guys! I am the developer of AlbionOL Panel,I come from Malaysia and now studying in Xiamen University Malaysia as a year 2 software engineering student.
            <div>
              <h3 className='story-gradient w-fit text-2xl mt-3'>Why you developed this website?</h3>
              <div>
                First of all, I am an Albion Online player, although I am quite fresh in this game, but I found this game is interesting and attractive. One day, when i am watching Albion Online related youtube video, I found that youtuber is using a website named Murder Ledger. Once I tried this website, I found this is quite useful and aroused me to develop a similar website. Since I am self-learning front end skills, this website is not that cool and efficient, pardon me.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center'>
        <div className='p-8 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-full md:w-fit'>
          <h3 className='text-xl story-gradient w-fit text-2xl'>
            My in game details
          </h3>
          <div className='mt-3'>
            <p>Welcome to add me XD, I have no friends that are playing this game :(</p>
            <div className="flex justify-center mt-3">
              <img src="/src/assets/mygame.png" alt="" />
            </div>
          </div>
        </div>
        <div className='ml-3 p-8 mt-5 bg-[#191b1bc0] rounded-lg border border-[#f93cd367] w-fit'>
          <h3 className='text-xl story-gradient w-fit text-2xl'>
            More of me
          </h3>
          <div className='mt-3'>
            <p>If you found this website is not that bad, please drop a star in <a href="https://github.com/bowbowzai/albionOL-panel" target={'_blank'} rel="noopenner noreferrer" className="underline hover:text-[#fd6de0b9] transition">my github repo</a>~</p>
            <div className="flex flex-col items-center justify-center">
              <a href="https://github.com/bowbowzai" rel="noopenner noreferrer" target={'_blank'} className="mt-2 text-xl flex items-center">
                My Github: <AiFillGithub className="text-[150px] hover:text-[#4078c0] transition cursor-pointer" />
              </a>
              <a rel="noopenne noreferrer" href="https://twitter.com/Bowbowzai0215" target={'_blank'} className="block mt-2 text-xl flex items-center">
                My Twitter: <AiOutlineTwitter className="text-[150px] hover:text-[#00acee] transition cursor-pointer" />
              </a>
            </div>
            <div className="mt-3">
              I am also finding a junior/interview level of remote(time flexing, I have uni class, assignment, quiz, exam etc..) front end job. Since I am self-learning and all of my developed project is completed independently, I have no teamwork experience and also work experience, but I am willing to learn! If you are interesting on me, please email to <a className="underline hover:text-[#fd6de0b9] transition" href="mailto: jupeng2015@gmail.com">jupeng2015@gmail.com</a>
            </div>
            <div className="mt-5 flex items-center">
              <h5 className="mr-3">My main skill sets:</h5>
              <DiReact className="text-5xl" />
              <SiTailwindcss className="text-5xl" />
            </div>
            <div className="mt-5 flex items-center">
              <h5 className="mr-3">Other skill sets:</h5>
              <SiRedux className="text-4xl" />
              <TbBrandNextjs className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About