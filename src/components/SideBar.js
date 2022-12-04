import React, { useState} from 'react'
import styles from '../css/SideBar.module.css'
import { topIcons } from '../icons/sideBarTopIcons'
import { secondBlock } from '../icons/sideBarSecondBlock'
import { thirdBlock } from '../icons/sideBarThirdBlock'
import { fourthBlock } from '../icons/sideBarFourthBlock'
import { fifthBlock } from '../icons/sideBarFifthBlock'
import { lastBlock } from '../icons/sideBarLastBlock'
import { links } from '../linksSideBar'
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
      <div className={styles.linksContainer}>
        <div>
          {
            links.links1.map(link => {
              return (
                <a href={link.link} 
                  target='_blank' 
                  rel='noreferrer'
                  className={styles.link}
                >{link.title}</a>
              )
            })
          }
        </div>
        <div>
          {
            links.links2.map(link => {
              return (
                <a href={link.link} 
                  target='_blank' 
                  rel='noreferrer' 
                  className={styles.link}
                >{link.title}</a>
              )
            })
          }
        </div>
        <div className={styles.llc}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" class="bi bi-c-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z"/>
            </svg>
            <span>2022 Goggle LLC</span>  
        </div>
      </div>
    </div>
  )
}

export default SideBar