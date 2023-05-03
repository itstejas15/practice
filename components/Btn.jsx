const PDF = "https://practice-itstejas.vercel.app/Tejas-Patil-Resume.pdf"

const Btn = () => {
	const downloadFileAtURL = (url) => {
		const fileName = url.split("/").pop()
		const aTag = document.createElement("a")
		aTag.href = url
		aTag.setAttribute("download", fileName)
		document.body.appendChild(aTag)
		aTag.click()
		aTag.remove()
	}
	return (
		<>
			<button
				onClick={() => {
					downloadFileAtURL(PDF)
				}}
				className='p-2 text-white underline cursor-pointer'
			>
				Resume
			</button>
		</>
	)
}

export default Btn
