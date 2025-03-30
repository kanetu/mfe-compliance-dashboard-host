import React, { lazy, Suspense } from "react";
import "./styles/index.css";

const TaskOverview = lazy(() => import("taskOverview/TaskOverview"));
const ComplianceStatus = lazy(
  () => import("complianceStatus/ComplianceStatus")
);
const RecentActivity = lazy(() => import("recentActivity/RecentActivity"));

const App = () => {
  return (
    <div>
      <h1 className="text-[12px]">Compliance Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TaskOverview />
        <ComplianceStatus />
        <RecentActivity />
      </Suspense>
    </div>
  );
};

export default App;
