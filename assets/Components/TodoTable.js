import React, {Fragment, useContext, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import {TodoContext} from "../Context/TodoContext";
import {
    IconButton,
    InputAdornment,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import DeleteDialog from "./DeleteDialog";

function TodoTable() {
    const context = useContext(TodoContext)
    const [addTodo,setAddTodo] = useState('')
    const [editIsShown,setEditIsShown] = useState(false)
    const [editTodo,setEditTodo] = useState('')
    const [deleteConfirmationIsShown,setDeleteConfirmationEditIsShown] = useState(false)
    const [todoToBeDeleted,setToDoToBeDeleted] = useState(null)
    return (
        <Fragment>
        <form onSubmit={(event)=>context.createTodo(event,{name: addTodo})}>
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
                        <TextField value={addTodo} onChange={(event)=>{setAddTodo(event.target.value)}} label='New task' fullWidth={true}></TextField>
                    </TableCell>
                    <TableCell align='right'>
                        <IconButton type='submit'><AddIcon/></IconButton>
                    </TableCell>
                </TableRow>
                {context.todos.slice().reverse().map((todo,index) =>(
                    <TableRow  key={'todo ' + index}>
                        <TableCell>

                            {editIsShown === todo.id ?
                                <TextField
                                    fullWidth={true}
                                    value={editTodo}
                                    onChange={(event)=>
                                         {setEditTodo(event.target.value);
                                }}
                                    InputProps={{
                                        endAdornment:<Fragment>
                                            <IconButton onClick={()=>
                                            {setEditIsShown(false)}}><CloseIcon/></IconButton>
                                            <IconButton onClick={()=>{context.updateTodo({id:todo.id,name:editTodo});
                                                setEditIsShown(false)
                                            }}><DoneIcon/></IconButton>
                                        </Fragment>,
                                    }}

                                />
                                          :
                                 todo.name
                            }


                        </TableCell>
                        <TableCell align='right'>
                            <IconButton onClick={()=>{setEditIsShown(todo.id);setEditTodo(todo.name)}}>
                                <EditIcon></EditIcon>
                            </IconButton>
                            <IconButton onClick={()=> {setDeleteConfirmationEditIsShown(true);setToDoToBeDeleted(todo)}}>
                                <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </form>
            {deleteConfirmationIsShown && (
                <DeleteDialog todo={todoToBeDeleted}
                              open={deleteConfirmationIsShown}
                              setDeleteConfirmationIsShown={setDeleteConfirmationEditIsShown}/>
            )}

        </Fragment>

    );
}

export default TodoTable;