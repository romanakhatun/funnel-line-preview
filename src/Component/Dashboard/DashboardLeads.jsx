"use client";
import React from "react";
import { Card, Row, Col, Table, Tag, Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "New", value: 20, color: "#3456db" },
  { name: "Contacted", value: 15, color: "#4dabf7" },
  { name: "Qualified", value: 10, color: "#228be6" },
  { name: "Working", value: 18, color: "#339af0" },
  { name: "Customer", value: 10, color: "#74c0fc" },
  { name: "Proposal", value: 15, color: "#1c7ed6" },
  { name: "Leads", value: 16, color: "#1864ab" },
  { name: "Progress", value: 14, color: "#90caf9" },
  { name: "Others", value: 10, color: "#a5d8ff" },
];

const leads = [
  {
    key: 1,
    name: "Archie Cantones",
    email: "archie.tones@gmail.com",
    proposal: "Sent",
    status: "Completed",
  },
  {
    key: 2,
    name: "Holmes Cherryman",
    email: "golms.chan@gmail.com",
    proposal: "New",
    status: "In Progress",
  },
  {
    key: 3,
    name: "Malanie Hanvey",
    email: "lanie.nvey@gmail.com",
    proposal: "Sent",
    status: "Completed",
  },
  {
    key: 4,
    name: "Kenneth Hune",
    email: "nneth.une@gmail.com",
    proposal: "Returning",
    status: "Not Interested",
  },
];

const DashboardLeads = () => {
  const columns = [
    {
      title: "USERS",
      dataIndex: "name",
      render: (_, r) => (
        <div style={{ display: "flex", gap: 12 }}>
          <Avatar src="/assets/avatar.png" />
          <div>
            <div style={{ fontWeight: 600 }}>{r.name}</div>
            <div style={{ fontSize: 12, color: "#6b7280" }}>{r.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "PROPOSAL",
      dataIndex: "proposal",
      render: (v) => <Tag>{v}</Tag>,
    },
    {
      title: "DATE",
      render: () => "11/06/2023 10:53",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (v) => {
        const color =
          v === "Completed" ? "green" : v === "In Progress" ? "blue" : "orange";
        return <Tag color={color}>{v}</Tag>;
      },
    },
    {
      title: "ACTIONS",
      render: () => <MoreOutlined style={{ cursor: "pointer" }} />,
    },
  ];

  return (
    <Row gutter={[24, 24]} align="stretch">
      <Col xs={24} lg={10} style={{ display: "flex" }}>
        <Card
          title="Leads Overview"
          extra={<MoreOutlined />}
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
          <div style={{ height: 320 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={80}
                  outerRadius={120}
                  dataKey="value"
                >
                  {pieData.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <Row gutter={[10, 10]} style={{ marginTop: "auto" }}>
            {pieData.map((item) => (
              <Col span={8} key={item.name}>
                <div
                  style={{
                    border: "1px dashed #e5e7eb",
                    padding: 8,
                    borderRadius: 8,
                    fontSize: 13,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 8,
                      background: item.color,
                      borderRadius: "50%",
                      marginRight: 6,
                    }}
                  />
                  {item.name} ({item.value}K)
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Col>

      <Col xs={24} lg={14} style={{ display: "flex" }}>
        <Card
          title="Latest Leads"
          extra={<MoreOutlined />}
          style={{
            borderRadius: 16,
            boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          styles={{ body: { flex: 1 } }}
        >
          <Table
            columns={columns}
            dataSource={leads}
            pagination={{ pageSize: 5 }}
            rowKey="key"
          />
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardLeads;
