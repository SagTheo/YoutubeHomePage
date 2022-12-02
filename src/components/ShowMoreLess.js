import React from 'react'
import styles from '../css/ShowMoreLess.module.css'

const ShowMoreLess = ({icon, text, toggle, show}) => {
  return (
    <div className={styles.container} onClick={() => toggle(!show)}>
        {icon}
        <span>{text}</span>
    </div>
  )
}

export default ShowMoreLess