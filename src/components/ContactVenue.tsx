'use client'

import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { Merriweather } from "next/font/google";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
})
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

const ContactVenue = () => {
    
    return (
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Contact Section */}
          <div>
            <h2 className={`${montserrat.className} text-3xl font-bold mb-6 uppercase text-[#262626]`}>Contact Us</h2>
            <div>
              <p className={`${merriweather.className} text-lg font-semibold`}>Prof. Rahul Mishra</p>
              <p>Email: <a href="mailto:johndoe@example.com" className={`${poppins.className} text-IEEEBlue`}>rahulmishra@example.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className={`${poppins.className} text-IEEEBlue`}>+1 234 567 890</a></p>

              <div className="mt-6"></div>

              <p className={`${merriweather.className} text-lg font-semibold`}>Prof. Shalini Mahato</p>
              <p>Email: <a href="mailto:janesmith@example.com" className={`${poppins.className} text-IEEEBlue`}>smahato@example.com</a></p>
              <p>Phone: <a href="tel:+0987654321" className={`${poppins.className} text-IEEEBlue`}>+0 987 654 321</a></p>
            </div>
          </div>
  
          {/* Venue Section */}
          <div>
            <h2 className={`${montserrat.className} text-3xl font-bold mb-6 uppercase text-[#262626]`}>Venue</h2>
            <p className="text-lg">Auditorium, National Institute of Advanced Manufacturing Technology (Formerly NIFFT)</p>
            <p className="text-gray-600 mt-4">Khunti - Chaibasa Rd, NIFFT Colony, Hatia, Ranchi, Jharkhand 834003</p>
            <div className="mt-6">
              <iframe
                className="w-full h-64 rounded-lg border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.601037349637!2d85.30927083872628!3d23.29394208088773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f51fcbeaaaaaab%3A0x594cdf25c49ee4f!2sNational%20Institute%20of%20Advanced%20Manufacturing%20Technology%20(Formerly%20NIFFT)!5e0!3m2!1sen!2sin!4v1741947741304!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactVenue;