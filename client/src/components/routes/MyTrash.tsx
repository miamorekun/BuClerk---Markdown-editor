import React from 'react';
import MyNotesList from "../notes/MyNotesList";

const MyTrash = () => {
    const reqStr = "/notes?filter=trash"
    return <MyNotesList url={reqStr}/>
};

export default MyTrash;