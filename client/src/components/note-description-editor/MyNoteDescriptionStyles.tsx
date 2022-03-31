import {makeStyles} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const useStyledDrawer = makeStyles<ThemeOptions>((theme) => ({
    paper: {
        width: "95% !important",
        padding: 24
    }
}))