export const addTodo = (data) => ({
  type: "todoList/addTask",
  payload: data,
});
export const searchFilterChange = (text) => ({
  type: "filters/searchFilterChange",
  payload: text,
});
export const statusFilterChange = (status) => ({
  type: "filters/statusFilterChange",
  payload: status
})
export const priorityFilterChange = (priorities) => ({
  type: "filters/priorityFilterChange",
  payload: priorities
})
export const toggleTodoStatus = (todoId) => ({
  type: "todoList/toggleTodoStatus",
  payload:todoId
})