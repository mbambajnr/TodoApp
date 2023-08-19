import React, {useContext, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {TodoContext} from "../Context/TodoContext";
import {IconButton, Tab, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";

function TodoTable() {
    const context = useContext(TodoContext)
    const [addTodo,setAddTodo] = useState('')
    return (
        <form onSubmit={(event)=>context.createTodo({event,name: addTodo})}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Task</TableCell>
                    <TableCell align='right'>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TextField value={addTodo} onChange={(event)=>setAddTodo(event.target.value)} label='New task' fullWidth={true}></TextField>
                    </TableCell>
                    <TableCell align='right'>
                        <IconButton type='submit'><AddIcon/></IconButton>
                    </TableCell>
                </TableRow>
                {context.todos.map((todo,index) =>(
                    <TableRow  key={'todo' + index}>
                        <TableCell>{todo.name}</TableCell>
                        <TableCell align='right'>
                            <IconButton>
                                <EditIcon></EditIcon>
                            </IconButton>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </form>

    );
}

export default TodoTable;