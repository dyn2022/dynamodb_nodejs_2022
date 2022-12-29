const express = require("express");
const { listData } = require("./aws/list");
const { addNewData } = require("./aws/new");
const { updateData } = require("./aws/update");
const { deleteData } = require("./aws/delete");
const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/danh-sach-sinh-vien", async (req, res) => {
  const svList = await listData();
  res.json(svList);
});

app.post("/them-sinh-vien", async (req, res) => {
  await addNewData(req.body);
  res.json({ message: "success" });
});

app.post("/update-sinh-vien", async (req, res) => {
  await updateData(req.body);
  res.json({ message: "success" });
});

app.post("/delete-sinh-vien", async (req, res) => {
  await deleteData(req.body);
  res.json({ message: "success" });
});

app.listen(1111, (request, respond) => {
  console.log(`started!`);
});
