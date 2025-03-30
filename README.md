# Compliance Dashboard Host Application

This is the host application for the Compliance Dashboard, built using React and Module Federation. It aggregates and displays compliance-related information from various microfrontends.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/kanetu/mfe-compliance-dashboard-host.git
    cd compliance-dashboard-host
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Contains the module's code.
  - `App.tsx`: The main component that displays the task list.
  - `bootstrap.tsx`: The main entry point that renders the `App` component.
  - `index.tsx`: The entry point that dynamically imports `bootstrap.tsx`.
  - `components/`: Contains React components used by the module.
  - `types/`: Contains TypeScript type definitions.
  - `utils/`: Contains utility functions.
  - `styles/`: Contains CSS styles (including Tailwind CSS directives).
- `public/`: Contains the `index.html` file.
- `webpack.config.js`: Webpack configuration for the module.

## Dependencies

- React
- React DOM
- React Router DOM
- Webpack and Module Federation plugins
- Tailwind CSS

## Remote Modules

This host application consumes the following remote modules:

- `taskOverview`(https://github.com/kanetu/mfe-compliance-dashboard-task-overview): Displays a list of compliance tasks.
- `complianceStatus`(https://github.com/kanetu/mfe-compliance-dashboard-compliance-status): Shows the overall compliance status.
- `recentActivity`(https://github.com/kanetu/mfe-compliance-dashboard-recent-activity): Displays a log of recent compliance-related activities.

## Notes

- Ensure that the remote modules are running on their respective ports before starting the host application.
- This application uses Module Federation to dynamically load remote components.
- The `index.tsx` file dynamically imports the `bootstrap.tsx` file.
- Tailwind CSS is used for styling.
