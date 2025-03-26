import CountDown from "../CountDown";
import "./Dates.css";
// Fonts 
import { Montserrat } from "next/font/google";
import { Merriweather } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})


export default function Dates() {

    return (
      <div className="w-full relative registration-container px-5 py-5 mt-10">
         <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  "
        // style={{ backgroundImage: `url(${"/"})` }}
        >
           {/* Two parts ---> left side: Workshop date ; right side: deadline // 1 differet component --> timer */}
        {/* container div */}
        <div className="flex justify-evenly flex-col gap-10 md:gap-0 md:flex-row z-10">
            {/* Workshop Date : LEFT DIV*/}
            <div className="flex-col justify-center z-10">
                <h1 className={`${merriweather.className} text-2xl font-semibold text-white`}>Workshop Date</h1>

                <div className="w-full flex-col justify-start mt-2">
                <h1 className={`${montserrat.className} text-4xl font-bold text-customYellow`}>May 3, 2025</h1>
                <h6 className={`${merriweather.className} text-lg font-normal text-white mt-2`}>Event in: </h6>
                </div>
                {/* CountDown div */}
                <div className="">
                    <CountDown targetDate="2025-05-03T00:00:00" />
                </div>
            </div>

        {/* RIGHT DIV : Registrtion Deadline */}
         {/* Workshop Date : LEFT DIV*/}
         <div className="flex-col justify-center z-10">
                <h1 className={`${merriweather.className} text-2xl font-semibold text-white`}>Registration Deadline</h1>

                <div className="w-full flex-col justify-start mt-2">
                <h1 className={`${montserrat.className} text-4xl font-bold text-customYellow `}>April 25, 2025</h1>
                <h6 className={`${merriweather.className} text-lg font-normal text-white mt-2`}>Registration closes in: </h6>
                </div>
                {/* CountDown div */}
                <div className="">
                    <CountDown targetDate="2025-04-25T00:00:00" />
                </div>
            </div>

        </div>


        </div>
        </div>
    )
}