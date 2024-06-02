# Apollo-e-commerce-main
Apollo-e-commerce # Installation  1. Clone the repository:

Apollo-e-commerce
# Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Programmer-Manik/Apollo-e-commerce.git
   cd Apollo-e-commerce
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables to the `.env` file:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection
     ```

## Scripts

- **Start the application:**

  ```sh
  npm start
  ```

  This will compile the TypeScript code and start the application using Node.js.

- **Start the application in production mode:**

  ```sh
  npm run start:prod
  ```

  This will start the application using `nodemon` for automatic restarts on file changes.

- **Start the application in development mode:**

  ```sh
  npm run dev
  ```

  This will start the application using `ts-node-dev` for faster development experience with automatic restarts and TypeScript support.

- **Build the application:**

  ```sh
  npm run build
  ```

  This will compile the TypeScript code into JavaScript and place it in the `dist` directory.

- **Lint the application:**

  ```sh
  npm run lint
  ```

  This will run ESLint on the `src` directory to find and fix linting issues.

- **Fix linting issues:**
  ```sh
  npm run lint:fix
  ```
  This will automatically fix linting issues in the `src` directory.

## Running the Application

1. Build the application:

   ```sh
   npm run build
   ```

2. Start the application:

   ```sh
   npm start
   ```

## live link click handler

live_link:https://apollo-e-commerce.vercel.app/

https://apollo-e-commerce.vercel.app/api/products

https://apollo-e-commerce.vercel.app/api/orders
