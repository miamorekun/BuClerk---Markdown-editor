import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@mui/styles';
import {themeLight} from './customMuiThemes';
import "./index.scss"

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={themeLight}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
