const Schedule = () => {
    const schedule = [
      { time: '9:00 – 9:45', theme: 'Registration', speaker: '' },
      { time: '10:00 - 10:30', theme: 'ACM India Research’s Facilitation Activities', speaker: 'Ponnurangam Kumaraguru' },
      { time: '10:30 - 11:00', theme: 'Glimpse into Vision and Language Research: Past, Present, and Future', speaker: 'Anand Mishra' },
      { time: '11:00 - 11:30', theme: 'How to cope with NP-hardness?', speaker: 'Lawqueen Kanesh' },
      { time: '11:30 - 12:00', theme: 'Coffee Break', speaker: '' },
      { time: '12:00 - 12:30', theme: 'Research opportunities in CSE at LNMIIT', speaker: 'Dr. Subrat K Dash' },
      { time: '12:30 - 1:00', theme: 'Responsible and Safe AI', speaker: 'Ponnurangam Kumaraguru' },
      { time: '1:00 - 2:30', theme: 'Lunch Break', speaker: '' },
      { time: '2:30 - 3:00', theme: 'Connected Intelligence: An overview of ML over Graphs', speaker: 'Siddhartha Asthana' },
      { time: '3:00 - 3:30', theme: 'Computational social choice theory: What and why?', speaker: 'Pallavi Jain' },
      { time: '3:30 - 4:00', theme: 'Coffee Break', speaker: '' },
      { time: '4:00 - 5:00', theme: 'Panel Discussion', speaker: '' },
    ];
  
    return (
      <section className="py-16 bg-white text-darkGray">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-IEEEBlue underline decoration-sky-500 uppercase font-MerriWeather">Workshop Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-4 font-semibold">Time</th>
                  <th className="border border-gray-300 p-4 font-semibold">Theme</th>
                  <th className="border border-gray-300 p-4 font-semibold">Speakers</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="border border-gray-300 p-4">{item.time}</td>
                    <td className="border border-gray-300 p-4">{item.theme}</td>
                    <td className="border border-gray-300 p-4">{item.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };
  
  export default Schedule;
  