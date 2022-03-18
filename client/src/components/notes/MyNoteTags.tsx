import React from 'react';
import {NoteTag} from "./myNoteModel";
import {NoteTagStyled} from "./MyNoteStyles";

interface Props {
    tags: Array<NoteTag>
}

export const MyNoteTag: React.FC<{tag: NoteTag}> = ({tag}) => {
    return (
        <NoteTagStyled
            style={{
                backgroundColor: tag.backgroundColor,
                color: tag.color ? tag.color : "#ffffff",
            }}
        >
            {tag.title}
        </NoteTagStyled>
    )
}

const MyNoteTags: React.FC<Props> = (props) => {
    return (
        <div className="d-flex flex-wrap">
            {props.tags.map(tag => <MyNoteTag key={tag._id} tag={tag}/>)}
        </div>
    );
};

export default MyNoteTags;