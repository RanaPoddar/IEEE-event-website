import Navbar from "@/components/Navbar";

export default function SchedulePage() {
    const schedule = [
      { time: '09:00 AM', event: 'Registration & Welcome Breakfast', speaker: '-' },
      { time: '10:00 AM', event: 'Opening Ceremony', speaker: 'Prof. John Doe' },
      { time: '11:00 AM', event: 'Keynote Speech: Future of AI', speaker: 'Dr. Jane Smith' },
      { time: '12:00 PM', event: 'Panel Discussion: Research Trends', speaker: 'Various' },
      { time: '01:00 PM', event: 'Lunch Break', speaker: '-' },
      { time: '02:00 PM', event: 'Workshop: AI & ML', speaker: 'Mr. Alan Brown' },
      { time: '04:00 PM', event: 'Closing Remarks & Networking', speaker: 'Prof. John Doe' }
    ];
  
    return (
        <>
        <Navbar/>
      <section className="py-20 bg-white text-[#333333] mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center font-MerriWeather text-[#0057B8] mb-12 relative inline-block">
            Event Schedule
            {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[120%] h-2 bg-gradient-to-r from-[#0057B8] via-[#F4A261] to-[#0057B8] rounded-full blur-[2px]" /> */}
          </h2>
  
          {/* Timeline */}
          <div className="border-l-4 border-[#0057B8] pl-8 mb-12 space-y-8">
            {schedule.map((item, index) => (
              <div key={index} className="relative font-poppins">
                <div className="absolute w-4 h-4 bg-[#0057B8] rounded-full -left-6 top-2.5" />
                <div className="bg-[#f0f4ff] p-6 rounded-lg shadow-md hover:scale-105 transition">
                  <p className="text-xl font-semibold text-[#F4A261]">{item.time}</p>
                  <h3 className="text-2xl font-bold text-[#333333]">{item.event}</h3>
                  <p className="text-lg text-[#555555]">Speaker: {item.speaker}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Tabular Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse shadow-lg">
              <thead>
                <tr className="bg-[#0057B8] text-white">
                  <th className="p-4">Time</th>
                  <th className="p-4">Event</th>
                  <th className="p-4">Speaker</th>
                </tr>
              </thead>
              <tbody className="font-poppins">
                {schedule.map((item, index) => (
                  <tr key={index} className="odd:bg-[#f0f4ff] even:bg-white hover:bg-[#e6ebff]">
                    <td className="p-4">{item.time}</td>
                    <td className="p-4">{item.event}</td>
                    <td className="p-4">{item.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      </>
    );
  }
  