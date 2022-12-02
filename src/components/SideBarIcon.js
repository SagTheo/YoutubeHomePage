import React from 'react'
import styles from '../css/SideBarIcon.module.css'

const SideBarIcon = ({ icon, title, show }) => {
  return (
    <div className={`${styles.container} ${show ? styles.show : styles.hidden}`}>
        {icon}
        <span>{title}</span>
    </div>
  )
}

export default SideBarIcon