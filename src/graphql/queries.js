/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodoCount = /* GraphQL */ `
  query GetTodoCount($id: ID!) {
    getTodoCount(id: $id) {
      id
      userId
      totalCount
      createdAt
      updatedAt
    }
  }
`;
export const listTodoCounts = /* GraphQL */ `
  query ListTodoCounts(
    $filter: ModelTodoCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        totalCount
        # createdAt
        # updatedAt
      }
      nextToken
    }
  }
`;
