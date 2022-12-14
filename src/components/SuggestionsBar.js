import React, { useState } from 'react'
import { suggestions } from '../links/suggestions'
import styles from '../css/SuggestionsBar.module.css'

const SuggestionsBar = () => {
  const [displayArrow, setDisplayArrow] = useState(false)

  const showArrow = () => {
    setDisplayArrow(true)
  }

  const hideArrow = () => {
    if (displayArrow) {
      setDisplayArrow(false)      
    }
  }

  const scroll = (e) => {
    e.target.parentNode.parentNode.parentNode.scrollBy(-100, 0)
  }

  return (
    <div className={styles.container} onScroll={showArrow} onMouseLeave={hideArrow}>
      <div className={styles.linksContainer}>
        <div className={`${styles.arrow} ${displayArrow ? styles.arrowShown : null}`}>
          <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="white" 
                className="bi bi-caret-left" 
                viewBox="0 0 16 16"
                onClick={scroll}
          >
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
      </div>
    </div>
  )
}

export default SuggestionsBar