import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();
  const handleDark = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  useEffect(()=>{
    if(window.matchMedia){
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  },[])

  return (
    <>
      <div className={theme}>
        <Navbar handleDark={handleDark} theme={theme} />
        <Component {...pageProps} />
        <Analytics />
      </div>
    </>
  );
}

export default MyApp;
