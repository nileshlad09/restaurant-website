import React from 'react'
import styles from '../styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.footerArea}>
          <div className={styles.connectWithme}>
            <p className="para">Connect with me</p>
            <div className={styles.socialmedia}>
              <a
                href="https://www.linkedin.com/in/nilesh-lad-476216216/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/nileshlad09"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github-square"></i>
              </a>
              <a
                href="https://www.instagram.com/nileshlad09/"
                target="_blank"
                rel="noreferrer"
              >
              <i className="fab fa-instagram-square"></i>
              </a>
              <a
                href="https://twitter.com/Nileshlad09"
                target="_blank"
                rel="noreferrer"
              >
              <i className="fab fa-twitter-square"></i>
              </a>              
            </div>
          </div>
      </div>
  )
}

export default Footer
