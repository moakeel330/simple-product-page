# Product Page Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing and displaying products. This project uses Vite for a fast frontend development experience and Chakra UI for styling.

## Features

- **Product Management**: Create, read, update, and delete products.
- **Responsive Design**: Built with Chakra UI to ensure a great experience on all devices.
- **State Management**: Uses Zustand for efficient global state management.
- **Animations**: Smooth transitions and animations using Framer Motion.
- **Production Ready**: Includes scripts to build and serve the application for production.

## Tech Stack

### Frontend

- **React**: UI library.
- **Vite**: Build tool and development server.
- **Chakra UI**: Component library for styling.
- **Framer Motion**: Animation library.
- **Zustand**: State management.
- **React Router DOM**: Routing.

### Backend

- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **Mongoose**: MongoDB object modeling.
- **Dotenv**: Environment variable management.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection string)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ProductPage
   ```

2. Install dependencies for both backend and frontend:

   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Create a `.env` file in the `backend` directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=development
   ```

### Running the Application

**Development Mode:**

To run the frontend and backend separately for development:

1. Start the backend:

   ```bash
   npm run dev # If you have a dev script, otherwise: npx nodemon backend/server.js
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

**Production Mode:**

To build and start the application in production mode:

```bash
npm run build
npm start
```

## Project Structure

```
ProductPage/
├── backend/            # Backend source code
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
├── frontend/           # Frontend source code
│   ├── src/            # React components and logic
│   ├── public/         # Static assets
│   └── vite.config.js  # Vite configuration
└── package.json        # Root configuration and scripts
```

## License

This project is licensed under the ISC License.
