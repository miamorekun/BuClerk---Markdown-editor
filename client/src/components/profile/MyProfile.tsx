import React from 'react';
import {ProfileStyled, ProfileStyledAvatar} from "./MyProfileStyles";
import {ThemeOptions, useTheme} from "@mui/material";
import MyProfileBadge from "./MyProfileBadge";
import MyTooltip from "../tooltip/MyTooltip";

const MyProfile = () => {
    const theme = useTheme<ThemeOptions>()

    return (
        <ProfileStyled>
            <MyProfileBadge>
                <ProfileStyledAvatar>
                    БМ
                </ProfileStyledAvatar>
            </MyProfileBadge>
            <div className="ms-3">
                <div style={{color: theme.my.text_550}}>
                    Michael Bunin
                </div>
                <div style={{color: theme.my.text_300, fontFamily: "Rubik-SemiBold", fontSize: 15}}>
                    Manager
                </div>
            </div>
        </ProfileStyled>
    );
};

export default MyProfile;