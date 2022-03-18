import React from 'react';
import {NotePreview} from "./myNoteModel";
import {NotePreviewStyled} from "./MyNoteStyles";
import MyNoteTags from "./MyNoteTags";
import {ThemeOptions, useTheme} from "@mui/material";
import MyNoteStatus from "./MyNoteStatus";
import MyNoteDatePicker, {MyNoteDatePickerIcon} from "./MyNoteDatePicker";
import moment from "moment";
import {date_time_format} from "../moment-dt-config/my-dt-formats";

interface Props {
    note: NotePreview
}

const MyNotePreview: React.FC<Props> = ({note}) => {
    const theme = useTheme<ThemeOptions>()

    return (
        <NotePreviewStyled>
            <MyNoteTags tags={note.tags}/>
            <div style={{marginTop: 6, marginBottom: 12}}>
                <div style={{color: theme.my.text_700, fontFamily: "Rubik-Medium"}}>{note.title}</div>
                <div style={{
                    color: theme.my.text_500,
                    fontFamily: "Rubik-Medium",
                    marginTop: 6,
                    fontSize: 14,
                }}>{note.shortDescription}</div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                    <MyNoteDatePickerIcon/>
                    <div style={{color: theme.my.text_500, marginLeft: 12, fontSize: 14, fontFamily: "Rubik-Medium"}}>
                        {moment.unix(parseInt(note.deadline)).format(date_time_format)}
                    </div>
                </div>
                <MyNoteStatus status={note.status}/>
            </div>
        </NotePreviewStyled>
    );
};

export default MyNotePreview;