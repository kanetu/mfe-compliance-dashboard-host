import React, { lazy, Suspense } from "react";
import "./styles/index.css";

const TaskOverview = lazy(() => import("taskOverview/TaskOverview"));
const ComplianceStatus = lazy(
  () => import("complianceStatus/ComplianceStatus")
);
const RecentActivity = lazy(() => import("recentActivity/RecentActivity"));

const App = () => {
  return (
    <div className="mx-auto container p-8">
      <h1 className="text-2xl font-bold mb-4">Compliance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Suspense fallback={<div>Loading Task Overview...</div>}>
            <div className="bg-white rounded shadow p-4 mb-4">
              <TaskOverview />
            </div>
          </Suspense>
          <Suspense fallback={<div>Loading Recent Activity...</div>}>
            <div className="bg-white rounded shadow p-4">
              <RecentActivity />
            </div>
          </Suspense>
        </div>
        <div className="md:col-span-1">
          <Suspense fallback={<div>Loading Compliance Status...</div>}>
            <div className="bg-white rounded shadow p-4">
              <ComplianceStatus />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
