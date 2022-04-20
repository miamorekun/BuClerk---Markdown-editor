import React from 'react';
import BcEditorLeaf from "./BCEditorLeaf";
import {RenderLeafProps} from "slate-react";
import BCEditorPlaceholder from "./BCEditorPlaceholder";

const renderLeafController = (props: RenderLeafProps) => {
    return <BcEditorLeaf{...props}/>
};

export default renderLeafController;