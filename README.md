# Persist-Ventures-Assignment

# Task Manager MVP

This is a **Task Manager MVP** project built using **React**, **Node.js**, and **MongoDB**. It allows users to manage their tasks, mark them as completed, and view them with a due date.

---

## Features

- **Task Creation**: Users can add tasks with a name and a due date.
- **Task Completion**: Users can mark tasks as completed, which visually strikes them through.
- **Task Deletion**: Tasks can be deleted from the list.
- **Responsive UI**: The app is responsive and works well on different screen sizes.

---

## Technologies Used

- **Frontend**:
  - React
  - Bootstrap 5
  - Custom CSS for styling
  - React Hooks for state management

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for persistent data storage)
  - Mongoose (for MongoDB interaction)

---

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/Task-Manager-MVP.git
```

### 2. Navigate to the project folder

```bash
cd Task-Manager-MVP
```

### 3. Install dependencies

Install dependencies for both the frontend and the backend.

**For the backend:**
```bash
cd backend
npm install
```

**For the frontend:**
```bash
cd frontend
npm install
```

### 4. Set up environment variables

In the `backend` folder, create a `.env` file with the following content:

```
MONGODB_URI=your-mongodb-connection-uri
PORT=5000
```

### 5. Run the project

Start the backend server:
```bash
cd backend
npm run start
```

Start the frontend development server:
```bash
cd frontend
npm start
```

---

## Folder Structure

```bash
Task Manager MVP/
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
├── package.json
└── README.md
```

---

## How It Works

- The **frontend** is a React app that allows users to add tasks, mark them as complete, and delete them.
- The **backend** is an Express server that handles CRUD operations, storing task data in MongoDB.
- The **MongoDB** database is used to persist tasks across sessions.

---

## Additional Information

- You can use any MongoDB URI, such as one from **MongoDB Atlas** or a local MongoDB instance.
- The backend runs on port `5000`, while the frontend runs on port `3000`.

---

## Future Enhancements

- **Authentication**: Add user authentication to allow individual users to manage their own tasks.
- **Task Priority**: Add priority levels to tasks and display them in different colors.
- **Task Categories**: Categorize tasks into different types (e.g., personal, work-related).
- **Reminder Notifications**: Integrate push notifications or email reminders for upcoming tasks.

---

### By Muhammad Ammaar Quadri
