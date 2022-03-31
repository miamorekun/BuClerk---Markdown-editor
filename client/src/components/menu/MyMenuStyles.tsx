import {makeStyles, withStyles} from "@mui/styles";
import {MenuItem, ThemeOptions} from "@mui/material";

export const useMyMenuStyles = makeStyles<ThemeOptions>((theme) => ({
    paper: {
        maxHeight: "392px !important",
        width: 250,
        boxShadow: "0px 6px 10px rgba(215, 218, 222, 0.75) !important"
    },
}))
