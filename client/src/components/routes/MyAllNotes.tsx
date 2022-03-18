import React from 'react';
import {styled} from "@mui/styles";
import MyNotePreview from "../notes/MyNotePreview";
import {NotePreview, NoteTag} from "../notes/myNoteModel";
import {useLocation, useParams} from "react-router-dom";

const NotesStyle = styled("div")(({theme}) => ({
    flexGrow: 1,
    padding: "24px 36px 24px 0",
}))

const tag: NoteTag = {
    _id: "23213141413",
    title: "Redux",
    backgroundColor: "#6172F3",
}
const tag2: NoteTag = {
    _id: "2321312133",
    title: "React.js",
    backgroundColor: "#FFA500",
}
const tag3: NoteTag = {
    _id: "232131323",
    title: "Front-end",
    backgroundColor: "#FEDF89",
    color: "#B54708"
}

const note: NotePreview = {
    _id: "1647539143",
    tags: [tag, tag2, tag3],
    title: "BuClerk TA - Tune a Redux MiddleWare",
    shortDescription: "You must tune a Redux MiddleWare Thunk and create special actions...",
    deadline: "1647539262",
    status: 2,
    projects: []
}

const MyAllNotes = () => {


    return (
        <NotesStyle>

        </NotesStyle>
    );
};

export default MyAllNotes;