import React from 'react';
import {RenderElementProps} from "slate-react";
import {QuoteStyled} from "./BCEditorQuoteStyles";

const BcEditorQuoteBlock = (props: RenderElementProps) => {
    return (
        <QuoteStyled {...props.attributes}>
            {props.children}
        </QuoteStyled>
    );
};

export default BcEditorQuoteBlock;