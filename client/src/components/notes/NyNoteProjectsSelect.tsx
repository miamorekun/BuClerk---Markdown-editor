import React from 'react';
import {NoteProject} from "./myNoteModel";
import ProjectsStore from "../../store/ProjectsStore"
import MyNoteSelect from "./MyNoteSelect";
import {FaFolder} from "react-icons/fa";
import {ThemeOptions, useTheme} from "@mui/material";

interface Props {
    projects: Array<NoteProject>,
    onChange: (selected: Array<NoteProject>) => void
}

const NyNoteProjectsSelect: React.FC<Props> = ({projects, onChange}) => {
    const theme = useTheme<ThemeOptions>()

    return <MyNoteSelect<NoteProject> title="Projects" icon={  <FaFolder className="me-1" size={15} color={theme.my.text_300}/>} entities={projects} onChange={onChange} allEntities={ProjectsStore.projects}/>
};

export default NyNoteProjectsSelect