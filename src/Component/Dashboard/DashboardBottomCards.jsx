"use client";

import React from "react";
import { Card, Row, Col, Progress, Avatar, Space } from "antd";
import { MoreOutlined } from "@ant-design/icons";

/* Data */
const schedules = [
  { day: 20, color: "#16a34a", title: "React Meeting", time: "11:30am" },
  { day: 30, color: "#f59e0b", title: "Admin Design", time: "10:00am" },
  { day: 17, color: "#3456db", title: "Standup Team", time: "8:00am" },
  { day: 25, color: "#ef4444", title: "Zoom Team Call", time: "3:30pm" },
];

const projects = [
  { name: "Apps UI", percent: 54, color: "#3456db" },
  { name: "Dashboard Kit", percent: 100, color: "#16a34a" },
  { name: "Facebook Ads", percent: 90, color: "#14b8a6" },
  { name: "React Admin", percent: 37, color: "#f59e0b" },
  { name: "Paypal Payment", percent: 29, color: "#ef4444" },
];

const team = [
  { name: "Alexandra Della", role: "Frontend", percent: 40, color: "#ef4444" },
  { name: "Archie Cantones", role: "UI/UX", percent: 65, color: "#3456db" },
  { name: "Malanie Hanvey", role: "Backend", percent: 50, color: "#f59e0b" },
  { name: "Kenneth Hune", role: "Marketing", percent: 75, color: "#16a34a" },
];

const cardStyle = {
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
};

const bodyStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const DashboardBottomCards = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={8}>
        <Card
          title="Upcoming Schedule"
          extra={<MoreOutlined />}
          style={cardStyle}
          styles={{ body: bodyStyle }}
        >
          <div style={{ flex: 1 }}>
            {schedules.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 14,
                  border: "1px dashed #e5e7eb",
                  borderRadius: 10,
                  marginBottom: 14,
                }}
              >
                <div style={{ display: "flex", gap: 12 }}>
                  {/* date box */}
                  <div
                    style={{
                      background: item.color + "20",
                      color: item.color,
                      padding: 10,
                      borderRadius: 8,
                      fontWeight: 700,
                      textAlign: "center",
                      minWidth: 46,
                    }}
                  >
                    {item.day}
                    <div style={{ fontSize: 10 }}>DEC</div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>
                      {item.time}
                    </div>
                  </div>
                </div>

                <Avatar.Group max={{ count: 3 }}>
                  <Avatar src="/assets/avatar.png" />
                  <Avatar src="/assets/avatar.png" />
                  <Avatar src="/assets/avatar.png" />
                </Avatar.Group>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 12, fontWeight: 600 }}>
            UPCOMING SCHEDULE
          </div>
        </Card>
      </Col>
      <Col xs={24} lg={8}>
        <Card
          title="Project Status"
          extra={<MoreOutlined />}
          style={cardStyle}
          styles={{ body: bodyStyle }}
        >
          <div style={{ flex: 1 }}>
            {projects.map((p, i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>{p.name}</span>
                  <span>{p.percent}%</span>
                </div>

                <Progress
                  percent={p.percent}
                  showInfo={false}
                  strokeColor={p.color}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 10, fontWeight: 600 }}>
            UPCOMING PROJECTS
          </div>
        </Card>
      </Col>

      <Col xs={24} lg={8}>
        <Card
          title="Team Progress"
          extra={<MoreOutlined />}
          style={cardStyle}
          styles={{ body: bodyStyle }}
        >
          <div style={{ flex: 1 }}>
            {team.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 14,
                  border: "1px dashed #e5e7eb",
                  borderRadius: 10,
                  marginBottom: 14,
                }}
              >
                <Space>
                  <Avatar src="/assets/avatar.png" />
                  <div>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#6b7280" }}>
                      {t.role}
                    </div>
                  </div>
                </Space>

                <Progress
                  type="circle"
                  percent={t.percent}
                  size={46}
                  strokeColor={t.color}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 10, fontWeight: 600 }}>
            UPDATE 30 MIN AGO
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardBottomCards;
