import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import SideBarSmall from "./components/SideBarSmall";
import SuggestionsBar from "./components/SuggestionsBar";
import TopBar from "./components/TopBar";
import styles from './css/App.module.css'


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
      </div>
    </>
  );
}

export default App;
