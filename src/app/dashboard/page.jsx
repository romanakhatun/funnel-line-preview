import DashboardAnalytics from "@/Component/Dashboard/DashboardAnalytics";
import DashboardBottomCards from "@/Component/Dashboard/DashboardBottomCards";
import DashboardLeads from "@/Component/Dashboard/DashboardLeads";
import DashboardMiniStats from "@/Component/Dashboard/DashboardMiniStats";
import DashboardStats from "@/Component/Dashboard/DashboardStats";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div style={{ padding: 24 }}>
        <DashboardStats />
      </div>

      <div style={{ padding: 24 }}>
        <DashboardAnalytics />
      </div>

      <div style={{ padding: 24 }}>
        <DashboardMiniStats />
      </div>

      <div style={{ padding: 24 }}>
        <DashboardLeads />
      </div>

      <div style={{ padding: 24 }}>
        <DashboardBottomCards />
      </div>
    </div>
  );
};

export default Dashboard;
