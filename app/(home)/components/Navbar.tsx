"use client";

export default function Navbar(){
  return(
    <div className="fixed top-0 left-0 w-full  flex justify-center items-center z-50">
      <div className="rounded-3xl px-10 bg-zinc-900 p-3 mt-10 w-1/6 flex justify-between ring-2 ring-gray-300 ring-opacity-20">
        <a href="#home" className="hover:text-gray-300 transition-all">Home</a>
        <a href="#skills" className="hover:text-gray-300 transition-all">Skills</a>
        <a href="#projects" className="hover:text-gray-300 transition-all">Projects</a>
        <a href="#contact" className="hover:text-gray-300 transition-all">Contact Me</a>
      </div>
    </div>
  );
}
  
