import React from 'react'
import styles from '../css/YoutubeCard.module.css'

const YoutubeCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.thumbnail}>
            <img />
            <div className={styles.videoDuration}>5:32</div>
        </div>
        <div className={styles.thumbnailInfo}>
            <img className={styles.profilePic} />
            <div className={styles.videoInfo}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <svg />
        </div>
    </div>
  )
}

export default YoutubeCard