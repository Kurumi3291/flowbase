# Flowbase Admin Dashboard (Frontend Demo)

This project is a **frontend-focused reconstruction of a multi-tenant B2B SaaS application**, created to demonstrate the UI architecture and design decisions I worked on during my internship at an early-stage HRMS and task management product.

It recreates core frontend concerns such as **role-based UI, workspace (organization) switching, routing control, and global layout structure**, using **mock data only** and without any proprietary code.

Authentication is intentionally mocked in order to focus on **frontend architecture, state management, and routing logic**, rather than on implementing a full auth system.

🇯🇵 日本語版はこちら → README_JA.md

---

## Overview

Flowbase is a mock B2B SaaS admin dashboard designed to demonstrate how a real-world product handles:

- User roles (Admin / Member)
- Multiple organizations (multi-tenant)
- Workspace selection after login
- Role-based navigation and access control

The goal of this project is **not** to build a complete product, but to clearly communicate **frontend design decisions and application structure**.

---

## Key Features

### 🔐 Mock Authentication (Admin / Member)

- Login is simulated using predefined mock users.
- Two roles are supported:

  - **Admin**: full access, multiple organizations
  - **Member**: limited access, single organization

- No real authentication or persistence is implemented by design.

---

### 🏢 Multi-Tenant Workspace (Org Picker)

- Users can belong to one or multiple organizations.
- If a user belongs to multiple orgs, they are prompted to select a workspace after login.
- The selected organization becomes the global context for the app.

**Flow:**

```
Login → Org Picker (if multiple orgs) → Dashboard
```

---

### 🧭 Role-Based Sidebar Navigation

- Sidebar content changes depending on the user role.
- Admin-only sections (e.g. Users, Billing) are hidden from non-admin users.
- Navigation is driven by application state, not hardcoded assumptions.

---

### 📊 Role-Specific Dashboard Content (Admin / Member)

The dashboard content is intentionally **separated by user role**.

While the overall layout and grid structure are shared for consistency,
the information shown on the dashboard differs to reflect
**organization-level responsibilities for admins** and
**individual-level tasks for members**.

#### **Admin Dashboard**

- Org Health Summary
- Pending Approvals
- Onboarding & Compliance
- Subscription & Billing
- Recent Activity (organization-wide)
- Quick Admin Actions

#### **Member Dashboard**

- My Tasks
- My Onboarding Status
- Recent Activity (personal)
- My Profile
- Documents & Requests
- Help & Resources

This separation ensures that each role sees information aligned with
their responsibilities, and that role differences are expressed
not only through navigation, but also through **dashboard structure and content**.

---

### 🚫 Route-Level Access Control

- Admin routes (e.g. `/admin/users`) are protected at the page level.
- Even if a non-admin user manually navigates to an admin URL,
  they are redirected to a **Not Authorized** page.
- This ensures that access control is enforced beyond UI visibility.

---

### 🧩 Global Layout & Context Awareness

- Header displays the currently selected organization.
- The app clearly indicates **which workspace the user is operating in**.
- Layout components respond to global state changes.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **UI**: React, Tailwind CSS
- **State Management**: Zustand
- **Routing**: Next.js built-in routing
- **Data**: Mock data only (no backend)

---

## Routing & Flow Summary

```
/               → Entry point (redirects based on state)
/login          → Mock login (Admin / Member)
/org-picker     → Workspace selection (multi-org users)
/dashboard      → Main dashboard
/admin/*        → Admin-only routes
/not-authorized → Access denied page
```

---

## Design Decisions

### Why mock authentication?

This project focuses on **frontend architecture**, not authentication flows.

Mock users allow:

- Faster iteration
- Clear demonstration of role-based behavior
- Easier explanation of routing and access control

---

### Why page-level route guards?

Access control is enforced directly in page components to ensure:

- Security is not dependent on UI visibility alone
- Direct URL access is properly handled
- The logic is explicit and easy to reason about

---

## UI / UX Design Approach

The dashboard UI is designed around **role-based information priority**.

Admin and Member dashboards share the same structural rules,
while differing in content, hierarchy, and available actions
based on user responsibilities.

Cards are treated as presentational components only,
while dashboard pages handle data composition
and role-aware layout decisions.

---

## Future Improvements

- Persist session state (cookies or storage)
- Connect active navigation state to router
- Add real authentication
- Expand admin pages with real data

---

## Notes

This project is designed as a **portfolio piece** to demonstrate:

- Clear separation of concerns
- Practical SaaS UI patterns
- Thoughtful frontend architecture

It intentionally avoids unnecessary complexity to keep the focus on structure and decision-making.
