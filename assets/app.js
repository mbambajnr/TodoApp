import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from "./Context/TodoContext";
import TodoTable from "./Components/TodoTable";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>
                <TodoTable/>
            </TodoContextProvider>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));