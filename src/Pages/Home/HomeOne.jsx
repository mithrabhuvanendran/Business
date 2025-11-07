import { CiPlay1 } from "react-icons/ci";
import HomeImg from "../../assets/home.jpg"

const HomeOne = () => {
  return (
    <section id='home' className='grid place-items-center p-5! bg-blue-600 text-white'>
        <figure className='flex flex-col items-center justify-center gap-8 w-[80vw] sm:w-[85vw] md:w-[90vw] md:flex-row lg:w-[85vw] xl:w-[90vw] 2xl:w-5/6 h-150 sm:h-180 md:h-150'>
            <figcaption className="flex flex-col gap-8">
                <h1 className="font-bold text-2xl w-full sm:text-4xl md:text-3xl lg:text-4xl md:w-full xl:text-5xl xl:w-5/6 lg:leading-10 xl:leading-15 ">Corporate & Business Site Template By Ayro UI.</h1>
                <p className="text-zinc-300">We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things. </p>
                <div className="flex items-center gap-3 sm:gap-5">
                  <button className="border text-[12px] sm:text-base px-5! md:px-5! lg:px-7! py-3! font-bold bg-white text-blue-600 rounded-lg hover:border-white hover:bg-blue-600 hover:text-white cursor-pointer">GET STARTED</button>
                  <button className="border p-2! sm:p-3! rounded-full bg-white text-blue-600 cursor-pointer"><CiPlay1 /></button>
                  <label htmlFor="" className="cursor-pointer font-bold text-[14px] sm:text-base">Watch Intro</label>
                </div>
            </figcaption>
            <div className="sm:w-[85vw] md:w-250 sm:h-85 md:h-100 lg:h-120 ">
                <img className="rounded-lg" src={HomeImg} alt="" />
            </div>
        </figure>
    </section>
  )
}

export default HomeOne