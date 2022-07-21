import './App.css';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 기초알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어보기', checked: false },
  ]);
  // onInsert함수 추가 useCallBack으로 감쌀것! (props로 전달해야 할 함수이기때문에-성능)
  // 고유값으로 사용될 id 를 추가하기위해
  // ref사용하여 변수 담기 (useState를 사용하지 않는것은 리랜더링을 방지하기위함)
  const addId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: addId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      addId.current += 1; //addId 에 1씩 더하기
    },
    [todos],
  );
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} />
      </TodoTemplate>
    </div>
  );
}

export default App;
