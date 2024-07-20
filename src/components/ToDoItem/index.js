import {Component} from "react";

class Index extends Component {
    static defaultProps = {
        done: false
    }
    state = {
        done: this.props.done
    }

    toggleDone = () => {
        this.setState({done: !this.state.done})
    }

    render() {
        const {text} = this.props.task

        return(
            <div onClick={this.toggleDone} className={this.state.done ? 'doneTodo': ''}>
                <p>{text}</p>
            </div>)
    }
}

export default Index