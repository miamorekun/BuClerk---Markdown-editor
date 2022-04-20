import {ThemeOptions} from "@mui/material";
import {styled} from "@mui/styles";

export const BCEditorCodeStyled = styled("code")(({theme}: { theme: ThemeOptions }) => ({
    counterReset: "list-number",
}))

export const BcEditorCodeItemStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    margin: "3px 0",

    "&:before": {
        display: "inline-block",
        width: "36px",
        counterIncrement: "list-number",
        content: "counter(list-number)",
        color: `${theme.my.text_500}80`,
        fontSize: 16,
    },
    "&.active:before": {
        color: theme.my.accent,
    }
}))