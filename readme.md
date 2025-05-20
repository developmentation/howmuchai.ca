# Vue/Vite + Node.js Monorepo

This is a monorepo containing a Vue/Vite frontend and a Node.js/Express backend. The frontend is located in the `public` folder and builds to `public/dist`. The backend is in the `server` folder and serves both API routes (`/api/*`) and the built frontend in production. The application can be run locally with hot-reloading for development and deployed to Render.com as a single web service.

## Project Structure

```
my-app/
├── public/                  # Vue/Vite frontend
│   ├── src/                # Vue source files
│   ├── dist/               # Vue build output
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   └── index.html          # Vue entry point
├── server/                 # Node.js backend
│   ├── src/                # Backend source files
│   ├── package.json        # Backend dependencies
│   ├── server.js           # Main Node.js server
│   └── nodemon.json        # Nodemon configuration
├── package.json            # Root package.json for monorepo scripts
├── .gitignore
└── README.md
```

## Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher
- **Git**: For version control and Render.com deployment
- A Render.com account for deployment

## Running Locally

To run the application locally with hot-reloading for both frontend and backend:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install Dependencies**:
   Install dependencies for the root, frontend, and backend:
   ```bash
   npm run install-all
   ```
   This runs `npm install` in the root, `public`, and `server` directories.

3. **Start Development Servers**:
   ```bash
   npm run dev
   ```
   This uses `concurrently` to run:
   - **Frontend**: Vite dev server at `http://localhost:5173` with hot module reload (HMR).
   - **Backend**: Node.js server at `http://localhost:3000` with `nodemon` for automatic restarts on file changes.

4. **Access the App**:
   - Open `http://localhost:5173` in your browser to view the Vue frontend.
   - API calls (e.g., `/api/whatever`) are proxied to the backend at `http://localhost:3000`.

## Building Locally

To build the application locally and test the production setup:

1. **Build the Frontend**:
   Build the Vue app to `public/dist`:
   ```bash
   npm run build
   ```
   This runs `vite build` in the `public` folder.

2. **Start the Backend**:
   Start the Node.js server to serve the built frontend and API:
   ```bash
   npm start
   ```
   This runs `node server.js` in the `server` folder.

3. **Access the App**:
   - Open `http://localhost:3000` in your browser.
   - The backend serves the built Vue app from `public/dist` and handles `/api/*` routes.

## Building and Deploying to Render.com

To deploy the application to Render.com as a single web service:

1. **Prepare the Repository**:
   - Ensure all changes are committed and pushed to a Git repository (e.g., GitHub, GitLab).
   - Verify `.gitignore` includes:
     ```
     node_modules/
     public/dist/
     ```

2. **Create a Web Service on Render.com**:
   - Log in to Render.com and click **New > Web Service**.
   - Connect your Git repository.

3. **Configure the Web Service**:
   - **Runtime**: Node
   - **Build Command**:
     ```bash
     npm run install-all && npm run build
     ```
     This installs dependencies and builds the Vue app.
   - **Start Command**:
     ```bash
     npm start
     ```
     This starts the Node.js server.
   - **Environment Variables**:
     - Add `NODE_ENV=production` to enable production mode.
   - **Root Directory**: Leave blank (root `package.json` is used).

4. **Deploy**:
   - Click **Create Web Service**.
   - Render.com runs the build command, then the start command.
   - Access the app at `https://<your-app>.onrender.com`.

5. **Verify Deployment**:
   - The Vue app loads at the root URL (`/`).
   - API routes (`/api/*`) work as expected.
   - Vue Router’s history mode is supported via backend SPA routing.

## Troubleshooting

- **Local Development**:
  - **nodemon Not Restarting**: Ensure backend file changes are in the `server` folder. Check `server/nodemon.json` for correct watch paths.
  - **API Calls Fail**: Verify the Vite proxy in `public/vite.config.js` points to `http://localhost:3000`.
- **Local Build**:
  - Ensure `public/dist` is generated after `npm run build`.
  - Check `server.js` serves `public/dist` correctly.
- **Render.com Deployment**:
  - View Render.com logs for errors.
  - Confirm `NODE_ENV=production` is set.
  - Ensure `npm run install-all` installs all dependencies.

## Notes

- **Hot-Reloading**:
  - Frontend uses Vite’s HMR for instant updates.
  - Backend uses `nodemon` for automatic server restarts.
- **API Calls**: Use relative paths (e.g., `fetch('/api/whatever')`) in the frontend. Vite proxies these in development, and the backend handles them in production.
- **Vue Router**: History mode is supported via backend SPA routing in `server.js`.
- **Customization**: Add environment variables for API secrets in `server.js` and Render.com’s dashboard.

For further assistance, contact the repository maintainer or refer to [Render.com documentation](https://render.com/docs).