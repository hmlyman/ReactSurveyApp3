var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var jsonData = require("./Data/SurveyData.json");
var app = express();
var router = express.Router();

app.set("port", process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

router.get("/", function (req, res) {
  res.json({ message: "welcome to the API" });
});
router
  .route("/survey")
  .post(function (req, res) {
    const data = jsonData;
    const newData = req.body;
    data.push(newData);
    fs.writeFile("SurveyApp/data.json", JSON.stringify(data), (error) => {
      if (error) {
        throw error;
      }
      console.log("Done");
      res.json({ message: "Success", data: newData });
    });
  })
  .get(function (req, res) {
    survey.find(function (err, surveys) {
      if (err) res.send(err);
      res.json(surveys);
    });
  });

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port"));
});
