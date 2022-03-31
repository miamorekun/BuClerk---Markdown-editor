import React from 'react';
import {Outlet} from "react-router-dom";
import MyNote from "../notes/MyNote";

const MyNotes = () => {
    return (
        <>
            <Outlet/>
            <MyNote/>
        </>
    );
};

export default MyNotes;