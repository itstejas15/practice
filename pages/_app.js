import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { useState } from "react"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState();
  const handleDark = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
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
