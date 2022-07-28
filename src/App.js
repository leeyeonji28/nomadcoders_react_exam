import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDO] = useState(""); //input 컨트롤
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; // 아무것도 적지 않으면 함수를 실행 시키지 않음
    }

    setToDos((currentArray) => [toDo, ...currentArray]); //새로운 state와 기존의 state를 더해서 새로운 array를 만들어 리턴해줌
    setToDO(""); // input값을 비워줌
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To toDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
