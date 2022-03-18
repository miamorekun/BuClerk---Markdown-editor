import React from 'react';

import {
    Routes,
    Route,
} from "react-router-dom";
import MyAllNotes from "./routes/MyAllNotes";
import MyNotesList from "./notes/MyNotesList";
import MyProjects from "./routes/MyProjects";
import MySortByStatus from "./routes/MySortByStatus";
import MySortByTags from "./routes/MySortByTags";


const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/all-notes" element={<MyAllNotes/>}/>
            <Route path="/projects/:projectId" element={<MyProjects/>}/>
            <Route path="/status/:statusId" element={<MySortByStatus/>}/>
            <Route path="/tags/:tagId" element={<MySortByTags/>}/>
            <Route path="/my-trash" element={<MyNotesList/>}/>
        </Routes>
    )
};

export default MyRoutes