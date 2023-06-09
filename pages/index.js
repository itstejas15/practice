import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomePage from '../components/HomePage'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tejas Patil | Software Engineer</title>
        <meta name="description" content="I'm a Front-End Developer and this is my portfolio" />
        <link rel="icon" href="/fav.ico" />
      </Head>
      <HomePage />
      <About />
      <Skills />
    </div>
  )
}
