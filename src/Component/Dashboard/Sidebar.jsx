"use client";
import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid, Button } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  FileDoneOutlined,
  DollarOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ProjectOutlined,
  SettingOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const items = [
  {
    key: "dashboards",
    icon: <DashboardOutlined />,
    label: "Dashboards",
    children: [
      { key: "/dashboard", label: "CRM" },
      { key: "/dashboard/analytics", label: "Analytics" },
    ],
  },
  {
    key: "reports",
    icon: <BarChartOutlined />,
    label: "Reports",
    children: [
      { key: "/reports/sales", label: "Sales Report" },
      { key: "/reports/leads", label: "Leads Report" },
      { key: "/reports/projects", label: "Project Report" },
      { key: "/reports/timesheets", label: "Timesheets Report" },
    ],
  },
  {
    key: "application",
    icon: <AppstoreOutlined />,
    label: "Application",
    children: [
      { key: "/application/chat", label: "Chat" },
      { key: "/application/email", label: "Email" },
      { key: "/application/tasks", label: "Tasks" },
      { key: "/application/notes", label: "Notes" },
      { key: "/application/storages", label: "Storage" },
      { key: "/application/calender", label: "Calendar" },
    ],
  },
  {
    key: "proposal",
    icon: <FileDoneOutlined />,
    label: "Proposal",
    children: [
      { key: "/proposal", label: "Proposal" },
      { key: "/proposal/view", label: "Proposal View" },
      { key: "/proposal/edit", label: "Proposal Edit" },
      { key: "/proposal/create", label: "Proposal Create" },
    ],
  },
  {
    key: "payment",
    icon: <DollarOutlined />,
    label: "Payment",
    children: [{ key: "/payment/payment", label: "Payment" }],
  },
  { key: "customers", icon: <UsergroupAddOutlined />, label: "Customers" },
  { key: "leads", icon: <SolutionOutlined />, label: "Leads" },
  {
    key: "projects",
    icon: <ProjectOutlined />,
    label: "Projects",
    children: [
      { key: "/dashboard/projects", label: "Projects" },
      { key: "/dashboard/projects/view", label: "Projects View" },
      { key: "/dashboard/projects/create", label: "Projects Create" },
    ],
  },
  {
    key: "settings",
    icon: <SettingOutlined />,
    label: "Settings",
    children: [
      { key: "/dashboard/profile", label: "Profile" },
      { key: "/dashboard/security", label: "Security" },
    ],
  },
];

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const screens = useBreakpoint();
  const router = useRouter();
  const [hoverOpen, setHoverOpen] = useState(false);
  const isCollapsed = collapsed && !hoverOpen;

  if (!screens.lg) {
    return (
      <Drawer
        placement="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="inline"
          items={items}
          style={{ flex: 1 }}
          onClick={({ key }) => {
            if (key.startsWith("/")) {
              router.push(key);
              setMobileOpen(false);
            }
          }}
        />
      </Drawer>
    );
  }

  return (
    <Sider
      width={340}
      collapsedWidth={80}
      collapsed={isCollapsed}
      trigger={null}
      style={{
        background: "#fff",
        // borderRight: "1px solid #eee",
        // position: hoverOpen ? "absolute" : "relative",
        // zIndex: 1000,
        // minHeight: "100vh",
        padding: "20px 20px",
        position: "sticky",
        top: 0,
        height: "100vh",
        overflow: "auto",
      }}
      onMouseEnter={() => collapsed && setHoverOpen(true)}
      onMouseLeave={() => collapsed && setHoverOpen(false)}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 30,
          borderBottom: "1px solid #eee",
          paddingBottom: "30px",
        }}
      >
        {isCollapsed ? "D" : "DURALUX"}
      </div>
      <Menu
        mode="inline"
        items={items}
        style={{
          flex: 1,
          borderRight: 0,
          paddingTop: "30px",
          paddingBottom: "40px",
        }}
        onClick={({ key }) => {
          if (key.startsWith("/")) {
            router.push(key);
          }
        }}
      />

      {!isCollapsed && (
        <div style={{ padding: 16 }}>
          <div
            style={{
              background: "#f6f7fb",
              borderRadius: 14,
              padding: 20,
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <DownloadOutlined style={{ fontSize: 28, marginBottom: 10 }} />
            <h3 style={{ marginBottom: 8 }}>Downloading Center</h3>
            <p style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>
              Duralux is a production ready CRM to get started up and running
              easily.
            </p>
            <Button type="primary" block size="large">
              DOWNLOAD NOW
            </Button>
          </div>
        </div>
      )}
    </Sider>
  );
};
export default Sidebar;
