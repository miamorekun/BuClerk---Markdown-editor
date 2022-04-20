import {withStyles} from "@mui/styles";
import {ButtonBase, ThemeOptions} from "@mui/material";

export const MyButton = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: "0 16px !important",
        height: 36,
        backgroundColor: `${theme.my.accent_light} !important`,
        color: `${theme.my.accent} !important`,
        borderRadius: "4px !important",
        fontSize: 14,
        fontFamily: "Rubik-Medium",
    }
}))(ButtonBase)

export const MyButtonError = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: "0 16px !important",
        height: 36,
        backgroundColor: `${theme.my.tomato_light} !important`,
        color: `${theme.my.tomato} !important`,
        borderRadius: "4px !important",
        fontSize: 14,
        fontFamily: "Rubik-Medium",
    }
}))(ButtonBase)

export const MyButtonSuccess = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: "0 16px !important",
        height: 36,
        backgroundColor: `${theme.my.success_light} !important`,
        color: `${theme.my.success} !important`,
        borderRadius: 4,
        fontSize: 14,
        fontFamily: "Rubik-Medium",
    }
}))(ButtonBase)

export const MyButtonFilled = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: "0 14px !important",
        minWidth: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 36,
        backgroundColor: `${theme.my.text_100} !important`,
        color: `${theme.my.text_500} !important`,
        borderRadius: 4,
        fontSize: 14,
        fontFamily: "Rubik-Medium",
    }
}))(ButtonBase)

export const MyButtonClear = withStyles((theme: ThemeOptions) => ({
    root: {
        minWidth: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 36,
        color: `${theme.my.text_500} !important`,
        borderRadius: "50% !important",
        fontSize: 14,
        fontFamily: "Rubik-Medium",
        "&:hover": {
            backgroundColor: theme.my.text_100
        }
    }
}))(ButtonBase)