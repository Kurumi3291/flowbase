# Flowbase Admin Dashboard

Flowbase is a **frontend-driven reconstruction of a multi-tenant B2B SaaS admin dashboard**, created to demonstrate **UI architecture, state management, and frontend–backend separation** based on my experience during an internship at an early-stage HRMS and task management product.

The project focuses on **realistic SaaS patterns** such as role-based UI, workspace (organization) switching, routing control, and global layout structure, while avoiding proprietary logic or production credentials.

🇯🇵 日本語版はこちら → README_JA.md

---

## Live Demo

[https://flowbase-five.vercel.app](https://flowbase-five.vercel.app)

Demo login available:

- Admin dashboard
- Member dashboard

No credentials required (simulated authentication).

---

## Overview

Flowbase demonstrates how a real-world B2B SaaS product handles:

- User roles (Admin / Member)
- Multi-tenant workspaces (organizations)
- Workspace selection after login
- Role-based navigation and access control
- Clear separation between data fetching and UI components

The goal of this project is **not** to build a production-ready service, but to clearly communicate **design decisions, architecture, and data flow** in a realistic SaaS context.

---

## Key Features

### 🔐 Simulated Authentication & Session State

- Authentication is simulated to focus on **application architecture rather than auth implementation**.
- Session state (user, role, selected organization) is managed via a client-side store.
- Login behavior differs by role and organization count.

---

### 🏢 Multi-Tenant Workspace (Org Picker)

- Users may belong to one or multiple organizations.
- Users with multiple organizations are prompted to select a workspace after login.
- The selected organization becomes global application context.

**Flow:**

```
Login → Org Picker (if multiple orgs) → Dashboard
```

---

### 🧭 Role-Based Navigation & Access Control

- Sidebar navigation dynamically changes based on user role.
- Admin-only routes are protected at the page level.
- Unauthorized access via direct URL navigation is explicitly handled.

---

### 📊 Role-Specific Dashboards

Dashboard content is intentionally **separated by role**.

While the overall layout and grid structure are shared for consistency,
the displayed information differs to reflect user responsibilities.

#### **Admin Dashboard**

- Organization health metrics
- Pending approvals
- Onboarding & compliance status
- Subscription & billing overview
- Organization-wide recent activity
- Quick administrative actions

#### **Member Dashboard**

- Personal task list
- Onboarding progress
- Recent personal activity
- Profile summary
- Documents & requests
- Help & resources

---

### 🔁 Frontend–Backend Data Flow

- Dashboard data is fetched from **Next.js API Routes**.
- Container components handle data fetching and transformation.
- UI components are purely presentational and receive typed props.

This structure reflects how frontend-only prototypes are gradually replaced by API-driven architecture in real products.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI**: React, Tailwind CSS
- **State Management**: Zustand
- **Routing**: Next.js built-in routing
- **Backend (Demo)**: Next.js API Routes

---

## Routing & Flow Summary

```
/               → Entry point (redirects based on session)
/login          → Simulated login
/org-picker     → Workspace selection (multi-org users)
/dashboard      → Role-specific dashboard
/admin/*        → Admin-only routes
/not-authorized → Access denied page
```

---

## Design Principles

- Clear separation of concerns
- Explicit role-based behavior
- Container vs presentational component boundaries
- Architecture that mirrors real SaaS products without unnecessary complexity

---

## Future Improvements

- Persistent sessions (cookies or storage)
- Real authentication integration
- Expanded admin features
- API schema validation

---

## Notes

This project is intended as a **portfolio piece** demonstrating:

- Thoughtful frontend architecture
- Practical SaaS UI patterns
- Gradual transition from prototype to API-driven design
- Clean and intentional component structure
