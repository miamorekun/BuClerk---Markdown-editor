import React from 'react';
import {useParams} from "react-router-dom";
import MyNotesList from "../notes/MyNotesList";

const MyProjects = () => {
    const {projectId} = useParams()

    return (
        <MyNotesList/>
    );
};

export default MyProjects;