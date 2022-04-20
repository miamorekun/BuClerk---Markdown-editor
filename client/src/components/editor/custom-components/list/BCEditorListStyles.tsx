import {ThemeOptions} from "@mui/material";
import {styled} from "@mui/styles";
import React from "react";

const BCEditorListStyles: React.CSSProperties = {
    paddingLeft: 18,
    margin: "12px 0",
}

export const BCEditorListNumbered = styled("ol")(({theme}: { theme: ThemeOptions }) => ({
    ...BCEditorListStyles,
}))

export const BCEditorListOrdered = styled("ul")(({theme}: { theme: ThemeOptions }) => ({
    ...BCEditorListStyles
}))

export const BCEditorListItem = styled("li")(({theme}: { theme: ThemeOptions }) => ({
    "&::marker": {
        margin: "0px !important",
    },
    margin: "12px 0"
}))