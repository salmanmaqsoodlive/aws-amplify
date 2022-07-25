/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String) {
    onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String) {
    onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String) {
    onDeleteTodo(owner: $owner) {
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
export const onCreateTodoCount = /* GraphQL */ `
  subscription OnCreateTodoCount($owner: String) {
    onCreateTodoCount(owner: $owner) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodoCount = /* GraphQL */ `
  subscription OnUpdateTodoCount($owner: String) {
    onUpdateTodoCount(owner: $owner) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodoCount = /* GraphQL */ `
  subscription OnDeleteTodoCount($owner: String) {
    onDeleteTodoCount(owner: $owner) {
      userId
      totalCount
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
