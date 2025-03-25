'use client';



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


export default function Test() {
  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-center">Font Testing</h1>

      {/* Poppins Font */}
      <div className={`${poppins.className} text-lg`}>
        <h2 className="text-xl font-bold">Poppins Font</h2>
        <p>
          This is a sample text using the <strong>Poppins</strong> font. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Montserrat Font */}
      <div className={`${montserrat.className} text-lg`}>
        <h2 className="text-xl font-bold">Montserrat Font</h2>
        <p>
          This is a sample text using the <strong>Montserrat</strong> font. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Playfair Display Font */}
      <div className={`${playfair.className} text-lg`}>
        <h2 className="text-xl font-bold">Playfair Display Font</h2>
        <p>
          This is a sample text using the <strong>Playfair Display</strong> font. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Winky Sans Font */}
      <div className={`${merriweather.className} text-lg`}>
        <h2 className="text-xl font-bold">Merri Weather</h2>
        <p>
          This is a sample text using the <strong>Winky Sans</strong> font. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}