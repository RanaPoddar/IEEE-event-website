import CountDown from "./CountDown";

export default function Dates() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
           {/* Two parts ---> left side: Workshop date ; right side: deadline // 1 differet component --> timer */}
        {/* container div */}
        <div className="flex justify-evenly flex-col gap-10 md:gap-0 md:flex-row">
            {/* Workshop Date : LEFT DIV*/}
            <div className="flex-col justify-center">
                <h1 className="text-2xl font-semibold text-IEEEBlue font-poppins">Workshop Date</h1>

                <div className="w-full flex-col justify-start mt-4">
                <h1 className="text-4xl font-bold font-poppins text-elegantOrange">April 25, 2025</h1>
                <h6 className="text-lg font-normal text-darkGray font-poppins ml-2 mt-2">Event in: </h6>
                </div>
                {/* CountDown div */}
                <div className="">
                    <CountDown targetDate="2025-04-25T00:00:00" />
                </div>
            </div>

        {/* RIGHT DIV : Registrtion Deadline */}
         {/* Workshop Date : LEFT DIV*/}
         <div className="flex-col justify-center">
                <h1 className="text-2xl font-semibold text-IEEEBlue font-poppins">Registration Deadline</h1>

                <div className="w-full flex-col justify-start mt-4">
                <h1 className="text-4xl font-bold font-poppins text-elegantOrange">April 10, 2025</h1>
                <h6 className="text-lg font-normal text-darkGray font-poppins ml-2 mt-2">Registration closes in:: </h6>
                </div>
                {/* CountDown div */}
                <div className="">
                    <CountDown targetDate="2025-04-10T00:00:00" />
                </div>
            </div>

        </div>


        </div>
    )
}