import React, { useState, useEffect, useCallback } from "react";
import { Box, IconButton, Stack, Typography, Drawer, useMediaQuery } from "@mui/material";
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
      { label: "Accordions", path: "/accordions" },
      { label: "Alerts", path: "/alerts" },
      { label: "Avatars", path: "/avatars" },
      { label: "Badges", path: "/badges" },
      { label: "Buttons", path: "/buttons" },
      { label: "Chips", path: "/chips" },
      { label: "Button Groups", path: "/button-groups" },
      { label: "Dialogs", path: "/dialogs" },
      { label: "List", path: "/list" },
      { label: "Menu", path: "/menu" },
      { label: "Pagination", path: "/pagination" },
      { label: "Progress", path: "/progress" },
      { label: "Ratings", path: "/ratings" },
    ],
  },
  {
    label: "Form Elements",
    icon: <LuComponent />,
    children: [
      { label: "Text Field", path: "/textfield" },
      { label: "Checkbox", path: "/checkbox" },
      { label: "Radio", path: "/radio" },
      { label: "Textarea", path: "/textarea" },
      { label: "Select", path: "/select" },
      { label: "Switch", path: "/switch" },
      { label: "Autocomplete", path: "/autocomplete" },
    ]
  }
];

const SidebarContent = ({
  onCloseSidebar,
  navigate,
  isActive,
  openMenuIndex,
  handleMenuClick,
  isMobile,
  setOpenMenuIndex,
}) => (
  <Stack className="sidebar-content">
    {/* Logo */}
    <Stack direction="row" justifyContent="space-between" px={2} py={1.5}>
      <Stack direction="row" alignItems="center" gap={1}>
        <img src={SiteLogo} alt="Vuexy" />
        <Typography variant="h6" className="logo-text fw-600">Vuexy</Typography>
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
            onClick={() => {
              if (item.children) {
                handleMenuClick(index);
              } else {
                navigate(item.path);
                setOpenMenuIndex(null); // close submenu when going to a parent
                if (isMobile && onCloseSidebar) onCloseSidebar();
              }
            }}
          >
            {item.icon}
            <Typography variant="h6" className="menu-text w-full">
              {item.label}
            </Typography>
            {item.children && (
              <LuChevronRight
                className={`transition-transform duration-300 ${openMenuIndex === index ? "rotate-90" : ""
                  }`}
              />
            )}
          </Stack>

          {/* Submenu */}
          {openMenuIndex === index && item.children && (
            <Stack className="submenu-wrapper" gap={1}>
              {item.children.map((sub) => (
                <Box
                  key={sub.path}
                  className={`submenu-item ${isActive(sub.path) ? "active" : ""
                    }`}
                  onClick={() => {
                    navigate(sub.path);
                    setOpenMenuIndex(index); // keep open for active child
                    if (isMobile && onCloseSidebar) onCloseSidebar();
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
    <Stack className="menu-wrapper bottom-menu" my={1} px={1}>
      <Box className="menu-item">
        <Stack
          className="menu-label"
          direction="row"
          alignItems="center"
          gap={1}
          onClick={() => {
            navigate("/sign-in");
          }}
        >
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

  const isActive = useCallback(
    (path) => path && location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    const activeIndex = menuItems.findIndex((item) =>
      item.children?.some((sub) => isActive(sub.path))
    );
    setOpenMenuIndex(activeIndex >= 0 ? activeIndex : null);
  }, [location.pathname, isActive]);

  const sidebarContent = (
    <SidebarContent
      onCloseSidebar={onCloseSidebar}
      navigate={navigate}
      isActive={isActive}
      openMenuIndex={openMenuIndex}
      handleMenuClick={handleMenuClick}
      isMobile={isMobile}
      setOpenMenuIndex={setOpenMenuIndex}
    />
  );

  return isMobile ? (
    <>
      <Drawer
        variant={isMobile ? "persistent" : "permanent"}
        anchor="left"
        open={isOpen}
        onClose={onCloseSidebar}
        ModalProps={{ keepMounted: true }}
        className="mobile-sidebar"
      >
        {sidebarContent}
      </Drawer>
      {isOpen && (
        <>
          <Box className="sidebar-backdrop" onClick={onCloseSidebar} />
        </>
      )}
    </>
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
