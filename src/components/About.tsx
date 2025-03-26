// Fonts 
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Merriweather } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})


export default function About() {

    return (
        <div id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 md:mt-10">
            <div className="flex justify-center flex-col items-center w-full">
                <h2 className={`${montserrat.className} text-headingColor font-bold text-3xl uppercase`}>about</h2>
                <div className="relative mt-1 w-20 h-1 bg-customYellow rounded-full"></div>
                
            </div>
            {/* About the Event */}
            <div className="flex w-full pt-5 justify-start">
                <h3 className={`${playfair.className} text-darkGray text-xl md:text-2xl font-bold`}>About the Event</h3>
            </div>
            <div className="flex justify-start w-full pt-5">
            <p className={`${merriweather.className} text-darkGray text-sm md:text-lg font-medium text-justify`}>
            The goal of the ACM ROCS workshop is to raise awareness about the research opportunities available in the growing field of computer science broadly and also specifically in India. The one-day event will feature talks by leading experts across different themes in Computer Science
            </p>
            </div>

            {/* About Institute */}
            <div className="flex flex-col items-start w-full pt-5 justify-start">
                <h3 className={`${playfair.className} text-darkGray text-xl md:text-2xl font-bold`}>About the Organizing Institute</h3>
                <h3 className={`${montserrat.className} font-[400] text-xs md:text-sm pt-1`}>National Institute of Advanced Manufacturing Technology, Ranchi</h3>
            
            <div className="flex justify-start w-full pt-5">
            <p className={`${merriweather.className} text-justify text-darkGray text-sm md:text-lg font-medium`}>
            National Institute of Advanced Manufacturing Technology (NIAMT), Ranchi: The Vanguard of Manufacturing Excellence for India.Its unique pedagogical focus on manufacturing technology has always been the attraction of core manufacturing industries in the recruitment of students of NIAMT across the country. The Industry Liaison Cell of NIAMT Ranchi has been catering its services according to the employment needs of the students. Besides successful careers in industries, a good number of pass-out graduates join postgraduate programs in IITs, IISc, and IIMs. Alumni of the Institute, besides leading the manufacturing industries, are serving as faculty member in IITs, NITs, IIMs and at reputed institutes abroad. The completely residential campus encourages the students to take up various extra-curricular activities, throughout the year, like sports and cultural performance, building scientific models and racing cars for national and international events, promoting education among the less-privileged children of the locality through ‘Kartavya’, an NGO run by students and alumni of the Institute.
            </p>
            </div>
            <h3 className={`${montserrat.className} font-[400] text-xs md:text-sm pt-4`}>Department of Electronics and Computer Engineering</h3>
            <div className="flex justify-start w-full pt-5">
            <p className={`${merriweather.className} text-darkGray text-sm md:text-lg font-medium text-justify`}>
            The Department of Computer Engineering is committed to providing a comprehensive and dynamic education that aligns with the latest industry trends and technological advancements. Our mission is to cultivate skilled professionals who are equipped with both theoretical knowledge and practical expertise to address the challenges of modern computing systems.
            </p>
            </div>

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