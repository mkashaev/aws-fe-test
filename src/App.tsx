import { createContext } from "react";
import ClickStore from "./store/ClickStore";

import "./App.css";
import { ClickerCom } from "./component";

export const Context = createContext<any>(null);

function App() {
  return (
    <Context.Provider value={{ click: new ClickStore() }}>
      <ClickerCom />
    </Context.Provider>
  );
}

export default App;
