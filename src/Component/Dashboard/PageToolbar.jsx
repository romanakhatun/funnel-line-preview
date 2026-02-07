"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  Dropdown,
  Space,
  Checkbox,
  Divider,
  Grid,
  Drawer,
} from "antd";
import {
  FilterOutlined,
  ArrowLeftOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";

const { useBreakpoint } = Grid;

const dateOptions = [
  "Today",
  "Yesterday",
  "This Week",
  "Last Week",
  "This Month",
  "Last Month",
  "Custom Date",
];

const DateDropdown = ({ onSelect }) => (
  <div
    style={{
      padding: 12,
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
    }}
  >
    {dateOptions.map((d) => (
      <div
        key={d}
        onClick={() => onSelect(d)}
        style={{ padding: 10, cursor: "pointer" }}
      >
        {d}
      </div>
    ))}
  </div>
);

const FilterDropdown = () => (
  <div
    style={{
      padding: 12,
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 25px 70px rgba(0,0,0,0.18)",
    }}
  >
    {["Role", "Team", "Email", "Member"].map((f) => (
      <div key={f} style={{ marginBottom: 8 }}>
        <Checkbox>{f}</Checkbox>
      </div>
    ))}
    <Divider />
    Manage Filter
  </div>
);

const PageToolbar = () => {
  const screens = useBreakpoint();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [rangeLabel, setRangeLabel] = useState("FEB 01,26 - FEB 28,26");

  const segments = pathname.split("/").filter(Boolean);
  const pageTitle =
    segments[segments.length - 1]?.charAt(0).toUpperCase() +
      segments[segments.length - 1]?.slice(1) || "Dashboard";

  if (!screens.md) {
    return (
      <>
        {/* Top Bar */}
        <div
          style={{
            background: "#fff",
            padding: "12px 16px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 700 }}>{pageTitle}</span>

          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </div>

        {/* Drawer */}
        <Drawer
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
          size="100%"
          closable={false}
          styles={{ body: { padding: 18 } }}
        >
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => setOpen(false)}
            style={{ marginBottom: 20, fontWeight: 600 }}
          >
            Back
          </Button>

          <Dropdown
            trigger={["click"]}
            popupRender={() => <DateDropdown onSelect={setRangeLabel} />}
          >
            <Button block size="large" style={{ marginBottom: 14 }}>
              {rangeLabel}
            </Button>
          </Dropdown>

          <Dropdown trigger={["click"]} popupRender={() => <FilterDropdown />}>
            <Button block icon={<FilterOutlined />} size="large">
              FILTER
            </Button>
          </Dropdown>
        </Drawer>
      </>
    );
  }

  /* DESKTOP */
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px 24px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Space>
        <span style={{ fontWeight: 700 }}>{pageTitle}</span>
        <Breadcrumb items={[{ title: "Home" }, { title: pageTitle }]} />
      </Space>

      <Space>
        <Dropdown
          trigger={["click"]}
          popupRender={() => <DateDropdown onSelect={setRangeLabel} />}
        >
          <Button>{rangeLabel}</Button>
        </Dropdown>

        <Dropdown trigger={["click"]} popupRender={() => <FilterDropdown />}>
          <Button icon={<FilterOutlined />}>FILTER</Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default PageToolbar;
