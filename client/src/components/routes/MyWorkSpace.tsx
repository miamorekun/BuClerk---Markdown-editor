import React from 'react';
import {Outlet} from "react-router-dom";
import MyNavbar from "../navbar/MyNavbar";

const MyWorkSpace = () => {
    return (
        <>
            <MyNavbar/>
            <Outlet/>
        </>
    );
};

export default MyWorkSpace;