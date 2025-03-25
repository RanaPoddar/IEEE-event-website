'use client'
// Fonts 
import { Montserrat } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Merriweather, Poppins } from "next/font/google";
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
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})

export default function Registration() {

    return (
        <div id="registration" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="flex justify-center w-full">
                <h2 className={`${montserrat.className} text-headingColor font-bold text-3xl uppercase`}>registration</h2>
            </div>
            
                <div className=" flex justify-center items-center">
                <div className="flex justify-start w-full pt-5">
                    <p className={`${merriweather.className} text-darkGray text-sm md:text-lg font-medium`}>
                    We invite undergraduate students in their pre-final / final years and postgraduate students from computer science and mathematics to apply for participation in the workshop. Interested participants can register using the link below. The registration covers lunch, snacks and certificates. Accommodation will not be provided.                    </p>
                </div>
                </div>

        <div className="w-full flex justify-start ">
<button
className="mt-8 px-4 py-1 text-lg font-medium cursor-pointer text-customYellow bg-white border-2 border-customYellow rounded-2xl shadow-lg hover:text-white hover:bg-customYellow  transition"
>
REGISTER NOW
</button>


        </div>
        
        
        </div>
      
    )
}