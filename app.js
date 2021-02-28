const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const studentList = { result: ["Rajesh", "Ramesh", "Sayali", "Sanjana"] }; // using hard coded data for response

app.get("/student/studentsList", (req, res, next) => {
  res.json(studentList);
});

// any invalid pathname will end up here
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.status(404).send("<h1>invalid url</h1>");
});

app.listen(PORT, () => {
  console.log("server up and running at " + PORT);
});
