import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import Navbar  from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <Navbar />
      
      {/* FOTO */}
      <Image
        src="/image.png"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-4 border-gray-500 shadow-lg"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Nuril Zain 👋</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        Cybersecurity Enthusiast & Web Developer who loves building modern web experiences.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
        Focused on learning full-stack web development and cyber defense technologies. Passionate about secure web solutions and innovation.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#E34F26] transition-colors duration-300 group">
            <SiHtml5 size={40} color="#E34F26" />
            <div className="absolute inset-y-0 left-0 w-1 bg-[#E34F26] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#2563EB] transition-colors duration-300 group">
            <SiCss3 size={40} color="#2563EB" />
            <div className="absolute inset-y-0 left-0 w-1 bg-[#2563EB] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#FACC15] transition-colors duration-300 group">
            <SiJavascript size={40} color="#FACC15" />
            <div className="absolute inset-y-0 left-0 w-1 bg-[#FACC15] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#22D3EE] transition-colors duration-300 group">
            <SiReact size={40} color="#22D3EE" />
            <div className="absolute inset-y-0 left-0 w-1 bg-[#22D3EE] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
          </div>
          <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#FFFFFF] transition-colors duration-300 group">
            <SiNextdotjs size={40} color="#FFFFFF" />
            <div className="absolute inset-y-0 left-0 w-1 bg-[#FFFFFF] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
          </div>
            <div className="p-4 border border-gray-700 rounded-lg relative hover:border-[#38BDF8] transition-colors duration-300 group">
              <SiTailwindcss size={40} color="#38BDF8" />
              <div className="absolute inset-y-0 left-0 w-1 bg-[#38BDF8] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-l"></div>
            </div>
        </div>


      {/* CONTACT */}
      <><h2 className="text-2xl font-semibold mb-3">Contact</h2><p className="text-gray-400 mb-4">Let’s build something together!</p>
      
      {/* Social Media Icons */}
      <div className="flex gap-4 mb-6">
        <a href="https://github.com/znoctizz" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-lg transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-white/50 hover:scale-110 active:scale-95 active:shadow-xl active:shadow-white/70">
          <SiGithub size={24} className="hover:text-white transition-colors duration-300" />
        </a>
        <a href="https://instagram.com/rlzenn_" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-lg transition-all duration-300 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/50 hover:scale-110 active:scale-95 active:shadow-xl active:shadow-pink-500/70">
          <SiInstagram size={24} className="hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a href="https://linkedin.com/in/muhammad-nuril-mubin-595187355" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 rounded-lg transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-110 active:scale-95 active:shadow-xl active:shadow-blue-500/70">
          <SiLinkedin size={24} className="hover:text-blue-500 transition-colors duration-300" />
        </a>
      </div>
      
      <a
      href="mailto:nurilzain27@gmail.com"
      className="px-6 py-3 bg-gradient-to-r from-gray-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition hover:transform hover:scale-105"
      >
        Email Me
      </a></>
      
      <footer>
      <p className="text-gray-500 text-sm mt-12">© 2024 Nuril Zain. All rights reserved.</p>
      </footer>
    </main>
  );
}
