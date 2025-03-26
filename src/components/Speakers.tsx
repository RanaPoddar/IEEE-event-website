import SpeakerCard from "./SpeakerCard";
// Fonts 
import { Montserrat } from "next/font/google";
// import { Playfair_Display } from "next/font/google";
// import { Merriweather, Poppins } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});
// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
//   display: 'swap',
// })
// const merriweather = Merriweather({
//   subsets: ['latin'],
//   weight: ['400', '700', '900'],
//   display: 'swap',
// })
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '700', '800'],
//   display: 'swap',
// })

const speakers = [
    {
        image: "https://picsum.photos/200?1",
        name: "Prof. Ponnurangam Kumaraguru",
        details: "Natural Language Processing (NLP), Applied Machine Learning, Responsible AI, Social Computing"
    },
    {
        image: "https://picsum.photos/200?2",
        name: "Dr. Krithika Ramaswamy",
        details: "Graph Theory and Algorithms, Research Area: Parameterized Algorithms, Research Area: Approximation Algorithms"
    },
    {
        image: "https://picsum.photos/200?3",
        name: "Dr. Ebin Deni Raj",
        details: "Responsible AI,Explainable Machine Learning, AI for Social Good, Fairness, Accountability and Transparency in AI, Social Computing"
    },
    {
        image: "https://picsum.photos/200?4",
        name: "Dr. Michael Brown",
        details: "NLP, Bioinformatics, Machine Learning"
    },
    {
        image: "https://picsum.photos/200?5",
        name: "Dr. Sarah Davis",
        details: "Weighted graph theory, Interval Functions, Transit Functions, Median graphs"
    },
    {
        image: "https://picsum.photos/200?6",
        name: "Dr. William Wilson",
        details: "Expert in Internet of Things (IoT)"
    }
];

export default function Speakers() {

    return (
        <div className="bg-[#f5f5f5] py-4 mt-15">
        <div id="speakers" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            

            <div className="">
           <div className="w-full flex flex-col items-center justify-center">
           <h2 className={`${montserrat.className} text-headingColor font-bold text-3xl uppercase`}>Speakers</h2>
           <div className="relative mt-1 w-30 h-1 bg-customYellow rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
            {speakers.map((speaker, index) => (
                <SpeakerCard key={index} 
            image={speaker.image}
            name={speaker.name} 
            details={speaker.details}
            />
            ))}
             
           </div>
           </div>

        </div>
        </div>
    )
}