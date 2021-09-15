import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")
  const [locationSearch, setLocationSearch] = useState("")

  return (
    <div className="app">
      <Header 
        setSearch={setSearch} 
        setLocationSearch={setLocationSearch} 
      />
      <ListingsContainer 
        search={search} 
        locationSearch={locationSearch} 
      />
    </div>
  );
}

export default App;
