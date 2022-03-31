import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@mui/styles';
import {themeLight} from './customMuiThemes';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';
import "./index.scss"
import {configure, spy} from "mobx";
import MyNoteDescriptionModal from "./components/note-description-editor/MyNoteDescriptionModal";

spy((ev) => {
    if (ev.type === "action") {
        console.log(ev)
    }
})

setTimeout(() => {
    configure({
        reactionScheduler: (f) => {
            setTimeout(f, 1);
        },
    });
}, 1);

ReactDOM.render(
    <React.StrictMode>
        <LocalizationProvider dateAdapter={DateAdapter}>
            <ThemeProvider theme={themeLight}>
                <MyNoteDescriptionModal/>
                <App/>
            </ThemeProvider>
        </LocalizationProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
