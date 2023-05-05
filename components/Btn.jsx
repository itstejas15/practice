// const PDF = "https://itstejas-portfolio.vercel.app/Tejas-Patil-Resume.pdf";

const Btn = () => {
	if(window){
		var hostUrl = window?.location?.hostname
	}

	const PDF = `https://${hostUrl}/Tejas-Patil-Resume.pdf`

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
				className='p-2 underline cursor-pointer'
			>
				Resume
			</button>
		</>
	)
}

export default Btn
