const path = require('path');
const express = require('express');
const bootstrap = require('bootstrap');
const router = require('./routes');
const app = express();
const port = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");

app.use(router)

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));