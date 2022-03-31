import {withStyles} from "@mui/styles";
import {MenuItem, ThemeOptions} from "@mui/material";

export const MyMenuItem = withStyles((theme: ThemeOptions) => ({
    root: {
        color: `${theme.my.text_550} !important`,
        "&:hover": {
            color: `${theme.my.text_700} !important`,
            backgroundColor: `${theme.my.accent_background} !important`,
        }
    },
    selected: {
        backgroundColor: `${theme.my.accent_background} !important`,
        color: `${theme.my.text_700} !important`
    }
}))(MenuItem)