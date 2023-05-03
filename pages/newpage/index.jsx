import React, { useState } from "react"

const NewPage = () => {
	const Arr1 = ["Hiii Array2", "Hello"]
	const [Arr, setArr] = useState(Arr1)
	console.log("Hii = ", Arr)

	const handleText = (e) => {
		console.log(e)
		setArr([e.target.value])
		console.log("Hii array = ", Arr)
	}

	return (
		<div className='h-screen p-4 bg-white dark:bg-slate-700'>
			<h2 className='my-20'>Welcome to my Web-Page</h2>
			<textarea value={Arr} onChange={handleText} />
			<label class='switch'>
				<input type='checkbox' />
				<span class='slider round'></span>
			</label>
		</div>
	)
}

export default NewPage
