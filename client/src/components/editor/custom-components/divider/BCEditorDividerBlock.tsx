import React from 'react';
import {ImageElement} from "../../models/image";
import {RenderElementProps} from "slate-react";
import {ThemeOptions, useTheme} from "@mui/material";

const BcEditorDividerBlock = (props: RenderElementProps) => {
    const theme = useTheme<ThemeOptions>()

    return (
        <div contentEditable={false} {...props.attributes} style={{padding: "4px 0"}}>
            <div style={{
                background: theme.my.text_300,
                width: "100%",
                height: 1,
            }}/>
        </div>
    );
};

export default BcEditorDividerBlock;