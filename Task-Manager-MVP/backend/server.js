// Backend: Task Manager API
// Install dependencies: npm install express mongoose cors dotenv
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Task Schema
const taskSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
  dueDate: { type: Date },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'low' } // Priority field
});


const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { text, completed, dueDate, priority } = req.body;
  const newTask = new Task({ text, completed, dueDate, priority });
  await newTask.save();
  res.status(201).json(newTask);
});


app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));