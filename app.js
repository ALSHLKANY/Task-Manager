const path = require("path");
const express = require("express");
const tasksRoutes = require("./routs/tasksRoutes");
const appError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//routes

app.get("/hello", (req, res) => {
  res.send("Task maneger");
});

app.use("/api/v1/tasks", tasksRoutes);

app.use((req, res) =>
  res.status(404).send(`Can't find <i>${req.originalUrl}<i> on this server!`)
);
app.use(errorHandler);

module.exports = app;
