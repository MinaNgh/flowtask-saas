# FlowTask — SaaS Workflow Management System

FlowTask is a Trello-inspired task management application built with React. It allows users to create, manage, and track tasks across different workflow stages using a Kanban-style interface.

---

## 🚀 Live Demo
https://YOUR-VERCEL-LINK

---

## 📦 GitHub Repository
https://github.com/YOUR_USERNAME/flowtask-saas

---

## ✨ Features

- Create, update, and delete tasks
- Drag-and-drop task management (Kanban board)
- Task status tracking (To Do, In Progress, Done)
- Multi-criteria filtering (status, category, priority)
- Real-time search functionality
- Persistent storage using LocalStorage
- Responsive UI design

---

## 🧠 Tech Stack

- React.js (Hooks, Context API)
- JavaScript (ES6+)
- HTML5, CSS3 (Flexbox)
- DnD Kit (drag-and-drop)
- UUID (unique IDs)
- LocalStorage (data persistence)

---

## 🏗 Architecture

- Component-based design
- Global state management using Context API
- Custom hooks (useLocalStorage)
- Separation of concerns (components, hooks, utils)

---

## 🔄 How It Works

1. Users create tasks via input form
2. Tasks are stored in global state (Context API)
3. Tasks are grouped into columns based on status
4. Drag-and-drop updates task status dynamically
5. Filtering and search refine visible tasks
6. Data is persisted in LocalStorage

---

## ⚙️ Installation

```bash
npm install
npm start
