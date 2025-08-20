import React, { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LuArrowLeftToLine,
  LuComponent,
  LuChevronRight,
} from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import SiteLogo from "../../assets/images/logo.png";

const menuItems = [
  {
    label: "Dashboard",
    icon: <TbSmartHome />,
    path: "/dashboard",
  },
  {
    label: "Components",
    icon: <LuComponent />,
    children: [
      { label: "Alerts", path: "/alerts" },
      { label: "Buttons", path: "/buttons" },
      { label: "Button Groups", path: "/button-groups" },
      { label: "Dialogs", path: "/dialogs" },
    ],
  },
];

const SidebarContent = ({
  onCloseSidebar,
  navigate,
  isActive,
  openMenuIndex,
  handleMenuClick,
  isMobile,
}) => (
  <Stack className="sidebar-content">
    {/* Logo */}
    <Stack direction="row" justifyContent="space-between" px={2} py={1.5}>
      <Stack direction="row" alignItems="center" gap={1}>
        <img src={SiteLogo} alt="Vuexy" />
        <Typography variant="h6" className="fw-600">
          Vuexy
        </Typography>
      </Stack>
      <IconButton onClick={onCloseSidebar}>
        <LuArrowLeftToLine />
      </IconButton>
    </Stack>

    {/* Menu */}
    <Stack className="menu-wrapper top-menu" px={1} gap={1}>
      {menuItems.map((item, index) => (
        <Box key={item.label} className="menu-item">
          <Stack
            className={`menu-label ${isActive(item.path) ? "active" : ""}`}
            direction="row"
            alignItems="center"
            gap={1}
            onClick={() =>
              item.children
                ? handleMenuClick(index)
                : (navigate(item.path),
                  isMobile && onCloseSidebar && onCloseSidebar())
            }
          >
            {item.icon}
            <Typography variant="h6" className="menu-text w-full">
              {item.label}
            </Typography>
            {item.children && <LuChevronRight />}
          </Stack>

          {/* Submenu */}
          {openMenuIndex === index && item.children && (
            <Stack className="submenu-wrapper" gap={1}>
              {item.children.map((sub) => (
                <Box
                  key={sub.path}
                  className={`submenu-item ${
                    isActive(sub.path) ? "active" : ""
                  }`}
                  onClick={() => {
                    navigate(sub.path);
                    if (isMobile) onCloseSidebar();
                  }}
                >
                  <Typography>{sub.label}</Typography>
                </Box>
              ))}
            </Stack>
          )}
        </Box>
      ))}
    </Stack>

    {/* Bottom Menu */}
    <Stack className="menu-wrapper bottom-menu" px={1}>
      <Box className="menu-item">
        <Stack
          className='menu-label active' direction="row" alignItems="center" gap={1} onClick={() => {navigate("/sign-in");}}>
          <IoMdLogOut />
          <Typography variant="h6" className="menu-text w-full">Sign Out</Typography>
        </Stack>
      </Box>
    </Stack>
  </Stack>
);

const Sidebar = ({ isOpen, onCloseSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:991.98px)");
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleMenuClick = (index) =>
    setOpenMenuIndex(openMenuIndex === index ? null : index);

  const isActive = (path) => path && location.pathname === path;

  const sidebarContent = (
    <SidebarContent
      onCloseSidebar={onCloseSidebar}
      navigate={navigate}
      isActive={isActive}
      openMenuIndex={openMenuIndex}
      handleMenuClick={handleMenuClick}
      isMobile={isMobile}
    />
  );

  return isMobile ? (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={onCloseSidebar}
      ModalProps={{ keepMounted: true }}
      className="mobile-sidebar"
    >
      {sidebarContent}
    </Drawer>
  ) : (
    <Box
      className="sidebar-wrapper"
      sx={{ left: isOpen ? "0px" : "-250px" }}
    >
      {sidebarContent}
    </Box>
  );
};

export default Sidebar;
