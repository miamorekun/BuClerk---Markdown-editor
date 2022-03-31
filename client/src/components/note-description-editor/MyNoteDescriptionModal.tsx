import React from 'react';
import {observer} from 'mobx-react'
import Drawer from '@mui/material/Drawer';
import DescriptionEditor from "../../store/DescriptionEditor";
import {useStyledDrawer} from "./MyNoteDescriptionStyles";
import NoteStore from "../../store/NoteStore";
import {ThemeOptions, useTheme} from "@mui/material";
import {MyButton, MyButtonError} from "../button/MyButton";
import {FaTimes, FaCheck} from "react-icons/fa";
import MyNoteDescriptionEditor from "./MyNoteDescriptionEditor";

const MyNoteDescriptionModal = () => {
    const classes = useStyledDrawer()
    const theme = useTheme<ThemeOptions>()

    return (
        <Drawer
            open={DescriptionEditor.isOpen}
            onClose={() => DescriptionEditor.close()}
            anchor="right"
            classes={classes}
            transitionDuration={200}
        >
            <div className="flex-grow-1 d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="flex-grow-1 d-flex align-items-center" style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: 18,
                        color: theme.my.text_700,
                        fontFamily: "Rubik-Medium",
                        flexGrow: 1,
                        marginRight: 24
                    }}>
                        {NoteStore.note?.title}
                    </div>
                    <div>
                        <MyButton className="me-2">
                            <FaCheck size={14} color={theme.my.accent} className="me-3"/>
                            Save
                        </MyButton>
                        <MyButtonError onClick={() => DescriptionEditor.close()}>
                            <FaTimes size={14} color={theme.my.tomato} className="me-3"/>
                            Cancel
                        </MyButtonError>
                    </div>
                </div>
                <div className="mt-4 flex-grow-1">
                    <MyNoteDescriptionEditor/>
                </div>
            </div>
        </Drawer>
    );
};

export default observer(MyNoteDescriptionModal)