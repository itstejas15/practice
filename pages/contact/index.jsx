import React from "react"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import Link from "next/link"

const Contact = () => {

  const sendEmail = () => {
    window.open("mailto:er.tejaspatil15@gmail.com")
  }

  return (
    <div className="mt-40">
      <div className="m-8">
        <h3>Contact Details:</h3>
        <ol type='1'>
          <li>
            Email: <a href="mailto:er.tejaspatil15@gmail.com">er.tejaspatil15@gmail.com</a>
          </li>
          <li>
            Mobile No: <a href="tel:9404475442">9404475442</a>
          </li>
        </ol>
        <div className='pt-20'>
          <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
          <div className='flex items-center justify-between my-4' style={{ width: '20vw' }}>
            <a href='https://www.linkedin.com/in/ertejaspatil/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/er-tejas-patil' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='#'>
              <div onClick={sendEmail} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='#'>
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact