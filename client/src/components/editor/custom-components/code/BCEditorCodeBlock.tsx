import React, {useEffect, useRef} from 'react';
import {RenderElementProps} from "slate-react";
import {ThemeOptions, useTheme} from "@mui/material";
import {ThemeOfStyles} from "@mui/styles";
import {BCEditorCodeStyled} from "./BCEditorCodeStyles";

const BcEditorCodeBlock = (props: RenderElementProps) => {
    const theme = useTheme<ThemeOptions>()

    return (
        <pre {...props.attributes} style={{
            backgroundColor: `${theme.my.text_100}80`,
            margin: "24px 0",
            padding: "24px 12px",
            borderRadius: 4,
        }}>
            <BCEditorCodeStyled>
                {props.children}
            </BCEditorCodeStyled>
        </pre>
    );
};

export default BcEditorCodeBlock;