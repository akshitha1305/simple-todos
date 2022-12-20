// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteItem} = props
  const {id, title} = todoItem
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="todo-item">
      <p className="title-name">{title}</p>

      <div>
        <button onClick={onDelete} className="button" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
