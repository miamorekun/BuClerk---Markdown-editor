import {styled} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const StyledEditor = styled("textarea")(({theme}: { theme: ThemeOptions }) => ({
    backgroundColor: theme.my.accent_background,
    color: theme.my.text_700,
    padding: 24,
    border: "none",
    "&:hover": {
        border: "none"
    },
    "&:focus": {
        outline: "none"
    },
    width: "50%"
}))

export const StyledMarkDown = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    overflow: "scroll",
    width: "50%",
    marginLeft: 24
}))