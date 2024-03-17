import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<any[]>([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo : any) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };  
  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo :any) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: number) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);


  return (
    <div>
      <h3>Working with Arrays</h3>
      <input className="form-control w-50" type="number" value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
      <input className="form-control w-50" type="text" value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
      <textarea value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({...todo, due: e.target.value })} />
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({  ...todo, completed: e.target.checked })} />
        Completed
      </label> <br/>
      <button className="btn btn-warning" onClick={postTodo}> Post Todo </button> <br/>
      <button onClick={updateTodo}>
        Update Todo
      </button>
      <button className="btn btn-primary" onClick={createTodo} >
        Create Todo
      </button> <br/>
      <button className="btn btn-success" onClick={updateTitle} >
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            <input className="form-check" checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button className="btn btn-warning float-end ms-2" onClick={() => fetchTodoById(todo.id)} >
              Edit
            </button>
            <button className="btn btn-danger float-end ms-2" onClick={() => deleteTodo(todo)} >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h4>Updating an Item in an Array</h4>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>
      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input className="form-control w-25" value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
      <a className="btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a className="btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <h3>On Your Own (Completed and Description)</h3>
      <input className="form-control w-50" type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/>
      <input className="form-check-input" type="checkbox" id="todo-check"
        onChange={(e) => setTodo({
          ...todo, completed: !todo.completed })}/>
      <label htmlFor="todo-check">Completed?</label> <br/>
      <a className="btn btn-success" href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Complete Todo ID = {todo.id}
      </a>
      <input className="form-control w-50" type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/>
      <input className="form-control" type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}/>
      <a className="btn btn-success" href={`${API}/${todo.id}/description/${todo.description}`} >
        Describe Todo ID = {todo.id}
      </a>
    </div>
  );
}
export default WorkingWithArrays;
