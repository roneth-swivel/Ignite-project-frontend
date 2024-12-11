# Ignite Project Frontend

This repository contains the frontend codebase for the Ignite Project. It is built using Next.js, a powerful React framework for building web applications. The project focuses on providing a seamless and interactive user experience.

## Technologies Used
- **Next.js**: Framework for server-rendered React applications.
- **React**: Library for building user interfaces.
- **CSS/SCSS**: For styling components.
- **Node.js**: Runtime environment.
- **npm**: Package manager for installing dependencies.

## Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16.x or later recommended)
- npm (v7.x or later)
- Git

### Clone the Repository
```bash
git clone https://github.com/roneth-swivel/ignite-project-frontend.git
cd ignite-project-frontend
```

### Install Dependencies
```bash
npm install
```

### Start the Development Server
```bash
npm run dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### `npm run dev`
Starts the development server.

### `npm run build`
Builds the application for production.

### `npm start`
Runs the production build.

### `npm run lint`
Runs ESLint to find and fix linting issues.

## Common Issues and Fixes

### **Invalid argument error with `.next` directory**
- **Issue**: Error related to `.next/static/css` folder.
- **Solution**:
  1. Delete the `.next` directory:
     ```bash
     rd /s /q .next
     ```
  2. Restart the development server:
     ```bash
     npm run dev
     ```
  3. If using OneDrive, move the project to a non-synced directory.

### **Dependencies not installed correctly**
- **Fix**:
  1. Clear `node_modules` and `package-lock.json`:
     ```bash
     rd /s /q node_modules
     del package-lock.json
     ```
  2. Reinstall dependencies:
     ```bash
     npm install
     ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Steps to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
