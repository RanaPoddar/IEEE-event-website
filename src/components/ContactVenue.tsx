'use client'

import axios from "axios";

const ContactVenue = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
    
        try {
          const response = await axios.post('/api/contact', data, {
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.status === 200) {
            alert('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
          } else {
            alert('Failed to send message. Please try again later.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred.');
        }
      };


    return (
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-MerriWeather uppercase text-IEEEBlue">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input 
                  name="name" 
                  type="text" 
                  className="w-full p-3 border border-IEEEBlue/70 rounded-lg focus:border-IEEEBlue focus:ring-IEEEBlue" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input name="email" type="email" className="w-full p-3 border border-IEEEBlue/70 rounded-lg" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" className="w-full p-3 border border-IEEEBlue/70 rounded-lg" rows={4} placeholder="Your Message" required></textarea>              
                </div>
             
                <button
className="mt-8 px-4 py-1 text-lg font-medium cursor-pointer text-IEEEBlue bg-white border-2 border-IEEEBlue rounded-2xl shadow-lg hover:text-white hover:bg-IEEEBlue  transition"
>
Send Message
</button>
            </form>
          </div>
  
          {/* Venue Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-MerriWeather uppercase text-IEEEBlue">Venue</h2>
            <p className="text-lg">Auditoriom, National Institute of Advanced Manufacturing Technology (Formerly NIFFT)</p>
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