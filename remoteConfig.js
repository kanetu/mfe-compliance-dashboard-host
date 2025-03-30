const remotes = {
  taskOverview: {
    url: `http://localhost:${
      process.env.REACT_APP_TASK_OVERVIEW_PORT || 3001
    }/remoteEntry.js`,
    scope: "taskOverview",
  },
  complianceStatus: {
    url: `http://localhost:${
      process.env.REACT_APP_COMPLIANCE_STATUS_PORT || 3002
    }/remoteEntry.js`,
    scope: "complianceStatus",
  },
  recentActivity: {
    url: `http://localhost:${
      process.env.REACT_APP_RECENT_ACTIVITY_PORT || 3003
    }/remoteEntry.js`,
    scope: "recentActivity",
  },
};

module.exports = { remotes };
