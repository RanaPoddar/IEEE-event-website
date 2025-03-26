import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});

export default function Footer() {

    return (
<footer className={`${montserrat.className} bg-customYellow text-black text-center p-4`}>
        <p>&copy; {new Date().getFullYear()} NIAMT Ranchi. All rights reserved.</p>
      </footer>
    );
}

