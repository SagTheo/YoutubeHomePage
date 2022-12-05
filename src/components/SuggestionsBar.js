import React from 'react'
import { suggestions } from '../links/suggestions'
import styles from '../css/SuggestionsBar.module.css'

const SuggestionsBar = () => {
  return (
    <div className={styles.linksContainer}>
      eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        {/* {
            suggestions.map(suggestion => {
                return (
                    <a href={suggestion.link} 
                    target='_blank' 
                    rel='noreferrer'
                    className={styles.link}
                    >{suggestion.title}</a>    
                ) 
            })
        } */}
    </div>
  )
}

export default SuggestionsBar