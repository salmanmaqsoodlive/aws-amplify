/* Amplify Params - DO NOT EDIT
	API_REACTTODOAMPLIFIED_GRAPHQLAPIIDOUTPUT
	API_REACTTODOAMPLIFIED_TODOCOUNTTABLE_ARN
	API_REACTTODOAMPLIFIED_TODOCOUNTTABLE_NAME
	API_REACTTODOAMPLIFIED_TODOTABLE_ARN
	API_REACTTODOAMPLIFIED_TODOTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const { v4: uuidv4 } = require("uuid");
var aws = require("aws-sdk");

var ddb = new aws.DynamoDB();

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

async function getAllCounts(userId) {
  const queryParams = {
    TableName: process.env.API_REACTTODOAMPLIFIED_TODOCOUNTTABLE_NAME,
    ReturnConsumedCapacity: "TOTAL",
  };
  try {
    const result = await ddb.scan(queryParams).promise();
    let filteredItem = result.Items.filter((obj) =>
      console.log(obj.userId.S, userId.S)
    );
    console.log(filteredItem);
  } catch (err) {
    console.log("Error", err);
  }
}

exports.handler = async (event) => {
  await getAllCounts(event.Records[0].dynamodb.NewImage.owner);

  /* await ddb.query(queryParams, function (err, data) {
    console.log("sssssss", data);
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Items);
      data.Items.forEach(function (element, index, array) {
        console.log(element.Title.S + " (" + element.Subtitle.S + ")");
      });
    }
  }); */
  console.log("\nended");
  /*   console.log(
    `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA   AAAA AAAAAA:`,
    event.Records[0].dynamodb.NewImage.owner
  );

/*   let params = {
    Key: {
      userId: event.Records[0].dynamodb.NewImage.owner,
    },

    // Item: {
    // id: { S: `${uuidv4()}` },

    // userId: event.Records[0].dynamodb.NewImage.owner,
    UpdateExpression: "set totalCount = :c",
    ExpressionAttributeValues: {
      ":c": { N: "2" },
    },
    // count: { N: "2" },
    // },
    TableName: process.env.API_REACTTODOAMPLIFIED_TODOCOUNTTABLE_NAME,
  };
 */
  // Call DynamoDB
  /* try {
    await ddb.updateItem(params).promise();
    console.log("Success");
  } catch (err) {
    console.log("Error", err);
  }
 */
  event.Records.forEach((record) => {
    // console.log(record.eventID);
    // console.log(record.eventName);
    // console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve("Successfully processed DynamoDB record");
};
