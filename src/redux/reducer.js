import todoListSlice from "../components/TodoList/todoListSlice"
import filterSlice from "../components/Filters/filterSlice"
import { combineReducers } from "redux"
// const rootReducer = (state={}, action) => {
//     return {
//         filter:FilterReducer(state.filter, action),
//         todoList:TodoListReducer(state.todoList, action)
//     }
// }
const rootReducer = combineReducers({
    filters:filterSlice.reducer,
    todoList:todoListSlice.reducer
})
export default rootReducer