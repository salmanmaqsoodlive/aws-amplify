import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

const TotalCount = (props) => {
  // console.log();
  return (
    <h2>
      Total Todos:
      {props.totalCount.items && props.totalCount.items[0].totalCount}
    </h2>
  );
};

export default TotalCount;
