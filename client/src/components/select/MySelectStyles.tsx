import {makeStyles} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const useStyledSelect = makeStyles<ThemeOptions>((theme) => ({
    root: {
        maxWidth: 220,
        height: "36px !important",
        fontSize: "14px !important",
        color: `${theme.my.text_550} !important`,
        backgroundColor: theme.my.text_100,
        transition: "200ms ease-in-out",

        "& .MuiSelect-select": {
            // padding: "0px !important",
            paddingTop: 8,
            paddingBottom: 8
        },

        "& svg": {
            fill: `${theme.my.text_550} !important`,
        },

        "&:hover": {
            backgroundColor: theme.my.accent_background,
        },

        '& fieldset': {
            border: "1px solid transparent !important",
            transition: "200ms ease"
        },

        "&:hover fieldset": {
            borderColor: `${theme.my.accent} !important`,
        },

        '&.Mui-focused fieldset': {
            borderColor: `${theme.my.accent} !important`,
        },
    },
    focused: {
        backgroundColor: theme.my.accent_background,
    }

}))