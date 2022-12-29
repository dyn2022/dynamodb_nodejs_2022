const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const credentials = require("../aws-config.json");
const ddbClient = new DynamoDBClient(credentials);

const addNewData = async function (newData) {
  try {
    await ddbClient.send(
      new PutCommand({
        TableName: "SinhVien",
        Item: newData,
      })
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  addNewData,
};
