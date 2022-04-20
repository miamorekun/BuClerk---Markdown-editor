import React from 'react';
import {RenderElementProps} from "slate-react";
import {ImageBlockStyled} from "./BCEditorImageStyles";
import {ImageElement} from "../../models/image";

const BcEditorImageBlock = (props: RenderElementProps) => {
    const element = props.element as ImageElement

    return (
        <div style={{padding: "12px 0"}} {...props.attributes} contentEditable={false}>
            <ImageBlockStyled src={element.url}/>
        </div>
    );
};

export default BcEditorImageBlock;