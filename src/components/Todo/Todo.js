import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos, listTodoCounts } from "../../graphql/queries";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import CreateTodo from "./CreateTodo";
import TotalCount from "./TotalCount";
import { onUpdateTodoCount } from "../../graphql/subscriptions";

const Todo = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
    fetchTodoCount();
    /* const subscription = API.graphql(
      graphqlOperation(onUpdateTodoCount)
    ).subscribe({
      next: (result) => {
        console.log("subs :", result);
      },
    }); */
  }, []);

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  async function fetchTodoCount() {
    console.log("running");
    try {
      const { data } = await API.graphql({
        query: listTodoCounts,

        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      //   API.graphql(graphqlOperation(listTodoCounts));
      setTotalCount(data.listTodoCounts);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  return (
    <div style={styles.container}>
      <TotalCount totalCount={totalCount} />
      <h2>Todos</h2>
      <CreateTodo fetchTodos={fetchTodos} fetchTodoCount={fetchTodoCount} />
      {todos.map((todo, index) => (
        <div key={todo.id ? todo.id : index} style={styles.todo}>
          <div style={styles.image}>
            <AmplifyS3Image imgKey={todo.image} />
          </div>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  image: { width: "50px !important", height: "50px !important" },
  todo: { marginBottom: 15 },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
};

export default Todo;
