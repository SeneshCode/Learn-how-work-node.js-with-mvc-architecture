# 🧩 Task Manager Project (Node.js + Express + MySQL)

This project is a simple **Task Manager API** built using **Node.js**, **Express**, and **MySQL (via Sequelize)**.  
It allows you to **create, view, and delete tasks** — ideal for beginners learning how to build REST APIs with databases.

---

## 🧠 1. Required Software

| Software | Version | Purpose |
|-----------|----------|----------|
| **Node.js** | v18+ | Run the project backend |
| **MySQL** | v8+ | Database for storing task data |
| **Postman (optional)** | latest | Test API endpoints easily |

---

## ⚙️ 2. Project Setup

### Step 1 — Extract the project

If you downloaded this as a `.zip`, extract it and open the folder in VS Code or any IDE.

```bash
cd task-manager-project
```

---

### Step 2 — Install dependencies

Run the following command to install required packages:

```bash
npm install
```

---

## 📦 3. Dependencies (Used in This Project)

| Package | Purpose |
|----------|----------|
| **express** | Used to create the web server and define API routes |
| **sequelize** | ORM library to interact with the MySQL database easily |
| **mysql2** | MySQL driver required for Sequelize to connect to the database |
| **dotenv** | Loads environment variables (like DB credentials) from the `.env` file |

📝 **Note:** No unnecessary dev tools (like `nodemon`) are used in this version.

---

## 🗃️ 4. Database Configuration

This project already includes a pre-configured `.env` file with all required settings.  
Please make sure your MySQL server is running and the values inside `.env` match your local setup.

Example `.env` (already provided in project):

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=task_manager
```

If you change the database name or password, update them here accordingly.

---

## 📁 5. Folder Structure

```
task-manager-project/
│
├── config/
│   └── database.js          # Sequelize connection setup
│
├── controllers/
│   └── taskController.js    # Business logic for tasks
│
├── model/
│   └── taskModel.js         # Sequelize Task model definition
│
├── routes/
│   └── taskRoutes.js        # Express routes for API
│
├── app.js                   # Main application file
├── .env                     # Environment configuration (already included)
├── package.json             # Project metadata and dependencies
└── package-lock.json
```

---

## 🚀 6. Running the Server

Start the server using Node.js:

```bash
node app.js
```

If everything is correct, you’ll see messages like:

```
✅ Database connected and synced successfully
🚀 Server running at http://localhost:5000
```

---

## 🧭 7. API Routes

| Method | Endpoint | Description |
|---------|-----------|-------------|
| **GET** | `/api/tasks` | Fetch all tasks |
| **POST** | `/api/task/create` | Create a new task |
| **DELETE** | `/api/task/:id` | Delete a task by ID |

---

### Example: Create a Task (POST `/api/task/create`)

**Request Body (JSON):**
```json
{
  "title": "Learn Node.js",
  "description": "Understand how Express and MySQL work together"
}
```

**Response:**
```json
{
  "message": "✅ Task created successfully"
}
```

---

## 🧩 8. How It Works

### `app.js`
- Initializes the Express server  
- Loads environment variables from `.env`  
- Connects to the database using Sequelize  
- Syncs models with MySQL  
- Uses middleware to handle JSON and URL-encoded data  
- Loads routes from `taskRoutes.js`

### `config/database.js`
- Configures Sequelize connection with credentials from `.env`

### `model/taskModel.js`
- Defines a **Task** model (with `title` and `description` columns)  
- Uses `timestamps: false` to avoid Sequelize requiring `createdAt` / `updatedAt`

### `controllers/taskController.js`
- Implements three main functions:
  - `getTasks()` → Fetch all tasks  
  - `createTask()` → Add new task  
  - `deleteTask()` → Remove task by ID

### `routes/taskRoutes.js`
- Maps API routes to the above controller functions.

---

## 🛠️ 9. Error Handling

- If database credentials are incorrect, console will show:  
  `❌ Database sync failed`
- Missing `.env` or wrong environment values will stop database connection.

---

## 🎯 10. Learning Outcome

By completing this project, you’ll learn how to:
- Connect Node.js to MySQL using Sequelize  
- Build RESTful APIs  
- Handle CRUD operations (Create, Read, Delete)  
- Use environment variables securely  

---

## ❤️ Bonus Tip

When uploading this project to GitHub, **do not include your `.env` file**.  
Add it to `.gitignore` to keep your database credentials safe.

---

## 👨‍💻 Author

**Senesh Pawan**  
📧 senesh.development@gmail.com  
🌐 GitHub: [SeneshCode](https://github.com/SeneshCode)
