import React, { useState} from 'react'
import styles from '../css/SideBar.module.css'
import { topIcons } from '../icons/sideBarTopIcons'
import { secondBlock } from '../icons/sideBarSecondBlock'
import { thirdBlock } from '../icons/sideBarThirdBlock'
import { fourthBlock } from '../icons/sideBarFourthBlock'
import { fifthBlock } from '../icons/sideBarFifthBlock'
import { lastBlock } from '../icons/sideBarLastBlock'
import SideBarIcon from './SideBarIcon'
import ShowMoreLess from './ShowMoreLess'
import SideBarYoutuber from './SideBarYoutuber'

const SideBar = () => {
  const [showSideBarItem, setShowSideBarItem] = useState(false)
  const [showYoutuber, setShowYoutuber] = useState(false)

  return (
    <div className={styles.container}>
      {/* First block */}
      {
        topIcons.map(icon => {
          return (
            <SideBarIcon icon={icon.icon} title={icon.title} show={true} />
          )
        })
      }
      <div className={styles.separator}></div>
      {/* Second block */}
      {
        // side bar icons get a class 'show' or 'hidden' depending on wether 
        // they should be displayed or not, given the length of secondBlock 
        secondBlock.map((icon, index) => {
          return (
            <SideBarIcon icon={icon.icon} 
                          title={icon.title} 
                          show={index > 4 ? showSideBarItem : true}
            />
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
      {/* Third block */}
      <span className={styles.sideBarTitle}>Subscriptions</span>
      {
        thirdBlock.map((icon, index) => {
          return (
            <SideBarYoutuber src={icon.icon} 
                              title={icon.title} 
                              show={index > 6 ? showYoutuber : true}
                />
          )
        })
      }
      {
        thirdBlock.length > 7 ?
          showYoutuber ?
            <ShowMoreLess icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-up" viewBox="0 0 16 16">
                                  <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
                                </svg>} 
                          text='Show fewer' 
                          toggle={setShowYoutuber}
                          show={showYoutuber} 
            />
          :
            <ShowMoreLess icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-caret-down" viewBox="0 0 16 16">
                                  <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>}
                          text={`Show ${thirdBlock.length - 7} more`} 
                          toggle={setShowYoutuber}
                          show={showYoutuber} 
            />
        :
        null
      }
      <div className={styles.separator}></div>
      {/* Fourth block */}
      <span className={styles.sideBarTitle}>Explore</span>
      {
        fourthBlock.map(icon => {
          return (
            <SideBarIcon icon={icon.icon}
                         title={icon.title}
                         show={true}
            />
          )
        })
      }
      <div className={styles.separator}></div>
      {/* Fifth block */}
      <span className={styles.sideBarTitle}>More from Youtube</span>
      {
        fifthBlock.map(icon => {
          return (
            <SideBarIcon icon={icon.icon}
                         title={icon.title}
                         show={true} 
            />
          )
        })
      }
      <div className={styles.separator}></div>
      {/* Last block */}
      {
        lastBlock.map(icon => {
          return (
            <SideBarIcon icon={icon.icon}
                         title={icon.title}
                         show={true}
            />
          )
        })
      }
      <div className={styles.separator}></div>
    </div>
  )
}

export default SideBar