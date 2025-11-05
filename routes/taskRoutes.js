import express from 'express';
import { createTask, deleteTask, getTasks } from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/task/create', createTask);
router.delete('/task/:id', deleteTask);

export default router;
