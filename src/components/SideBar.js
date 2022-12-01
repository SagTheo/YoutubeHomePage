import React from 'react'
import styles from '../css/SideBar.module.css'
import { topIcons } from '../icons/sideBarTopIcons'
import { secondBlock } from '../icons/sideBarSecondBlock'
import SideBarIcon from './SideBarIcon'

const SideBar = () => {
  return (
    <div className={styles.container}>
      {
        topIcons.map(icon => {
          return (
            <SideBarIcon icon={icon.icon} title={icon.title} />
          )
        })
      }
      <div className={styles.separator}></div>
      {
        secondBlock.map(icon => {
          return (
            <SideBarIcon icon={icon.icon} title={icon.title} />
          )
        })
      }
      <div className={styles.separator}></div>
      <div className={styles.separator}></div>
      <div className={styles.separator}></div>
      <div className={styles.separator}></div>
      <div className={styles.separator}></div>
    </div>
  )
}

export default SideBar