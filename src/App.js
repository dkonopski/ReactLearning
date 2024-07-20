import './App.css';
import {Component} from "react";
import ToDoList from "./containers/ToDoList";

class App extends Component {
    render() {
        return (
            <div>
                <ToDoList />
            </div>
        );
    }
}

export default App;
