import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            state.push({id: Date.now(), text: action.payload, completed: false})
        },
        toggleTodo: (state, action)=>{
            const todo = state.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed
        },
        deleteTodo : (state, action) =>{
            toast.error("deleted successfully!")
          return  state.filter(t => t.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer;