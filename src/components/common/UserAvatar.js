import React from "react";
import { Avatar } from "@mui/material";

import AvatarImage from "../../assets/images/avatar.jpg";

const UserAvatar = () => {

    return (
        <>
            <Avatar alt="Remy Sharp" src={AvatarImage} />
        </>
    );
};

export default UserAvatar;
