import React, { useState } from "react";
import Search from "./components/Search";
import Line from "./components/Line";
import data from "./data.json";

import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [search, setsearch] = useState("");

  return (
    <div className="App">
      <header>
        <Search
          onSearch={(emojiFind) => {
            setsearch(emojiFind);
          }}
        />
      </header>
      <main>
        {data
          .filter((emoji) => emoji.keywords.includes(search))
          .map((emoji) => (
            <Line symbol={emoji.symbol} title={emoji.title} />
          ))}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
