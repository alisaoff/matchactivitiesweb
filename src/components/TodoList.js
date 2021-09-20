import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import './Todo.css';

function TodoList() {

    const [todos, setTodos] = useState([]);
    
    const addTodo = todo =>{
      if(!todo.text || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(todo.text)) {
            return alert("Digite um e-mail válido!");
      } 

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(newValue.text)) {
            return alert("Digite um e-mail válido!");
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item )));
    };

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };

    
    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id ){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };


    return (
        <div>
            <h1>Agendas de Treinos</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo= {completeTodo} removeTodo = {removeTodo} updateTodo= {updateTodo}/>
        </div>
    )
}

export default TodoList
