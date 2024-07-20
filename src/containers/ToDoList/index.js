import {Component} from "react";
import Index from "../../components/ToDoItem";
import NewToDoForm from "../../components/NewToDoForm";

class ToDoList extends Component {
    static defaultProps = {
        tasks: [
            {text: 'Record a ReactJs video', done: false},
            {text: 'Go to a walk', done: true}
        ],
        title:'My stuff'
    }

    state = {
        tasks: this.props.tasks,
        draft: ''
    }

    updateDraft = event => {
        this.setState({draft: event.target.value})
    }

    addTodo = () => {
        const {tasks, draft} = this.state
        const list = tasks
        list.push({text: draft})
        this.setState({tasks: list, draft: ''})
    }

    render() {
        const {title} = this.props
        const {tasks, draft} = this.state
        return (
            <div>
                <h1>{title}</h1>
                {tasks.map(task => <Index task={task} done={task.done}/>)}
                <NewToDoForm
                    onSubmit={this.addTodo}
                    onChange={this.updateDraft}
                    draft={draft}
                />
            </div>
        )
    }
}

export default ToDoList