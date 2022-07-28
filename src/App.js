import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => { // 익명함수
    console.log("i run only once"); //단 한번만 실행하고 싶은 코드
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); //keyword가 변화할 때 코드를 실행할 것임!! counter가 변화할 땐 실행 안됨
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]); //counter가 변화할 때 코드를 실행할 것임!!
  useEffect(() => {
    console.log("I run when 'counter & counter' changes");
  }, [keyword, counter]); //keyword, counter가 변화할 때 코드를 실행할 것임!!
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
