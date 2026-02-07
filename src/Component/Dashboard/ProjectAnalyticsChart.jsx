"use client";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "JAN/23", unbilled: 45, billed: 60 },
  { month: "FEB/23", unbilled: 10, billed: 20 },
  { month: "MAR/23", unbilled: 75, billed: 90 },
  { month: "APR/23", unbilled: 35, billed: 50 },
  { month: "MAY/23", unbilled: 80, billed: 100 },
  { month: "JUN/23", unbilled: 40, billed: 55 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;

  const unbilled = payload[0]?.value;
  const billed = payload[1]?.value;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        minWidth: 180,
      }}
    >
      <b style={{ display: "block", marginBottom: 10 }}>{label}</b>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            background: "#2563eb",
          }}
        />
        <span>Unbilled Hours: {unbilled}K</span>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            background: "#22c55e",
          }}
        />
        <span>Billed Hours: {billed}K</span>
      </div>
    </div>
  );
};

const ProjectAnalyticsChart = () => {
  return (
    <div
      style={{
        borderRadius: 16,
        height: 340,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Gradients */}
          <defs>
            <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
            </linearGradient>

            <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Axis */}
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `${v}K`} />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Areas */}
          <Area
            type="monotone"
            dataKey="unbilled"
            stroke="#2563eb"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#blueFill)"
          />

          <Area
            type="monotone"
            dataKey="billed"
            stroke="#22c55e"
            strokeWidth={2}
            strokeDasharray="5 5"
            fill="url(#greenFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectAnalyticsChart;
