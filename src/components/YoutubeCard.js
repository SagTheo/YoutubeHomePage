import React from 'react'
import styles from '../css/YoutubeCard.module.css'

const YoutubeCard = ({thumbnailPic, 
                      thumbnailAlt, 
                      videoDuration, 
                      profilePic, 
                      profileAlt, 
                      title,
                      youtuber,
                      videoStats}) => {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
          <img src={thumbnailPic} alt={thumbnailAlt} />
          <div className={styles.videoDuration}>{videoDuration}</div>
      </div>
      <div className={styles.thumbnailInfo}>
          <img src={profilePic} alt={profileAlt} className={styles.profilePic} />
          <div className={styles.videoInfo}>
              <span>{title}</span>
              <span className={styles.grey}>{youtuber}</span>
              <span className={`${styles.grey} ${styles.flex}`}>
                {videoStats.views} views
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" class="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg> 
                {videoStats.postedAt}
              </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
      </div>
    </div>
  )
}

export default YoutubeCard