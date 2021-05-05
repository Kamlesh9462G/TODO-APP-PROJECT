const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const Task = mongoose.model("Task");

router.use(bodyParser.json());


// rendering the App Page
router.get("/", (req, res) => {
  Task.find({}, function (err, task) {
      if (err) {
          console.log("Error in fetching tasks from db");
          return;
        
      }

    return res.render("home", {
      tittle: "Home",
      task: task,
    });
  })
});


// creating Tasks
router.post("/create-task", (req, res) => {
  //  console.log("Creating Task");

  Task.create(
    {
      name: req.body.name,
      status: req.body.status,
      priority: req.body.priority,
      created_at: req.body.created_at,
      date: req.body.date,
    },
    function (err, newtask) {
      if (err) {
        console.log("error in creating task", err);
        return;
      }

      //console.log(newtask);
      return res.redirect("back");
    }
  );
});


// deleting Tasks
router.get("/delete-task", (req, res) => {
  // get the id from query
  var id = req.query;

  // checking the number of tasks selected to delete
  var count = Object.keys(id).length;
  for (let i = 0; i < count; i++) {
    // finding and deleting tasks from the DB one by one using id
    Task.findByIdAndDelete(Object.keys(id)[i], function (err) {
      if (err) {
        console.log("error in deleting task");
      }
    });
  }
  return res.redirect("back");
});

module.exports = router;
