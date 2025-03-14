import SpeakerCard from "./SpeakerCard";
const speakers = [
    {
        image: "https://picsum.photos/200?1",
        name: "Dr. John Doe",
        details: "Expert in AI and Machine Learning"
    },
    {
        image: "https://picsum.photos/200?2",
        name: "Dr. Jane Smith",
        details: "Specialist in Cybersecurity"
    },
    {
        image: "https://picsum.photos/200?3",
        name: "Dr. Emily Johnson",
        details: "Renowned Data Scientist"
    },
    {
        image: "https://picsum.photos/200?4",
        name: "Dr. Michael Brown",
        details: "Pioneer in Quantum Computing"
    },
    {
        image: "https://picsum.photos/200?5",
        name: "Dr. Sarah Davis",
        details: "Leader in Blockchain Technology"
    },
    {
        image: "https://picsum.photos/200?6",
        name: "Dr. William Wilson",
        details: "Expert in Internet of Things (IoT)"
    }
];

export default function Speakers() {

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
           <div className="w-full flex justify-center">
           <h2 className="text-IEEEBlue font-MerriWeather font-bold text-3xl uppercase">Speakers</h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-16">
            {speakers.map((speaker, index) => (
                <SpeakerCard key={index} 
            image={speaker.image}
            name={speaker.name} 
            details={speaker.details}
            />
            ))}
             
           </div>
        </div>
    )
}