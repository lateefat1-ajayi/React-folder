import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import cartReducer from "./cartSlice"


export const store = configureStore(
    {
    reducer:{
        todos: todoReducer,
        cart: cartReducer

    }
}
)