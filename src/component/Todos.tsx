import { useState } from "react";
interface Todo{
    id:number, 
    text: string, 
    completed: boolean
}

function Todos() {
    const [text, setText] = useState('Hello world Pers');
    const [todos,setTodos] = useState<Todo[]>([]);
    // const [setting, setSetting] = useState({
    //     theme:'light',
    //     lang:'eng'
    // })
    const handleClick =()=>{ 
        console.log(text);
        const newTodo = {
            id: Date.now(),
            text:text,
            completed: false
        }
        setTodos([...todos,newTodo]);
    } 
    const handledelete = (id: number) => {
        console.log('deleting todo ...' + id);
        setTodos(todos.filter(todo => todo.id != id));
    }
    const toggleComplete = (id: number) => {
        console.log('updating todo')
    }
    return (
        <div>
            <h2>Todos Mini App</h2>
            <input 
                type="text" 
                value={text}
                onChange={(event)=> setText(event.target.value)} 
            />
            <button onClick={handleClick}>Create</button>
            <div>
                {todos.map((todo) => (
                    <div key={todo.text}
                    style={{margin: '10px'}}>
                        {todo.completed ? 'Completed' :"Pending"}
                    </div>
                ))

            }
            </div>
        </div>
    )
}
export  default Todos;