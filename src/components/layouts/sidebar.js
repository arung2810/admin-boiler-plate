import React, { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Drawer,
  useMediaQuery
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LuArrowLeftToLine,
  LuComponent,
  LuChevronRight
} from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import SiteLogo from "../../assets/images/logo.png";

const SidebarContent = ({
  onCloseSidebar,
  navigate,
  isActive,
  openMenuIndex,
  handleMenuClick
}) => (
  <Stack className="sidebar-content">
    {/* Logo */}
    <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} px={2} py={1.5}>
      <Stack direction="row" alignItems="center" gap={1}>
        <img src={SiteLogo} alt="Vuexy" />
        <Typography variant="h6" className="logo-text fw-600">
          Vuexy
        </Typography>
      </Stack>
      <IconButton aria-label="Toggle Button" className="left-toggle-button" onClick={onCloseSidebar}>
        <LuArrowLeftToLine />
      </IconButton>
    </Stack>

    {/* Menu */}
    <Stack className="menu-wrapper top-menu" px={1} gap={1}>
      <Box className="menu-item">
        <Stack className={`menu-label ${isActive("/dashboard") ? "active" : ""}`} direction="row" alignItems="center" gap={1} onClick={() => navigate("/dashboard")}>
          <TbSmartHome />
          <Typography variant="h6" className="menu-text w-full">
            Dashboard
          </Typography>
        </Stack>
      </Box>

      <Box className="menu-item">
        <Stack className="menu-label" direction="row" alignItems="center" gap={1} onClick={() => handleMenuClick(0)}>
          <LuComponent />
          <Typography variant="h6" className="menu-text w-full">
            Components
          </Typography>
          <LuChevronRight />
        </Stack>
        {openMenuIndex === 0 && (
          <Stack className="submenu-wrapper" gap={1}>
            <Box className={`submenu-item ${isActive("/alerts") ? "active" : ""}`} onClick={() => navigate("/alerts")}>
              <Typography>Alerts</Typography>
            </Box>
            <Box className={`submenu-item ${isActive("/buttons") ? "active" : ""}`} onClick={() => navigate("/buttons")}>
              <Typography>Buttons</Typography>
            </Box>
          </Stack>
        )}
      </Box>
    </Stack>

    {/* Bottom */}
    <Stack className="menu-wrapper bottom-menu" px={1}>
      <Box className="menu-item">
        <Stack
          className={`menu-label ${isActive("/sign-in") ? "active" : ""}`}
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => navigate("/sign-in")}
        >
          <IoMdLogOut />
          <Typography variant="h6" className="menu-text w-full">
            Sign Out
          </Typography>
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

  const handleMenuClick = (index) => {
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {!isMobile && (
        <Box
          className="sidebar-wrapper"
          sx={{
            left: isOpen ? "0px" : "-250px",
          }}
        >
          <SidebarContent
            onCloseSidebar={onCloseSidebar}
            navigate={navigate}
            isActive={isActive}
            openMenuIndex={openMenuIndex}
            handleMenuClick={handleMenuClick}
          />
        </Box>
      )}

      {isMobile && (
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={onCloseSidebar}
          className="mobile-sidebar"
        >
          <SidebarContent
            onCloseSidebar={onCloseSidebar}
            navigate={navigate}
            isActive={isActive}
            openMenuIndex={openMenuIndex}
            handleMenuClick={handleMenuClick}
          />
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
