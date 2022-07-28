import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import userEvent from "@testing-library/user-event";

function Hello(){
  function byFn(){
    console.log("bye :(");
  }
  function hiFn(){
    console.log("created :)");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] =useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
