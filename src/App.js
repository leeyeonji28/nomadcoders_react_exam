import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => { // 익명함수
    console.log("CALL THE API..."); //단 한번만 실행하고 싶은 코드
  }, []);
  useEffect(() => {
    if(keyword != "" && keyword.length > 5){ // keyword가 빈 값이 아니라면 실행
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //keyword가 변화할 때 코드를 실행할 것임!! counter가 변화할 땐 실행 안됨
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
