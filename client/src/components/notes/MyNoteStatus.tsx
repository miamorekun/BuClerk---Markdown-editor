import React from 'react';
import {NoteStatuses} from "./myNoteModel";
import {ThemeOptions, useTheme} from "@mui/material";

interface Props {
    status: NoteStatuses
}

const MyNoteStatus: React.FC<Props> = ({status}) => {
    const theme = useTheme<ThemeOptions>()

    let title!: string,
        color: string = "#ffffff",
        backgroundColor: string = "transparent",
        borderColor: string = "transparent"

    switch (status) {
        case NoteStatuses.important:
            title = "Important"
            backgroundColor = theme.my.tomato
            break
        case NoteStatuses.active:
            title = "Active"
            color = theme.my.warning
            borderColor = theme.my.warning
            break
        case NoteStatuses.completed:
            title = "Completed"
            backgroundColor = theme.my.success
            break
        case NoteStatuses.onHold:
            title = "On Hold"
            backgroundColor = theme.my.text_500
            break
    }

    return (
        <div
            style={{
                borderRadius: 4,
                backgroundColor,
                color,
                border: `1px solid ${borderColor}`,
                lineHeight: 1.2,
                padding: "4px 8px",
                fontFamily: "Rubik-SemiBold",
                fontSize: 12,
            }}
        >
            {title}
        </div>
    );
};

export default MyNoteStatus;