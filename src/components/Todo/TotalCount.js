import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTodoCounts } from "../../graphql/queries";

const TotalCount = (props) => {
  useEffect(() => {
    fetchTodoCount();
  }, []);

  async function fetchTodoCount() {
    try {
      const result = await API.graphql({
        query: listTodoCounts,

        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      //   API.graphql(graphqlOperation(listTodoCounts));
      console.log(result);
    } catch (err) {
      console.log("error fetching todos", err);
    }
  }

  return <></>;
};

export default TotalCount;
