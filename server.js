const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/', (req, res) => {
  res.render("index", { title: "Welcome!" })
});