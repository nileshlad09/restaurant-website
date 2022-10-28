import Image from 'next/image'
import styles from '../styles/Banar.module.css'
import Link from 'next/link'
const Banar = () => {
  return (
    <div>
      <div className={styles.homePage}>
        <Image src="/Img/logo2.png" width={250} height={250}/>
        <h2>
          Order Tasty & 
          Fresh Food <br />
          <span>anytime!</span>
        </h2>
        <div className={styles.btnGroup}>
          <button><Link href="/Menu2"> See Menu</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Banar
