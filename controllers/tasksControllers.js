const Task = require("../models/taskModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find();
  res.status(200).json({
    status: "success",
    amount: tasks.length,
    tasks,
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    return next(new AppError("Task Not Found", 404));
  }

  res.status(200).json({
    status: "success",
    task,
  });
});

exports.createTask = catchAsync(async (req, res, next) => {
  const task = await Task.create({
    name: req.body.name,
    completed: req.body.completed,
  });
  res.status(201).json({
    status: "success",
    data: { task },
  });
});

exports.updateTask = catchAsync(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(new AppError("Task Not Found", 404));
  }
  res.status(200).json({
    status: "success",
    task,
  });
});

exports.deleteTask = catchAsync(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
