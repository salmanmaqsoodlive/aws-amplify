/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTodoCount = /* GraphQL */ `
  mutation CreateTodoCount(
    $input: CreateTodoCountInput!
    $condition: ModelTodoCountConditionInput
  ) {
    createTodoCount(input: $input, condition: $condition) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodoCount = /* GraphQL */ `
  mutation UpdateTodoCount(
    $input: UpdateTodoCountInput!
    $condition: ModelTodoCountConditionInput
  ) {
    updateTodoCount(input: $input, condition: $condition) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodoCount = /* GraphQL */ `
  mutation DeleteTodoCount(
    $input: DeleteTodoCountInput!
    $condition: ModelTodoCountConditionInput
  ) {
    deleteTodoCount(input: $input, condition: $condition) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
