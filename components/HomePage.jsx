const HomePage = () => {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='w-full h-full mx-auto p-2 flex justify-center items-center dark:bg-gray-800 dark:text-gray-300'>
				<div>
					<p className='uppercase text-sm tracking-widest pt-4 text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
					<h1 className='py-4 text-gray-700 dark:text-gray-200'>
						Hi, I&apos;m <span className='text-[#5651e5]'> Tejas </span>
					</h1>
					<h1 className='py-2 text-gray-700 dark:text-gray-300'>A Front-End Web Developer </h1>
					<p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
						I&apos;m focused on building responsive front-end web applications using React JS, Next JS and some cool css frameworks.
					</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage
