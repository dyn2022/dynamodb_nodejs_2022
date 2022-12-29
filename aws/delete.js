const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DeleteCommand } = require("@aws-sdk/lib-dynamodb");
const credentials = require("../aws-config.json");
const ddbClient = new DynamoDBClient(credentials);

const deleteData = async function (deleteData) {
  try {
    await ddbClient.send(
      new DeleteCommand({
        TableName: "SinhVien",
        Key: {
          MaSV: deleteData.MaSV,
        },
      })
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  deleteData,
};
