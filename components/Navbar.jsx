import Link from "next/link"
import React, { useState, useEffect } from "react"
import TP from "../public/assets/icons/TP-Logo-Black.png"
import TPBW from "../public/assets/icons/TP-Logo-Purple-White.png"
import TPR from "../public/assets/icons/TP-Round.png"
import TPRW from "../public/assets/icons/TP-Round-White.png"
import Close from "../public/assets/icons/Close.png"
// import Hamburger from "../public/assets/icons/Hamburger.png"
import Image from "next/image"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
// import { MdDarkMode } from "react-icons/md"

var hostUrl = ''
const Navbar = (props) => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [mode, setMode] = useState()
	const [darkLogo, setDarkLogo] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 65) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener("scroll", handleShadow)
		if (window?.location?.hostname == 'localhost') {
			hostUrl = `http://localhost:3000/Tejas-Patil-3-yr-exp-Resume.pdf`
		} else hostUrl = `https://${window?.location?.hostname}/Tejas-Patil-3-yr-exp-Resume.pdf`
	}, [])

	const sendEmail = () => {
		setNav(!nav)
		window.open("mailto:er.tejaspatil15@gmail.com")
		// window.open("mailto:er.tejaspatil15@gmail.com?subject=SendMail&body=Description")
	}

	useEffect(() => {
		if (props.theme === "dark") {
			setMode("Light Mode")
			setDarkLogo(true)
		} else {
			setMode("Dark Mode")
			setDarkLogo(false)
		}
	}, [props.handleDark, props.theme])

	return (
		<div
			style={{ backgroundColor: "#ecf0f3" }}
			className={shadow ? "fixed top-0 w-full h-20 shadow-xl z-[100] ease-in-out duration-300" : "fixed top-0 w-full h-20 z-[100]"}
		>
			<div className='h-20 dark:bg-gray-950'>
				<div className='flex justify-between items-center w-full h-full px-1 2xl:px-16'>
					<Link href='/'>
						<Image src={darkLogo ? TPBW : TP} alt='/' width={95} height='35' className='cursor-pointer sm:pt-0 pt-2' />
					</Link>
					<div>
						<ul className='hidden md:flex pr-8 text-[#1f2937] dark:text-gray-300'>
							<li className='ml-10 text-sm hover:border-b hover:text-blue-600'>
								<Link href='/'>HOME</Link>
							</li>
							<li className='ml-10 text-sm hover:border-b hover:text-blue-600'>
								<Link href='/#about'>ABOUT</Link>
							</li>
							<li className='ml-10 text-sm hover:border-b hover:text-blue-600'>
								<Link href='/#skills'>SKILLS</Link>
							</li>
							<li className='ml-10 text-sm hover:border-b hover:text-blue-600'>
								<Link href='/#projects'>PROJECTS</Link>
							</li>
							<li className='ml-10 text-sm hover:border-b hover:text-blue-600'>
								<Link href={hostUrl}>RESUME</Link>
							</li>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-blue-600'>
								<Link onClick={sendEmail} href='/#contact'>
									Contact
								</Link>
							</li>
							<li className='ml-10 text-sm uppercase hover:text-blue-600'>
								<button onClick={props.handleDark} className='px-2'>
									{mode}
								</button>
							</li>
						</ul>
						{/* Hamburger Icon */}
						<div
							// style={{ color: "#1f2937" }}
							onClick={handleNav}
							className='md:hidden dark:text-gray-300 p-6'
						>
							{/* <Image
                src={Hamburger}
                alt='/'
                width='25'
                height='12'
                className='cursor-pointer pt-4'
              /> */}
							<AiOutlineMenu size={30} />
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{/* Overlay */}
				<div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
					{/* Side Drawer Menu */}
					<div
						className={
							nav
								? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen overflow-auto dark:bg-gray-800 dark:text-gray-300 bg-[#ecf0f3] p-10 ease-in duration-500"
								: "fixed left-[-130%] top-0 p-10 ease-in duration-500"
						}
					>
						<div>
							<div className='flex w-full items-center justify-between'>
								<Link href='/'>
									<Image src={darkLogo ? TPRW : TPR} width='70' height='30' alt='/' />
								</Link>
								<div onClick={handleNav} className='cursor-pointer'>
									<Image src={Close} width='30' height='10' alt='/' />
								</div>
							</div>
							<div className='border-b border-gray-300 my-4'>
								<p className='w-[85%] md:w-[90%] py-4'>Let&#39;s build something legendary together</p>
							</div>
						</div>
						<div className='py-4 flex flex-col'>
							<ul className='uppercase'>
								<Link href='/'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Home
									</li>
								</Link>
								<Link href='/#about'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										About
									</li>
								</Link>
								<Link href='/#skills'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Skills
									</li>
								</Link>
								<Link href='/#projects'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Projects
									</li>
								</Link>
								<Link href={hostUrl}>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Resume
									</li>
								</Link>
								<Link onClick={sendEmail} href='/#contact'>
									<li onClick={() => setNav(false)} className='py-4 text-sm'>
										Contact
									</li>
								</Link>
								<li className='py-4 text-sm'>
									<button onClick={props.handleDark} className='px-2'>
										{mode}
									</button>
								</li>
							</ul>
							<div className='pt-20'>
								<p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
								<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
									<Link href='/'>
										<div onClick={sendEmail} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
											<AiOutlineMail />
										</div>
									</Link>
									<Link href={hostUrl}>
										<div
											onClick={() => setNav(!nav)}
											className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
										>
											<BsFillPersonLinesFill />
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
