import React ,{ useState , useRef , useEffect} from "react";
import TodoList from './TodoList';
//import uuidv4 from 'uuid/dist/v4';

function App() {
  const LOCAL_STORAGE_KEY = 'todoApp.todos'
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(()=> {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function hendelAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodo => {
      return [...prevTodo , {id: 2/*uuidv4()*/, name: name , complete: false}]
    })
    todoNameRef.current.value = null
    
  }
  return (
    <>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={hendelAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )

}

export default App;
