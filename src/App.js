import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
import Hookscounter from "./components/Hookscounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />

        <h1>----------------------</h1>
        <Hookscounter />
      </div>
    </Provider>
  );
}

export default App;
