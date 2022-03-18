import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {NotesList} from "./MyNoteStyles";

const MyNotesList:React.FC = () => {
    return (
        <NotesList>
            Hello world!
        </NotesList>
    );
};

export default MyNotesList