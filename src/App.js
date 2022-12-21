import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import SideBarSmall from "./components/SideBarSmall";
import SuggestionsBar from "./components/SuggestionsBar";
import TopBar from "./components/TopBar";
import YoutubeCard from "./components/YoutubeCard";
import styles from './css/App.module.css'
import { youtubeCards } from './youtubeCards/youtubeCards.js'


function App() {
  const [displaySideBar, setDisplaySideBar] = useState(true)

  return (
    <>
      <TopBar />
      <SearchBar toggleSideBar={setDisplaySideBar} displaySideBar={displaySideBar} />
      <div className={styles.mainContent}>
        {
          displaySideBar ? <SideBar /> : <SideBarSmall />
        }
        <SuggestionsBar />  
        {
          youtubeCards.map(card => {
            return (
              <YoutubeCard  thumbnailPic={card.thumbnailPic} 
                      thumbnailAlt={card.thumbnailAlt} 
                      videoDuration={card.videoDuration}
                      profilePic={card.profilePic} 
                      profileAlt={card.profileAlt} 
                      title={card.title}
                      youtuber={card.youtuber}
                      videoStats={card.videoStats}
              />
            )
          })
        }
      </div>
    </>
  );
}

export default App;
