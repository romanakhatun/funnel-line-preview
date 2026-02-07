"use client";
import React from "react";
import { Card, Row, Col, Progress } from "antd";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  Tooltip,
} from "recharts";
import Image from "next/image";

/* Chart Data */
const data = [
  { month: "JAN/23", value: 22, bg: 45 },
  { month: "FEB/23", value: 10, bg: 55 },
  { month: "MAR/23", value: 21, bg: 40 },
  { month: "APR/23", value: 27, bg: 68 },
  { month: "MAY/23", value: 13, bg: 22 },
  { month: "JUN/23", value: 22, bg: 43 },
  { month: "JUL/23", value: 37, bg: 20 },
  { month: "AUG/23", value: 20, bg: 40 },
  { month: "SEP/23", value: 43, bg: 55 },
  { month: "OCT/23", value: 22, bg: 28 },
  { month: "NOV/23", value: 29, bg: 43 },
  { month: "DEC/23", value: 20, bg: 58 },
];

/* Product Data */
const products = [
  {
    name: "Shopify eCommerce Store",
    cat: "Electronics",
    price: "$1200",
    sold: "6 sold",
    icon: "/assets/shopify.png",
  },
  {
    name: "iOS Apps Development",
    cat: "Electronics",
    price: "$1450",
    sold: "3 sold",
    icon: "/assets/app-store.png",
  },
  {
    name: "Figma Dashboard Design",
    cat: "Electronics",
    price: "$1250",
    sold: "3 sold",
    icon: "/assets/figma.png",
  },
];

const DashboardAnalytics = () => {
  return (
    <Row gutter={[24, 24]} align="stretch">
      <Col xs={24} lg={16} style={{ display: "flex" }}>
        <Card
          title="Payment Record"
          style={{
            borderRadius: 16,
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          styles={{
            body: { flex: 1, display: "flex", flexDirection: "column" },
          }}
        >
          <ResponsiveContainer width="100%" height={340}>
            <ComposedChart data={data}>
              <XAxis dataKey="month" />
              <Tooltip />

              <Bar
                dataKey="bg"
                fill="#e5e7eb"
                barSize={16}
                radius={[6, 6, 0, 0]}
              />
              <Bar
                dataKey="value"
                fill="#3456db"
                barSize={16}
                radius={[6, 6, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="bg"
                stroke="#cbd5e1"
                strokeWidth={3}
              />
            </ComposedChart>
          </ResponsiveContainer>

          <Row gutter={16} style={{ marginTop: 26 }}>
            {[
              { label: "Awaiting", val: "$5,486", color: "#3456db" },
              { label: "Completed", val: "$9,275", color: "#16a34a" },
              { label: "Rejected", val: "$3,868", color: "#ef4444" },
              { label: "Revenue", val: "$50,668", color: "#111827" },
            ].map((s) => (
              <Col span={6} key={s.label}>
                <div
                  style={{
                    border: "1px dashed #e5e7eb",
                    padding: 14,
                    borderRadius: 10,
                  }}
                >
                  <div style={{ fontSize: 13, color: "#6b7280" }}>
                    {s.label}
                  </div>
                  <div
                    style={{ fontWeight: 700, fontSize: 18, margin: "6px 0" }}
                  >
                    {s.val}
                  </div>
                  <Progress
                    percent={80}
                    showInfo={false}
                    strokeColor={s.color}
                    size="small"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>

      <Col xs={24} lg={8} style={{ display: "flex" }}>
        <Card
          style={{
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          styles={{
            body: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 0,
            },
          }}
        >
          <div style={{ background: "#3456db", padding: 22, color: "#fff" }}>
            <h2 style={{ margin: 0 }}>30,569</h2>
            <div>Total Sales</div>
          </div>

          <div style={{ flex: 1 }}>
            {products.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 22px",
                  borderBottom:
                    i !== products.length - 1 ? "1px dashed #e5e7eb" : "none",
                }}
              >
                <div style={{ display: "flex", gap: 14 }}>
                  <Image src={item.icon} alt="icon" width={48} height={48} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: 13, color: "#6b7280" }}>
                      {item.cat}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 600 }}>{item.price}</div>
                  <div style={{ fontSize: 12 }}>{item.sold}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "auto",
              textAlign: "center",
              padding: 20,
              fontWeight: 600,
              cursor: "pointer",
              borderTop: "1px solid #eee",
            }}
          >
            FULL DETAILS
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardAnalytics;
