import React from 'react';
import {RenderElementProps, useFocused, useSelected} from "slate-react";
import {BcEditorCodeItemStyled} from "./BCEditorCodeStyles";

const BcEditorCodeItem = (props:RenderElementProps) => {
    const focus = useSelected()

    return (
        <BcEditorCodeItemStyled className={focus ? "active": ``} {...props.attributes}>
            {props.children}
        </BcEditorCodeItemStyled>
    );
};

export default BcEditorCodeItem;