import { Game } from "./components/Game";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
