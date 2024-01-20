# UE Project Explorer

**Project Overview:** This project is a web-based system administration and project management application. It provides dedicated interfaces for administrators to manage users and projects efficiently. The application is built using React, Material-UI (MUI), and Zustand for state management.

## Features

1. **Dashboard:**
    - A well-designed dashboard that presents key statistics such as the total number of projects and active users.

2. **Project Management:**

   - Add, edit, and delete projects.
   - View a list of existing projects.

3. **User Management:**

   - Add, edit, and delete users.
   - View a list of existing users.


## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Material-UI (MUI):** A React UI framework that implements Google's Material Design.
- **Zustand:** A simple and lightweight state management library for React.

## Prerequisites

- Node.js and npm installed on your machine.

## Getting Started

1. Clone the repository:

   ```bash
   https://github.com/UEspoir-PE/Admin_PE.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Admin_PE
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:5173`.

## Usage

- Access the project management interface at `/gestion-des-projets`.
- Access the user management interface at `/gestion-des-comptes`.
- Add, edit, or delete projects and users using the provided modals.
- Ensure that only authorized users, including administrators, can access these interfaces.