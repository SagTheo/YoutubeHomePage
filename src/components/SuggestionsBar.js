import React from 'react'
import { suggestions } from '../links/suggestions'
import styles from '../css/SuggestionsBar.module.css'

const SuggestionsBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <div className={`${styles.arrow} ${styles.arrowLeft}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
          </svg>
        </div>
        {
            suggestions.map(suggestion => {
                return (
                    <a href={suggestion.link} 
                    target='_blank' 
                    rel='noreferrer'
                    className={styles.link}
                    >{suggestion.title}</a>    
                ) 
            })
        }
        <div className={`${styles.arrow} ${styles.arrowRight}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SuggestionsBar