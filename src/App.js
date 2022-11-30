import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import SideBarSmall from "./components/SideBarSmall";
import TopBar from "./components/TopBar";


function App() {
  const [displaySideBar, setDisplaySideBar] = useState(true)

  return (
    <>
      <TopBar />
      <SearchBar toggleSideBar={setDisplaySideBar} displaySideBar={displaySideBar} />
      {
        displaySideBar ? <SideBar /> : <SideBarSmall />
      }
    </>
  );
}

export default App;
