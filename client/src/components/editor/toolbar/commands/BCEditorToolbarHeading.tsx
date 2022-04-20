import React from 'react';
import MySelect from "../../../select/MySelect";
import {MyMenuItem} from "../../../menu/MyMenuItem";
import {SelectChangeEvent} from "@mui/material";
import {useSelected, useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarHeading = () => {
    const editor = useSlate()

    const onChange = (e: SelectChangeEvent<unknown>) => {
        const value = e.target.value as number
        MyEditor.toggleHeadingBlock(editor, value)
    }

    return (
        <MySelect
            value={""}
            renderValue={(v) => {
                const val = v as number | string
                if (val === "") {
                    return "Heading"
                } else return val
            }}
            displayEmpty
            onChange={onChange}
        >
            <MyMenuItem disabled value={""}>
                Heading
            </MyMenuItem>
            <MyMenuItem value={0}>
                Normal
            </MyMenuItem>
            <MyMenuItem value={1}>
                H1
            </MyMenuItem>
            <MyMenuItem value={2}>
                H2
            </MyMenuItem>
            <MyMenuItem value={3}>
                H3
            </MyMenuItem>
            <MyMenuItem value={4}>
                H4
            </MyMenuItem>
            <MyMenuItem value={5}>
                H5
            </MyMenuItem>
            <MyMenuItem value={6}>
                H6
            </MyMenuItem>
        </MySelect>
    );
};

export default BcEditorToolbarHeading;