import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addNewTodo } from "./todoListSlice";
// import { addTodo } from "../../redux/actions/action";
import TodoListSlice from "./todoListSlice";
import { todosRemainingSelector } from "../../redux/selectors/selector";
export default function TodoList() {
  const dispatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  // const searchText = useSelector(searchTextSelector);

  //Handle add task function
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const handleAddButtonClick = function () {
    dispatch(
      addNewTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );

    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //     priority: priority,
    //   })
    // );

    setPriority("Medium");
    setTodoName("");
  };
  const handleInputChange = function (e) {
    setTodoName(e.target.value);
  };
  const handlePriorityChange = function (value) {
    setPriority(value);
  };
  //Handle add task function

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((task) => (
          <Todo
            key={task.id}
            id={task.id}
            name={task.name}
            prioriry={task.priority}
            completed={task.completed}
            task = {task}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select value={priority} onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
