import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]
// Write your code here
class SimpleTodos extends Component {
  state = {updatedList: initialTodosList}

  deleteItem = id => {
    const {updatedList} = this.state
    const filteredList = updatedList.filter(each => each.id !== id)

    this.setState({
      updatedList: filteredList,
    })
  }

  render() {
    const {updatedList} = this.state
    return (
      <div className="bg-container">
        <div className="todo-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-items-container">
            {updatedList.map(each => (
              <TodoItem
                todoItem={each}
                key={each.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
