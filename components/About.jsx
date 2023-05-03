import Image from "next/image"
import AboutImg from "../public/assets/icons/AboutImg.jpg"
import Btn from "./Btn"

// const PDF = "http://localhost:3000/Tejas-Patil-Resume.pdf";
// const PDF = "https://practice-itstejas.vercel.app/Tejas-Patil-Resume.pdf";
const About = () => {
	// const downloadFileAtURL = (url) => {
	// 	const fileName = url.split("/").pop()
	// 	const aTag = document.createElement("a")
	// 	aTag.href = url
	// 	aTag.setAttribute("download", fileName)
	// 	document.body.appendChild(aTag)
	// 	aTag.click()
	// 	aTag.remove()
	// }
	return (
		<div id='about' className='dark:bg-gray-800 w-full md:h-screen p-2 flex items-center py-16 scroll-smooth ease-linear duration-700 delay-700'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2 pt-14'>
					<p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
					<h2 className='py-4 dark:text-gray-200'>
						Tejas Patil <span className='text-sm sm:text-2xl'>| Software Engineer</span>
					</h2>
					<p className='py-2 text-gray-600 dark:text-gray-300'>
						I studied engineering from sinhgad academy of engineering, Pune. After finishing engineering in 2021 I started full time job as software engineer in
						persistent systems where I mainly work on front end technologies like REACT, NEXT and some CSS frameworks like BOOTSTRAP, CARBON and TAILWIND css. I
						work passionately as i love the devlopment using front end technologies. However, I&apos;m open to learn new back end technologies also. I&apos;m a
						quick learner. I love to take challenging opportunities. In persistent systems i got many awards and certifications for my dedication towards work
						and for participating in coding events. I got Bravo Team Award and Certificate for participating in Semicolon 2023 coding event.
					</p>
					<p className='py-2 text-gray-600 dark:text-gray-300'>
						I have experience of working in large team environment of 30 plus members. Also, I have experience of working and collaborating with cross
						functional teams. I have worked on development tools like JIRA, BITBUCKET, GIT and VS Code. In my spare time i try to learn new technologies and try
						to help my colleagues. Also, I guide my jr. peers whenever i get time.
					</p>

					<p className='py-2 text-gray-600 flex'>
						Download my&nbsp;
						{/* <button
							onClick={() => {
								downloadFileAtURL(PDF)
							}}
							className='p-2 text-white underline cursor-pointer'
						>
							Resume
						</button> */}
						<Btn />
					</p>
				</div>
				<div className='mt-10 w-full h-auto m-auto sm:mt-40 lg:mt-14 shadow-lg shadow-gray-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
					<Image src={AboutImg} width={292} className='rounded-xl' alt='/' />
				</div>
			</div>
		</div>
	)
}

export default About
