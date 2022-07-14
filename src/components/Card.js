const Card = (props) => {

  // id, tasks, & setTasks
  const handleDelete= (id) => {
  props.setTasks(props.tasks.filter(task => task.id !== id));
  }

    return (
      <li className='card'>
        <span className='card-text'>{props.text}</span>
        <button onClick={() => handleDelete(props.id)}>
          x
        </button>
      </li> 
    )
  }

export default Card;