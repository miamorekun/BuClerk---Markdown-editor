import React from 'react';
import {NotesList} from "./MyNoteStyles";
import MyNotePreview from "./MyNotePreview";
import {ThemeOptions, useTheme} from "@mui/material";
import useGetMyNotes from "./data/useGetMyNotes";
import {leftBounceAnim} from "../animations/motion.variant";

interface Props {
    url?: string
}

const MyNotesList: React.FC<Props> = ({url}) => {
    const theme = useTheme<ThemeOptions>()
    const {notes, isLoading, error} = useGetMyNotes(url)

    return (
        <NotesList>
            <div style={{fontFamily: "Rubik-Medium", color: theme.my.text_500, paddingRight: 24}}>
                <div style={{height: 48}} className="d-flex align-items-center">
                    Notes List - ( {notes.length} )
                </div>
            </div>
            <div
                className="flex-grow-1 overflow-scroll"
                style={{paddingRight: 24, width: 290}}
            >{
                !error ? !isLoading ? notes.length !== 0 ? notes.map((note, i) => (
                    <MyNotePreview
                        key={note._id}
                        note={note}
                        variants={leftBounceAnim}
                        custom={i + 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    />
                )) : <div>No Data</div> : <div>Loading...</div> : <div> Error! </div>
            }</div>
        </NotesList>
    );
};

export default MyNotesList