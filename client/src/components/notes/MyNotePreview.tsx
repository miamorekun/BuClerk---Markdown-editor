import React from 'react';
import {NotePreview} from "./myNoteModel";
import {useNotePreviewStyles} from "./MyNoteStyles";
import MyNoteTags from "./MyNoteTags";
import {ThemeOptions, useTheme} from "@mui/material";
import MyNoteStatus from "./MyNoteStatus";
import {MyNoteDatePickerIcon} from "./MyNoteDatePicker";
import moment from "moment";
import {date_time_format} from "../moment-dt-config/my-dt-formats";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import NoteStore from "../../store/NoteStore"
import {observer} from "mobx-react"

interface Props {
    note: NotePreview
}

const MyNotePreview = React.forwardRef<any, Props>(({note}, ref) => {
    const theme = useTheme<ThemeOptions>()
    const classes = useNotePreviewStyles()
    const currentNoteId = NoteStore.note?._id

    const setNote = () => NoteStore.get(note._id)

    return (
        <div ref={ref} className={classes.root}>
            <MyNoteTags tags={note.tags}/>
            <div style={{marginTop: 6, marginBottom: 12}}>
                <div onClick={setNote} className={`bc__note-preview__title${currentNoteId === note._id ? ` active` : ``}`}>
                    {note.title}
                </div>
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
                <Link to={`/app/notes/status/${note.status}`}>
                    <MyNoteStatus status={note.status}/>
                </Link>
            </div>
        </div>
    );
});

export default motion(observer(MyNotePreview))