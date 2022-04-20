import React from 'react';
import {RenderElementProps} from "slate-react";
import {ListElement} from "../../models/list";
import {BCEditorListNumbered, BCEditorListOrdered} from "./BCEditorListStyles";

const BcEditorListBlock = (props: RenderElementProps) => {
    const element = props.element as ListElement
    const TypeList = element.type === "numbered-list" ? BCEditorListNumbered : BCEditorListOrdered

    return (
        <TypeList {...props.attributes}>
            {props.children}
        </TypeList>
    );
};

export default BcEditorListBlock;