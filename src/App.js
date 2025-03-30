import React, { lazy, Suspense } from "react";

const TaskOverview = lazy(() => import("taskOverview/TaskOverview"));
const ComplianceStatus = lazy(() =>
  import("complianceStatus/ComplianceStatus")
);
const RecentActivity = lazy(() => import("recentActivity/RecentActivity"));

function App() {
  return (
    <div>
      <h1>Compliance Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TaskOverview />
        <ComplianceStatus />
        <RecentActivity />
      </Suspense>
    </div>
  );
}

export default App;
