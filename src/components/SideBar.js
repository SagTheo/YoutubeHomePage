import React, { useState} from 'react'
import styles from '../css/SideBar.module.css'
import { topIcons } from '../icons/sideBarTopIcons'
import { secondBlock } from '../icons/sideBarSecondBlock'
import SideBarIcon from './SideBarIcon'
import ShowMoreLess from './ShowMoreLess'

const SideBar = () => {
  const [showSideBarItem, setShowSideBarItem] = useState(false)

  return (
    <div className={styles.container}>
      {
        topIcons.map(icon => {
          return (
            <SideBarIcon icon={icon.icon} title={icon.title} show={true} />
          )
        })
      }
      <div className={styles.separator}></div>
      {
        // side bar icons get a class 'show' or 'hidden' depending on wether 
        // they should be displayed or not, given the length of secondBlock 
        secondBlock.length > 5 ?
          secondBlock.map((icon, index) => {
            return (
              <SideBarIcon icon={icon.icon} 
                           title={icon.title} 
                           show={index > 4 ? showSideBarItem : true}
              />
            )
          })
        :
          secondBlock.map(icon => {
            return (
              <SideBarIcon icon={icon.icon} title={icon.title} show={true} />
            )
          })
      }
      {
        // if more than 5 items in secondBlock, we display a show more button,
        // that will change the class of the side bar icons from hidden to show and vice versa
        secondBlock.length > 5 ?
          showSideBarItem ?
            <ShowMoreLess icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-up" viewBox="0 0 16 16">
                                  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                </svg>} 
                          text='Show fewer' 
                          toggle={setShowSideBarItem}
                          show={showSideBarItem} 
            />
          :
            <ShowMoreLess icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-down" viewBox="0 0 16 16">
                                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>}
                          text='Show more' 
                          toggle={setShowSideBarItem}
                          show={showSideBarItem} 
            />
        :
        null
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