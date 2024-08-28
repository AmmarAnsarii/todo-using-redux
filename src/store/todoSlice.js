import { createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react';

const initialState = {
    todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            };
            state.todos.push(todo);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        updateTodo: (state, action) => {
            const { id, text, completed } = action.payload;
            const todoIndex = state.todos.findIndex(todo => todo.id === id);
            if (todoIndex !== -1) {
                state.todos[todoIndex] = { ...state.todos[todoIndex], text, completed };
            }
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
        deleteAllTodos: (state, action) => {
            state.todos = [];
        }
    }
});

export const { addTodo, deleteTodo, updateTodo, deleteAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
