import React, { useState } from "react"

const NewPage = () => {
	const Arr1 = ["One", "Two" , "Three","Four"]
	const [Arr, setArr] = useState(Arr1)
	console.log("Hii = ", Arr)

	const handleText = (e) => {
		setArr(e.target.value.split(','))
	}

  // Arr.forEach(function(element) {
  //   Arr.push(' '+ element )
  // });

	return (
		<div className='h-screen p-4 bg-white dark:bg-slate-700' spellCheck='false' >
			<h2 className='my-20'>Welcome to my Web-Page</h2>

			<textarea value={Arr} onChange={handleText} />

		</div>
	)
}

export default NewPage
