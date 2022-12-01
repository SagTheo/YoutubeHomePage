import React from 'react'
import styles from '../css/SideBarIcon.module.css'

const SideBarIcon = ({ icon, title }) => {
  return (
    <div className={styles.container}>
        {icon}
        <span>{title}</span>
    </div>
  )
}

export default SideBarIcon