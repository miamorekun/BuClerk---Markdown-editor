import React from 'react';
import {Badge, ThemeOptions, useTheme} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {IoSettingsSharp} from "react-icons/io5";
import {useLocation, useNavigate} from "react-router-dom";

const useStyles = makeStyles<ThemeOptions>((theme) => ({
    root: {
        "& .MuiBadge-badge": {
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: theme.my.primaryBackground,
            cursor: "pointer"
        }
    }
}))

const MyProfileBadge: React.FC = ({children}) => {
    const classes = useStyles()
    const theme = useTheme<ThemeOptions>()
    const {pathname} = useLocation()
    const navigate = useNavigate();

    return (
        <Badge
            classes={classes}
            badgeContent={
                <IoSettingsSharp
                    size={18}
                    color={pathname.match("/settings") ? theme.my.accent : theme.my.text_500}
                />
            }
            componentsProps={{badge: {onClick: () => navigate("/settings")}}}
        >
            {children}
        </Badge>
    );
};

export default MyProfileBadge;