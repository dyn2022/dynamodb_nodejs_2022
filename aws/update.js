const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { UpdateCommand } = require("@aws-sdk/lib-dynamodb");
const credentials = require("../aws-config.json");
const ddbClient = new DynamoDBClient(credentials);

const updateData = async function (updatedObj) {
  try {
    await ddbClient.send(
      new UpdateCommand({
        TableName: "SinhVien",
        Key: {
          MaSV: updatedObj.MaSV,
        },
        ExpressionAttributeNames: {
          "#hoten": "HoTen",
          "#diachi": "DiaChi",
        },
        ExpressionAttributeValues: {
          ":hoten": updatedObj.HoTen,
          ":diachi": updatedObj.DiaChi,
        },
        UpdateExpression: "set #hoten = :hoten, #diachi = :diachi",
      })
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  updateData,
};
