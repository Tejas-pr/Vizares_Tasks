const express = require("express");
const routes = express.Router();

let array = [];
let idCount = 1;

routes.post("/add-task", (req, res) => {
  try {
    const body = req.body;
    const { name, age } = body;
    if(!name || !age) {
        res.status(404).send("Name and age is required");
    }
    const newTask = { id: idCount++, name, age };
    array.push(newTask);
    res.status(200).send(body);
  } catch (e) {
    res.status(505).send("Error try again");
  }
});

routes.get("/all-task", (req, res) => {
  try {
    res.status(200).send(array);
  } catch (e) {
    res.status(505).send("Error try again");
  }
});

routes.post("/update", (req, res) => {
  try {
    array.map((item) => {
      if (item.id === req.body.id) {
        item.name = req.body.name;
        item.age = req.body.age;
      }
    });
    res.status(200).send(array.filter((item) => item.id === req.body.id));
  } catch (e) {
    res.status(505).send("Error try again");
  }
});

routes.delete("/delete-task", (req, res) => {
  try {
    array.map((item) => {
      if (item.id === req.body.id) {
        array.pop(item.id);
      }
    });
    res.status(200).send("Deleted successfully"); 
  } catch (e) {
    res.status(505).send("Error try again");
  }
});

module.exports = routes;
