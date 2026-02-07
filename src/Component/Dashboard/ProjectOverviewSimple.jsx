"use client";

import React from "react";
import { Card, Typography, Progress, Row, Col, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

const ProjectOverviewSimple = () => {
  return (
    <Card
      style={{
        borderRadius: 16,
        width: "100%",
      }}
    >
      <Space orientation="vertical" size={24} style={{ width: "100%" }}>
        <Space
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Text strong>Projects In Progress</Text>
          <Text type="secondary">16/25 Tasks Completed (78%)</Text>
        </Space>

        <Progress percent={78} showInfo={false} size={6} />

        <Row gutter={[40, 30]}>
          <Col xs={24} md={12}>
            <Info label="Project" value="#01 - CRM Applications - G.Cute" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Billing Type" value="Project Hours" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Status" value="In Progress" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Customer" value="Green Cute" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Start Date" value="2023-02-25" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="End Date" value="2023-03-20" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Hourly Rate" value="$25.00" />
          </Col>

          <Col xs={24} md={12}>
            <Info label="Logged Hours" value="00:00:00" />
          </Col>
        </Row>

        <Space orientation="vertical" size={12}>
          <Title level={5} style={{ margin: 0 }}>
            Description
          </Title>

          <Paragraph type="secondary">
            CRM (Customer Relationship Management) applications are software
            tools that help organizations manage interactions with their
            customers, streamline sales and marketing activities, and improve
            overall customer satisfaction.
          </Paragraph>

          <Paragraph strong>
            Some of the common features of CRM applications include:
          </Paragraph>

          <ul style={{ color: "#667085" }}>
            <li>
              Contact Management: Store customer data including phone numbers,
              emails, addresses
            </li>
            <li>
              Sales Management: Track leads, deals and analyze performance
            </li>
            <li>
              Marketing Automation: Email campaigns, lead generation tools
            </li>
            <li>Customer Service: Support ticket tracking</li>
            <li>Analytics & Reporting: Insights and KPI dashboards</li>
          </ul>

          <Paragraph type="secondary">
            Popular CRM apps include Salesforce, Microsoft Dynamics, HubSpot,
            Zoho CRM and Freshsales.
          </Paragraph>
        </Space>
      </Space>
    </Card>
  );
};

const Info = ({ label, value }) => (
  <Space orientation="vertical" size={4}>
    <Text strong style={{ fontSize: 13 }}>
      {label}
    </Text>
    <Text type="secondary">{value}</Text>
  </Space>
);

export default ProjectOverviewSimple;
