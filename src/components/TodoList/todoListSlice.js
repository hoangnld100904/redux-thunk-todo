// const initState = [
//   {
//     id: 1,
//     name: "Learn Code",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "Learn Redux",
//     completed: true,
//     priority: "Low",
//   },
//   {
//     id: 3,
//     name: "Learn Toolkit",
//     completed: false,
//     priority: "High",
//   },
// ];
// const TodoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTask":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };
// export default TodoListReducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  }, // [] => {status: '', todos: []}
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
    }, //Nó là action creators nên nó tự tạo, không cần phải tạo ở file action nữa
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "idle";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("https://63c7e7cce52516043f4701d0.mockapi.io/todos");
  const data = await res.json();
  console.log(data);
  return data;
});

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodos",
  async (newTodo) => {
    await axios.post(
      "https://63c7e7cce52516043f4701d0.mockapi.io/todos",
      newTodo
    );
  }
);

export default todoListSlice;
//ACtion {object} and action creators () => {return action}
//Thunk action {function} va thunk action creators ()=> {return thunk action }

export function addTodos(todo) {
  //Thunk action
  return function addTodosThunk(dispatch, getState) {
    console.log("[addTodoThunk]", getState());
    console.log({ todo });
    //Trước khi update lên reducer thì ở đây có thể custom một số thứ
    todo.name = "Adu dark qua";
    dispatch(todoListSlice.actions.addTask(todo));
    console.log("[Add todo Thunk after]", getState());
  };
}
