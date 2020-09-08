var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");
var jsonData = require("./Data/SubmittedData.json");
// var submittedLoginData = require("./Data/EmailAndPasswordData.json");
var app = express();
var router = express.Router();
// var loginRouter = express.Router();

app.set("port", process.env.PORT || 4000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);
// app.use("/api", loginRouter);

router.get("/", function (req, res) {
  res.json({ message: "welcome to the API" });
});
// loginRouter.get("/", function (req, res) {
//   res.json({ message: "welcome to the API" });
// });

router
  .route("/survey")
  .post(function (req, res) {
    const data = jsonData;
    const newData = req.body;
    data.push(newData);
    fs.writeFile("./Data/SubmittedData.json", JSON.stringify(data), (error) => {
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

// loginRouter
//   .route("/login")
//   .post(function (req, res) {
//     const loginData = submittedLoginData;
//     const newLoginData = req.body;
//     data.push(newLoginData);
//     fs.writeFile(
//       "./Data/EmailAndPasswordData.json",
//       JSON.stringify(loginData),
//       (error) => {
//         if (error) {
//           throw error;
//         }
//         console.log("Done");
//         res.json({ message: "Success", loginData: newLoginData });
//       }
//     );
//   })
//   .get(function (req, res) {
//     login.find(function (err, login) {
//       if (err) res.send(err);
//       res.json(login);
//     });
//   });

app.listen(app.get("port"), function () {
  console.log("Server started: http://localhost:" + app.get("port"));
});
