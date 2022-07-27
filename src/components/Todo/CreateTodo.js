import React, { useState } from "react";
import { createTodo } from "../../graphql/mutations";
import { API, graphqlOperation, Storage } from "aws-amplify";
import TextField from "../Ui/TextField";
import Button from "../Ui/Button";

const initialState = { name: "", description: "", image: "" };

const CreateTodo = (props) => {
  const [formState, setFormState] = useState(initialState);
  const [fileData, setFileData] = useState();

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }
  /*   function handleImage(e) {
    setFormState({ ...formState, [e.target.name]: e.target.files[0] });
    console.log(e.target.files[0]);
  } */

  const uploadFile = async () => {
    if (!fileData) return "";
    const { key } = await Storage.put(fileData.name, fileData, {
      contentType: "image/jpg",
    });

    return key;
  };
  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;

      const todo = { ...formState, image: await uploadFile() };
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
      props.fetchTodoCount();
      props.fetchTodos();
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <>
      <TextField
        onChange={(event) => setFileData(event.target.files[0])}
        type="file"
        // value={formState.name}
        name="image"
        placeholder="Choose File"
      />
      <TextField
        onChange={(event) => setInput("name", event.target.value)}
        value={formState.name}
        placeholder="Name"
      />
      <TextField
        onChange={(event) => setInput("description", event.target.value)}
        value={formState.description}
        placeholder="Description"
      />

      <Button onClick={addTodo}>Create Todo</Button>
    </>
  );
};

export default CreateTodo;
