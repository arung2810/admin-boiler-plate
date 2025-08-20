import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import UserAvatar from "../common/UserAvatar";
import ThemeChanger from "../common/ThemeChanger";
import { FiBell } from "react-icons/fi";
import { LuArrowRightToLine } from "react-icons/lu";
import SiteLogo from "../../assets/images/logo.png";

const Header = ({ onToggleSidebar }) => {
    return (
        <Box className="header-wrapper">
            <Stack direction='row' justifyContent="space-between" alignItems="center" px={2} py={1.5}>
                <Stack className="left-header" direction='row' alignItems="center" gap={2}>
                    <Stack direction='row' alignItems="center" gap={1}>
                        <img src={SiteLogo} alt="Vuexy"/>
                        <Typography variant="h6" className="logo-text fw-600">Vuexy</Typography>
                    </Stack>  
                    <IconButton 
                        aria-label="Toggle Button" 
                        className="right-toggle-button"
                        onClick={onToggleSidebar}
                    >
                        <LuArrowRightToLine />
                    </IconButton>
                </Stack>
                <Stack direction='row' alignItems="center" gap={2} className="right-header">
                    <ThemeChanger/>
                    <IconButton aria-label="Notifications">
                        <FiBell />
                    </IconButton>
                    <UserAvatar/>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Header;
