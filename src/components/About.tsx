import {motion} from "motion/react"

export default function About() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center w-full">
                <h2 className="text-IEEEBlue font-MerriWeather font-bold text-3xl uppercase">about</h2>
            </div>

                <div className="flex justify-start w-full pt-5">
                    <p className="text-darkGray text-lg md:text-xl font-medium">
                    The goal of the ACM ROCS workshop is to raise awareness about the research opportunities available in the growing field of computer science broadly and also specifically in India. The one-day event will feature talks by leading experts across different themes in Computer Science
                    </p>
                </div>
        
        <div className="w-full flex justify-start gap-5">
<button
className="mt-8 px-4 py-1 text-lg font-medium cursor-pointer text-IEEEBlue bg-white border-2 border-IEEEBlue rounded-2xl shadow-lg hover:text-white hover:bg-IEEEBlue  transition"
>
SCHEDULE
</button>

<button
className="mt-8 px-4 py-1 text-lg font-medium cursor-pointer text-IEEEBlue bg-white border-2 border-IEEEBlue rounded-2xl shadow-lg hover:text-white hover:bg-IEEEBlue  transition"
>
VENUE
</button>

        </div>
        
        
        </div>
      
    )
}