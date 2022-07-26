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
  subscription OnCreateTodoCount($userId: String) {
    onCreateTodoCount(userId: $userId) {
      id
      userId
      totalCount
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodoCount = /* GraphQL */ `
  subscription OnUpdateTodoCount($userId: String) {
    onUpdateTodoCount(userId: $userId) {
      id
      userId
      totalCount
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodoCount = /* GraphQL */ `
  subscription OnDeleteTodoCount($userId: String) {
    onDeleteTodoCount(userId: $userId) {
      id
      userId
      totalCount
      createdAt
      updatedAt
    }
  }
`;
