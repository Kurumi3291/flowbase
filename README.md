# Flowbase HRMS

Flowbase is a **Human Resource Management System (HRMS)** built with Next.js and Supabase, designed to demonstrate **full CRUD operations, API integration, and role-based UI architecture**.

This project focuses on building a **realistic internal admin tool** with a clean frontend–backend separation and database-driven data flow.

🇯🇵 日本語版はこちら → README_JA.md

---

## Live Demo

https://flowbase-five.vercel.app

Demo login:

- Admin view
- Employee view

Authentication is simulated (no credentials required).

---

## Overview

Flowbase HRMS is a simplified employee management system where:

- Admin users can manage employees (CRUD)
- Employee users can view their own profile and dashboard
- Data is stored and managed in a real database (Supabase)

This project demonstrates how a frontend application evolves from mock data to a fully integrated backend system.

---

## Key Features

### 👥 Employee Management (CRUD)

- Create new employees
- View employee list
- View employee details
- Edit employee information
- Delete employees

All operations are connected to a real database.

---

### 🧩 Supabase Integration

- Replaced mock data with Supabase
- Built API routes for:
  - GET / POST / PUT / DELETE
- Data persists across reloads

---

### 🔐 Simulated Authentication & Role Switching

- Role-based UI (Admin / Employee)
- Admin → management screens
- Employee → personal dashboard & profile
- Authentication is intentionally simplified to focus on application logic

---

### 📊 Employee Dashboard

- Displays:
  - Name
  - Department
  - Job Title
  - Status
- Data is fetched from the database via API

---

### 🏗️ Architecture

- Next.js API Routes as backend layer
- Clear separation between:
  - Data fetching (API)
  - UI components
- Type-safe data handling with TypeScript

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI**: React, Tailwind CSS
- **State Management**: Zustand
- **Backend**: Next.js API Routes
- **Database**: Supabase

---

## Routing

/login
/admin/employees
/admin/employees/[id]
/employee/dashboard
/employee/profile

---

## What This Project Demonstrates

- Full CRUD implementation
- API design and integration
- Migration from mock data to real database
- Role-based UI design
- Practical internal tool architecture

---

## Future Improvements

- Real authentication (Supabase Auth)
- Filtering and search functionality
- Pagination
- Better error handling and UI feedback

---

## Notes

This project is built as a **portfolio piece** to demonstrate:

- Practical frontend + backend integration
- Real-world admin system patterns
- Clean, maintainable architecture
