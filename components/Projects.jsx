import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id='projects' style={{ height: '80vh' }} className='w-full lg:h-auto overflow-auto pb-10 p-6 dark:bg-gray-800 dark:text-gray-300'>
      <p className='text-xl mb-2 mt-20 tracking-widest text-[#5651e5]'>MY PROJECTS</p>
      <ol className="list-decimal ml-10">
        <li>
          <Link href="https://notes-app-itstejas.vercel.app/">Notes App</Link>
        </li>
        <li>
          <Link href="https://tejas-patil-portfolio.vercel.app/">Portfolio</Link>
        </li>
        <li>
          <Link href="https://casino-slider.vercel.app/">Slider App</Link>
        </li>
      </ol>
    </div>
  )
}

export default Projects
