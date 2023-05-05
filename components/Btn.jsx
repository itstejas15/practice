import { useEffect } from "react"

// const PDF = "https://itstejas-portfolio.vercel.app/Tejas-Patil-Resume.pdf";
// const PDF = `https://${window.location.hostname}/Tejas-Patil-Resume.pdf`
var PDF
const Btn = () => {
	useEffect(() => {
	    PDF = `https://${window.location.hostname}/Tejas-Patil-Resume.pdf`
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
