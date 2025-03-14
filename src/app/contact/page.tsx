// components/ContactSection.js

import Navbar from "@/components/Navbar";

export default function ContactSection() {
    
    return (
        <>
        <Navbar />
      <section className="py-20 bg-white text-[#333333] mt-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <h2 className="text-4xl font-bold font-MerriWeather text-center text-[#0057B8] mb-12 relative inline-block">
            Contact Us
            {/* <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[110%] h-2 bg-gradient-to-r from-[#0057B8] via-[#F4A261] to-[#0057B8] rounded-full blur-[2px]" /> */}
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <form className="p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[#f0f4ff] to-[#e6ebff] space-y-6">
              <div>
                <label className="block text-lg font-medium mb-2">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] outline-none" required />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-2">Your Email</label>
                <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] outline-none" required />
              </div>
              
              <div>
                <label className="block text-lg font-medium mb-2">Your Message</label>
                <textarea rows={5} placeholder="Type your message..." className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0057B8] outline-none" required />
              </div>
              
              <button type="submit" className="w-full bg-[#0057B8] text-white text-lg font-medium py-3 rounded-lg hover:bg-[#F4A261] transition">
                Send Message
              </button>
            </form>
  
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-MerriWeather text-[#0057B8] mb-2">Reach Us At</h3>
                <p className="text-lg font-poppins">📧 Email: example@college.edu</p>
                <p className="text-lg font-poppins">📞 Phone: +91 12345 67890</p>
                <p className="text-lg font-poppins">📍 Address: 123, College Road, City, Country</p>
              </div>
  
              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=..."
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
  