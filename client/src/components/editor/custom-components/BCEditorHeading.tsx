import React from 'react';
import {RenderElementProps} from "slate-react";
import {HeadingElement} from "../models/heading";
import BCEditorPlaceholder from "./BCEditorPlaceholder";
const BcEditorHeading = (props: RenderElementProps) => {

    const styles: React.CSSProperties = {position: "relative"}
    const element = props.element as HeadingElement

    switch (element.level) {
        case 2:
            return <h2 style={styles} {...props.attributes}>{props.children}</h2>
        case 3:
            return <h3 style={styles} {...props.attributes}>{props.children}</h3>
        case 4:
            return <h4 style={styles} {...props.attributes}>{props.children}</h4>
        case 5:
            return <h5 style={styles} {...props.attributes}>{props.children}</h5>
        case 6:
            return <h6 style={styles} {...props.attributes}>{props.children}</h6>
        default:
            return <h1 style={styles} {...props.attributes}>{props.children}</h1>
    }
};

export default BcEditorHeading;