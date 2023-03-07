// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancer = composeWithDevTools()
// const store = createStore(rootReducer, composeEnhancer)

// export default store
import todoListSlice from "../components/TodoList/todoListSlice";
import FilterSlice from "../components/Filters/filterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        todoList:todoListSlice.reducer,
        filter: FilterSlice.reducer
    }
})
export default store;