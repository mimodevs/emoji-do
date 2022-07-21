import { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTaskForm = (props) => {

    const [inputValue, setInputValue] = useState('');
     
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setTasks([...props.tasks, {title:inputValue, id:uuid()}])
        setInputValue('') 
    }

    return (

        <form onSubmit={handleSubmit}>
                <label>
                    title
                <input 
                    type="text"
                    value={inputValue} 
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder='your task'
                    required
                    />
                </label>
                <input type='text' required placeholder='emoji'/>
                <button type='submit'> add </button>
        </form>
    )
}


export default NewTaskForm;