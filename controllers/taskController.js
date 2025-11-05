import Task from "../model/taskModel.js";


/**
 * Get all tasks
 */
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Create a new task
 */
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description });
    res.status(201).json({ message: '✅ Task created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Delete a task by ID
 */
export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // get the task ID from the URL (example: /tasks/:id)

    // Attempt to delete the task where the ID matches
    const deleted = await Task.destroy({ where: { id } });

    if (deleted) {
      // If deleted = 1 (means success)
      res.status(200).json({ message: `🗑️ Task with ID ${id} deleted successfully` });
    } else {
      // If deleted = 0 (no record found)
      res.status(404).json({ message: `⚠️ Task with ID ${id} not found` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
