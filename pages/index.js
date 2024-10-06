import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage'
import About from '../components/About'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tejas Patil | Senior Software Engineer</title>
        <meta name="description" content="I'm a Front-End Developer and this is my portfolio" />
        <meta name="author" content="Tejas Patil" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
