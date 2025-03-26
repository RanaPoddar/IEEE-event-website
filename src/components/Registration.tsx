'use client'
// Fonts 
import { Montserrat } from "next/font/google";
import { Merriweather} from "next/font/google";
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


export default function Registration() {

    return (
        <div id="registration" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex justify-center flex-col items-center w-full">
                <h2 className={`${montserrat.className} text-headingColor font-bold text-3xl uppercase`}>registration</h2>
                <div className="relative mt-1 w-40 h-1 bg-customYellow rounded-full"></div>
            </div>
            
                <div className=" flex justify-center items-center">
                <div className=" w-full pt-5">
                    <p className={`${merriweather.className} text-darkGray text-sm md:text-lg font-[400] test-justify`}>
                        We invite undergraduate students in their pre-final / final years and postgraduate students from computer science and mathematics to apply for participation in the workshop. Interested participants can register using the link below. The registration covers lunch, snacks and certificates. Accommodation will not be provided.
                    </p>
                    <p className={`${merriweather.className} text-darkGray text-sm md:text-lg font-medium test-justify`}>
                        Registration covers lunch, snacks and a participation certificate. The steps of the registration process are as follows:
                    </p>
                    <ol className={`${merriweather.className} text-darkGray text-sm md:text-lg font-medium list-decimal pl-5 mt-4`}>
                        <li>Go to the registration link below.</li>
                        <li>Select the number of registrations you want (maximum: 5).</li>
                        <li>Enter your basic details as a buyer of registrations.</li>
                        <li>Enter the details of each registrant you are registering for.</li>
                        <li>Pay using any of the listed options.</li>
                        </ol>
                </div>
                </div>

        <div className="w-full flex justify-start ">
<button
className="mt-4 px-4 py-1 text-lg font-medium cursor-pointer text-customYellow bg-white border-2 border-customYellow rounded-2xl shadow-lg hover:text-white hover:bg-customYellow  transition"
>
REGISTER NOW
</button>


        </div>
        
        
        </div>
      
    )
}