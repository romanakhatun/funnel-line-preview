"use client";

import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid } from "antd";
import {
  DashboardOutlined,
  FileTextOutlined,
  SettingOutlined,
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
    icon: <FileTextOutlined />,
    label: "Reports",
    children: [
      { key: "/dashboard/sales", label: "Sales" },
      { key: "/dashboard/finance", label: "Finance" },
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

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
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
        borderRight: "1px solid #eee",
        position: hoverOpen ? "absolute" : "relative",
        zIndex: 1000,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
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
        }}
      >
        {isCollapsed ? "D" : "DURALUX"}
      </div>

      <Menu
        mode="inline"
        items={items}
        style={{ flex: 1 }}
        onClick={({ key }) => {
          if (key.startsWith("/")) {
            router.push(key);
          }
        }}
      />

      {/* {!isCollapsed && (
        <div
          style={{
            padding: 16,
          }}
        >
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

            <p
              style={{
                fontSize: 13,
                color: "#666",
                marginBottom: 16,
              }}
            >
              Duralux is a production ready CRM to get started up and running
              easily.
            </p>

            <Button type="primary" block size="large">
              DOWNLOAD NOW
            </Button>
          </div>
        </div>
      )} */}
    </Sider>
  );
};

export default Sidebar;
