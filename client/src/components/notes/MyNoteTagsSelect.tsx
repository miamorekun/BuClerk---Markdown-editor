import React from 'react';
import {NoteTag} from "./myNoteModel";
import MyNoteSelect from "./MyNoteSelect";
import {observer} from "mobx-react"
import TagsStore from "../../store/TagsStore";
import {BsTagsFill} from "react-icons/bs";
import {ThemeOptions, useTheme} from "@mui/material";

interface Props {
    tags: Array<NoteTag>,
    onChange: (selected: Array<NoteTag>) => void
}

const MyNoteTagsSelect: React.FC<Props> = ({tags, onChange}) => {
    const theme = useTheme<ThemeOptions>()

    return <MyNoteSelect<NoteTag>
        title="Tags"
        entities={tags}
        onChange={onChange}
        allEntities={TagsStore.tags}
        icon={<BsTagsFill className="me-1" size={15} color={theme.my.text_300}/>}
    />
};

export default observer(MyNoteTagsSelect)