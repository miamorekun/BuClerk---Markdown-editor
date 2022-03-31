import React from 'react';
import {MyButton} from "../button/MyButton";
import {FaPen} from "react-icons/fa";
import {ThemeOptions, useTheme} from "@mui/material";
import {observer} from "mobx-react";
import DescriptionEditor from "../../store/DescriptionEditor";


const MyNoteCreateDescriptionButton = () => {
    const theme = useTheme<ThemeOptions>()
    return (
        <MyButton onClick={() => DescriptionEditor.open()}>
            <FaPen size={14} color={theme.my.accent} className="me-3"/> Create a Description
        </MyButton>
    );
};

export default MyNoteCreateDescriptionButton