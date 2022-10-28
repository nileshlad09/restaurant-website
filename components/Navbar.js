import styles from '../styles/Banar.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
     <div className={styles.navbar}>
      <ul>
        <span> <Image src="/Img/logo2.png" width={60} height={60}/> </span>
        <Link href="/">Home</Link>
        <Link href="/Menu2">Menu</Link>
      </ul>
     </div>
    </>
  );
};

export default Navbar;
