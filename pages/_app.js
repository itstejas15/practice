import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();
  const handleDark = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  // const handleReset = () => {
  //   localStorage.removeItem('theme')
  // }

  useEffect(() => {
    const userTheme = localStorage.getItem('theme')
    if (userTheme) {
      if (userTheme === 'dark') {
        setTheme('dark')
      } else setTheme('light')
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else setTheme('light')
    }
    
   //OLD CODE FOR DARK MODE

    // if (window.matchMedia) {
    //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //     if (userTheme === 'light') {
    //       setTheme('light')
    //     } else {
    //       setTheme('dark')
    //     }
    //   } else {
    //     if (userTheme === 'dark') {
    //       setTheme('dark')
    //     } else {
    //       setTheme('light')
    //     }
    //   }
    // }
  }, [])

  return (
    <>
      <div className={theme}>
        <Navbar handleDark={handleDark} theme={theme} />
        <Component {...pageProps} />
        <Analytics />
        {/* <button onClick={handleReset}> Reset Theme</button> */}
      </div>
    </>
  );
}

export default MyApp;
