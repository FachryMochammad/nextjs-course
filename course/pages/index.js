import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>loremipsum</p>
      <Link href="/courselist">
        <a className={styles.btn}>See Course Listing</a>
      </Link>
    </div>
  )
}
