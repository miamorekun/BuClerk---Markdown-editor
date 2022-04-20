import React from 'react';
import {RenderLeafProps} from "slate-react";
import {useCodeHighlightLeafDecorator} from "./decorators/codeHighlightDecorator";
import {ThemeOptions, useTheme} from "@mui/material";


const BcEditorLeaf: React.FC<RenderLeafProps> = (props) => {
    const styles: React.CSSProperties = {}
    const properties:{[key: string]: any} = {}

    if (props.leaf.bold)
        styles.fontFamily = "Rubik-Medium"

    if (props.leaf.italic)
        styles.fontStyle = "italic"

    if (props.leaf.underline)
        styles.textDecoration = `underline${styles.textDecoration ? ` ${styles.textDecoration}` : ``}`

    if (props.leaf.strikethrough)
        styles.textDecoration = `line-through${styles.textDecoration ? ` ${styles.textDecoration}` : ``}`

    const codeStyles = useCodeHighlightLeafDecorator(props)
    Object.assign(styles, codeStyles)

    return (
        <span style={styles} {...props.attributes} {...properties}>
            {props.children}
        </span>
    );
};

export default BcEditorLeaf;