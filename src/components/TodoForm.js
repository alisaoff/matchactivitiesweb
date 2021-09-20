import React, {useState, useEffect, useRef} from 'react'
import './Todo.css';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = e =>{
       setInput(e.target.value) 
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit ? (
                <>
                    <input 
                    type="e-mail"
                    placeholder="Alterar uma agenda"
                    value={input}
                    name="text" 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className="todo-button edit">Alterar</button>
                    </>
                )
                : 
                
                (
                    <>
                        <input 
                        type="e-mail"
                        placeholder="Digite um e-mail para criar uma nova agenda"
                        value={input}
                        name="text" 
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                        />
                        <button className="todo-button">Criar</button>
                    </>
                    )
                }
            </form>
        </div>
    )
}

export default TodoForm
