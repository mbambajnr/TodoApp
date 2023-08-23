import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoContextProvider from "./Context/TodoContext";
import TodoTable from "./Components/TodoTable";
import {CssBaseline} from "@mui/material";

class App extends Component {
    render() {
        return (
            <TodoContextProvider>
                <CssBaseline>
                    <TodoTable/>
                </CssBaseline>

            </TodoContextProvider>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));