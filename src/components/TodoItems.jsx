import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, deleteAllTodos, updateTodo } from '../store/todoSlice';
import toast, {Toaster} from 'react-hot-toast'

function TodoItems() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEditClick = (todo) => {
        setEditingId(todo.id);
        setNewText(todo.text);
    };

    const handleSaveClick = (todo) => {
            dispatch(updateTodo({
                id: todo.id,
                text: newText,
                completed: todo.completed
            }));
            setEditingId(null);
        toast.success("Task has been updated")
    };

    const handleDeleteTodo = (todo)=> {
      dispatch(deleteTodo(todo.id));
      toast.error("Task has been deleted")
    }

    const handleCancelClick = () => {
        setEditingId(null);
        
    };

   

    const handleDeleteAllClick = () => {
        dispatch(deleteAllTodos());
        toast.error("Deleted all tasks, wow such empty :/")
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <div className="flex border border-black items-center">
                            {editingId === todo.id ? (
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={(e)=> setNewText(e.target.value)}
                                    placeholder="Your Task...."
                                    className="w-11/12 h-full py-2 bg-purple-100"
                                />
                            ) : (
                                <input
                                    type="text"
                                    value={todo.text}
                                    readOnly
                                    className={`w-11/12 py-2 bg-purple-100 `}
                                />
                            )}

                            {editingId === todo.id ? (
                                <>
                                    <button
                                        onClick={() => handleSaveClick(todo)}
                                        className="h-10 border border-black bg-green-500 hover:scale-105 px-3"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={handleCancelClick}
                                        
                                        className="h-10 border border-black bg-gray-500 hover:scale-105 px-2"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleEditClick(todo)}
                                        className="h-10 border border-black bg-green-500 hover:scale-105 px-3"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={()=> handleDeleteTodo(todo)}
                                        className="h-10 border border-black bg-red-500 hover:scale-105 px-2"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            {todos.length > 2 && (
                <button
                    onClick={handleDeleteAllClick}
                    className="mt-4 w-24 rounded-full h-10 border border-black bg-rose-400 hover:bg-red-700 text-white"
                >
                    Delete All
                </button>
            )}
        </div>
    );
}

export default TodoItems;

