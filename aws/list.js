const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const credentials = require("../aws-config.json");
const ddbClient = new DynamoDBClient(credentials);

const listData = async function () {
  // return [
  //   {
  //     HoTen: "Tran Thi Thuy C",
  //     MaSV: "SV0001",
  //     DiaChi: {
  //       TenDuong: "291 Dien Bien Phu, Phuong 7, Quan 3",
  //       QuocGia: "TP Ho Chi Minh",
  //       ThanhPho: "VietNam",
  //     },
  //   },
  // ];
  try {
    const data = await ddbClient.send(
      new ScanCommand({
        TableName: "SinhVien",
        ProjectionExpression: "#masv, #diachi, #hoten",
        ExpressionAttributeNames: {
          "#masv": "MaSV",
          "#diachi": "DiaChi",
          "#hoten": "HoTen",
        },
      })
    );
    return data.Items.map(unmarshall);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  listData,
};
