'use client';

import { FaGlobe, FaUserTie, FaGamepad, FaCode, FaTrophy } from 'react-icons/fa';
import { SiGlitch } from 'react-icons/si';
import Image from 'next/image';

const achievements = [
  {
    title: "Founder & President, ADTC",
    year: "2024",
    icon: () => <FaCode className="text-black" />,
    desc: "Founded ADTC at ANDC DU to empower students via workshops, hackathons, and industry ties. Reached 2000+ students from 25+ top colleges.",
    logo: "/adtc-logo.png",
  },
  {
    title: "Managed Team Blood Reapers",
    year: "2021",
    icon: () => <FaGamepad className="text-black" />,
    desc: "Led team operations, strategy, and recruitment for competitive combat games.",
    logo: "/blood-reapers-logo.png",
  },
  {
    title: "Product Tester, Glip GG",
    year: "2023",
    icon: () => <SiGlitch className="text-black" />,
    desc: "Tested recording/streaming features and suggested UX improvements for Glip.",
    logo: "/glip-logo.png",
  },
  {
    title: "Campus Rep, The Esports Club",
    year: "2024",
    icon: () => <FaUserTie className="text-black" />,
    desc: "Hosted college esports events, influencer sessions, and built student community.",
    logo: "/esportsclub-logo.png",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] py-16 px-6 sm:px-12">
      <h2 className="mt-8 text-5xl font-bold text-center mb-20 tracking-tight text-cyan-300">Achievements</h2>

      <div className="relative border-l-4 border-cyan-400 pl-6 sm:pl-10 ml-4">
        {achievements.map((item, index) => (
          <div key={index} className="mb-16 relative group">
            {/* Timeline Dot with Glow */}
            <div className="absolute -left-7 sm:-left-9 top-2.5 w-10 h-10 rounded-full bg-cyan-400 ring-4 ring-cyan-300/20 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              {item.icon()}
            </div>

            {/* Card */}
            <div className="bg-[#1e293b] p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-cyan-400/30 transition duration-300">
              <div className="flex items-center gap-4 mb-3">
                {item.logo && (
                  <div className="relative w-12 h-12">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      fill
                      className="object-contain rounded-lg border border-cyan-500/30"
                    />
                  </div>
                )}
                <h3 className="text-2xl sm:text-3xl font-semibold text-white">{item.title}</h3>
              </div>
              <span className="text-cyan-400 text-sm font-semibold">{item.year}</span>
              <p className="text-gray-300 mt-3 text-base leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
