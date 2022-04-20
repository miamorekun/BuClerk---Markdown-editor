import React from 'react';
import {ToolbarStyled} from "./BDEditorToolbarStyles";
import {ButtonGroup} from "@mui/material";
import {MyButtonFilled} from "../../button/MyButton";
import BcEditorToolbarBold from "./commands/BCEditorToolbarBold";
import BcEditorToolbarUnderline from "./commands/BCEditorToolbarUnderline";
import BcEditorToolbarStrikeThrough from "./commands/BCEditorToolbarStrikeThrough";
import BcEditorToolbarItalic from "./commands/BCEditorToolbarItalic";
import BcEditorToolbarQuotes from "./commands/BCEditorToolbarQuotes";
import BcEditorToolbarImage from "./commands/BCEditorToolbarImage";
import BcEditorToolbarCode from "./commands/BCEditorToolbarCode";
import BcEditorToolbarLink from "./commands/BCEditorToolbarLink";
import BcEditorToolbarDivider from "./commands/BCEditorToolbarDivider";
import BcEditorToolbarChecklist from "./commands/BCEditorToolbarChecklist";
import BcEditorToolbarNumberedlist from "./commands/BCEditorToolbarNumberedlist";
import BCEditorToolbarUnorderedlist from "./commands/BCEditorToolbarUnorderedlist";
import BcEditorToolbarHeading from "./commands/BCEditorToolbarHeading";

const BcEditorToolbar = () => {
    return (
        <ToolbarStyled>
            <ButtonGroup>
                <BcEditorToolbarHeading/>
            </ButtonGroup>
            <ButtonGroup className="ms-2">
                <BcEditorToolbarBold/>
                <BcEditorToolbarUnderline/>
                <BcEditorToolbarStrikeThrough/>
                <BcEditorToolbarItalic/>
            </ButtonGroup>
            <ButtonGroup className="ms-2">
                <BcEditorToolbarQuotes/>
                <BcEditorToolbarImage/>
                <BcEditorToolbarCode/>
                <BcEditorToolbarLink/>
                <BcEditorToolbarDivider/>
            </ButtonGroup>
            <ButtonGroup className="ms-2">
                <BcEditorToolbarChecklist/>
                <BcEditorToolbarNumberedlist/>
                <BCEditorToolbarUnorderedlist/>
            </ButtonGroup>
        </ToolbarStyled>
    );
};

export default BcEditorToolbar;