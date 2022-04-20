import React from 'react';
import {ThemeOptions, useTheme} from "@mui/material";

const BCEditorPlaceholder = () => {
    const theme = useTheme<ThemeOptions>()

    return (
        <span
            style={{color: theme.my.text_700, opacity: 0.3, position: "absolute", top: 0, left: 0, zIndex: -1}}
            contentEditable={false}
        >
                    Type something...
        </span>
    );
};

export default BCEditorPlaceholder;