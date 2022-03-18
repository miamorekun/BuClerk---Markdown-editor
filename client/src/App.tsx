import React from 'react';
import Router from "./components/MyRoutes";
import MyNavbar from "./components/navbar/MyNavbar";
import {BrowserRouter} from "react-router-dom";
import MyAllNotes from "./components/routes/MyAllNotes";

function App() {
    return (
        <BrowserRouter>
            <div className="bc-app">
                <MyNavbar/>
                <Router/>
            </div>
        </BrowserRouter>
    );
}

export default App
