"use client";

import React, { useState } from "react";
import { Layout, Menu, Drawer, Grid } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  FileTextOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const items = [
  { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboards" },
  { key: "analytics", icon: <BarChartOutlined />, label: "Analytics" },
  { key: "reports", icon: <FileTextOutlined />, label: "Reports" },
  { key: "settings", icon: <SettingOutlined />, label: "Settings" },
];

const Sidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const screens = useBreakpoint();

  const [hoverOpen, setHoverOpen] = useState(false);

  const isCollapsed = collapsed && !hoverOpen;

  /* ================= MOBILE ================= */
  if (!screens.lg) {
    return (
      <Drawer
        placement="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        st={{ padding: 0 }}
      >
        <Menu mode="inline" items={items} />
      </Drawer>
    );
  }

  /* ================= DESKTOP ================= */
  return (
    <Sider
      width={240}
      collapsedWidth={80}
      collapsed={isCollapsed}
      trigger={null}
      style={{
        background: "#fff",
        borderRight: "1px solid #eee",
        position: hoverOpen ? "absolute" : "relative",
        zIndex: 1000,
        height: "100vh",
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

      <Menu mode="inline" items={items} />
    </Sider>
  );
};

export default Sidebar;
