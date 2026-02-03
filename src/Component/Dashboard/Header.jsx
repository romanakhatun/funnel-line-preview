"use client";

import React from "react";
import { Layout, Button, Avatar, Badge, Space, Dropdown, Menu } from "antd";
import {
  AiOutlineClockCircle,
  AiOutlineBell,
  AiOutlinePlus,
} from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoScreenFull } from "react-icons/go";
import { CgMenuLeft } from "react-icons/cg";
import { BsMoon } from "react-icons/bs";
import Image from "next/image";

import Notifications from "./Dropdown/Notifications";
import Profile from "./Dropdown/Profile";
import Timesheet from "./Dropdown/Timesheet";
import Languages from "./Dropdown/Languages";

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, setCollapsed, onToggleSidebar }) => {
  const plusMenu = (
    <Menu
      items={[
        { key: 1, label: "Create Project" },
        { key: 2, label: "Create Task" },
        { key: 3, label: "Add Member" },
      ]}
    />
  );

  return (
    <AntHeader
      style={{
        background: "#fff",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Space size={16}>
        <Button
          type="text"
          icon={<CgMenuLeft size={24} />}
          onClick={onToggleSidebar}
        />

        <Dropdown overlay={plusMenu} trigger={["click"]}>
          <Button type="primary" shape="circle" icon={<AiOutlinePlus />} />
        </Dropdown>

        <Button style={{ fontWeight: 600 }}>MEGA MENU</Button>
      </Space>

      <Space size={20}>
        <CiSearch size={20} />

        <Dropdown trigger={["hover"]} popupRender={() => <Languages />}>
          <Image src="/assets/flags/us.svg" alt="" width={22} height={16} />
        </Dropdown>

        <GoScreenFull />
        <BsMoon />

        <Dropdown trigger={["hover"]} popupRender={() => <Timesheet />}>
          <Badge count={2}>
            <AiOutlineClockCircle />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} popupRender={() => <Notifications />}>
          <Badge count={3}>
            <AiOutlineBell />
          </Badge>
        </Dropdown>

        <Dropdown trigger={["hover"]} popupRender={() => <Profile />}>
          <Avatar src="/assets/avatar.png" />
        </Dropdown>
      </Space>
    </AntHeader>
  );
};

export default Header;
