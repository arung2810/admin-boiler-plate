import React, { useEffect, useState } from "react";
import Theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from "./header";
import Sidebar from "./sidebar";

const AppLayout = () => {
    const isMobile = useMediaQuery("(max-width:991.98px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile); // closed on mobile, open on desktop

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, []);

    // If screen size changes, adjust sidebar state
    useEffect(() => {
        setIsSidebarOpen(!isMobile);
    }, [isMobile]);

    const handleToggleSidebar = (open) => {
        setIsSidebarOpen(open);
    };

    return (
        <ThemeProvider theme={Theme()}>
            <Box className="main-content">
                <Header onToggleSidebar={() => handleToggleSidebar(true)} />
                <Sidebar
                    isOpen={isSidebarOpen}
                    onCloseSidebar={() => handleToggleSidebar(false)}
                />
                <Box
                    className="content-wrapper"
                    sx={{
                        paddingLeft: isMobile ? "16px" : isSidebarOpen ? "266px" : "16px",
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default AppLayout;
