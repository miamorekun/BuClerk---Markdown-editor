import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MyWorkSpace from "./components/routes/MyWorkSpace";
import MyAllNotes from "./components/routes/MyAllNotes";
import MyNotesList from "./components/notes/MyNotesList";
import MyTrash from "./components/routes/MyTrash";
import MyNotes from "./components/routes/MyNotes";

function App() {
    return (
        <div className="bc-app">
            <BrowserRouter>
                <Routes>
                    <Route path="/app" element={<MyWorkSpace/>}>
                        <Route path="notes" element={<MyNotes/>}>
                            <Route index element={<Navigate replace to="all-notes"/>}/>
                            <Route path="all-notes" element={<MyNotesList/>}/>
                            <Route path=":sortBy/:sortValue" element={<MyNotesList/>}/>
                            <Route path="trash" element={<MyTrash/>}/>
                        </Route>
                        <Route path="settings">
                            Hello world!
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App
