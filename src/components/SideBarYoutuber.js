import React from 'react'
import styles from '../css/SideBarIcon.module.css'

const SideBarYoutuber = ({src, title, show}) => {
  return (
    <div className={`${styles.container} ${show ? styles.show : styles.hidden}`}>
        <img className={styles.profilePic} src={src} alt={title} />
        <span>{title}</span>
    </div>
  )
}

export default SideBarYoutuber