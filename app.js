const express = require("express");
const requestChecker = require("./Middleware")
const app = express();
const port = 5000;

//app level middleware (Global)
app.use(requestChecker);

//Serving static files: all endpoints of public folder instead of serving particuler endpoint
app.use(express.static("Public"))
//HINT: you must add the extension of files everytime you use want to refer to your file like http://localhost:7000/home.html

app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}`);
});
