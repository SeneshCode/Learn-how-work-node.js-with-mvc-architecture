import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false, 
  // 👈 disables createdAt and updatedAt columns
  // By default, Sequelize automatically looks for these columns.
  // If your database table doesn't have them, Sequelize would throw an error.
  // Setting timestamps: false prevents that.
});

export default Task;
