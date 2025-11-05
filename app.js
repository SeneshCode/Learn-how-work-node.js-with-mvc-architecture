import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import database from './config/database.js';

// Load environment variables
dotenv.config();

// Initialize app (use express.js)
const app = express();

// ✅ Middleware (must be before routes)
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Routes
app.use('/api', taskRoutes); 

// ✅ Sync DB (ensure tables exist)
try {
  await database.sync({ alter: true });
  console.log('✅ Database connected and synced successfully');
} catch (error) {
  console.error('❌ Database sync failed:', error);
}

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
