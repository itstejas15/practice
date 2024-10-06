import { useEffect } from "react"
// const PDF = "https://itstejas-portfolio.vercel.app/Tejas-Patil-Resume.pdf";

var PDF = ''
const Btn = () => {
	useEffect(() => {
		if (window?.location?.hostname == 'localhost') {
	    PDF = `http://localhost:3000/Tejas-Patil-3-yr-exp-Resume.pdf`
		} else PDF = `https://${window?.location?.hostname}/Tejas-Patil-3-yr-exp-Resume.pdf`
	}, [])
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
