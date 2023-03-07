import Head from 'next/head'
import jokerImg from '../public/joker.jpg'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <Head>
        <title>First Program</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Policy</li>
          </ul>
        </nav>
        <header className={styles.header}>
          <div className={styles.headerComp}>
            <div className={styles.hamIcon}></div>
            <h1>Milan Store</h1>
          </div>
          <div className={styles.headerComp}>
            <span>Login</span>
            <span>Signup</span>
          </div>
        </header>
        <div className={styles.mainContainer}>
          <div className='newCollections'>
            <h2>New Collections</h2>
            <div className='products'>
              <div className='product'>
                <img src={jokerImg.src} alt='Joker Image' />
                <div className='product-title'>
                  <span className='product-title'>Gown</span>
                  <span className='product-price'>NPR 2000</span>
                </div>
                <span className='product-detail'>
                  Some description about the clothes , Its a very nice warm and
                  cozy dress.
                </span>
              </div>
            </div>
          </div>
          <div className='trendy-looks'>
            <h2>Trendy Looks</h2>
            <span>
              Some description about the clothes , Its a very nice warm and cozy
              dress
            </span>
          </div>
        </div>
      </main>
    </>
  )
}
