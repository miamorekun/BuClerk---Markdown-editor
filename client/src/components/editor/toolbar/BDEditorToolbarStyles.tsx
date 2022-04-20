import {styled} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const ToolbarStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    display: "flex",

    "& button": {
        "& svg": {
            fill: theme.my.text_500,
            transition: "all 200ms"
        },

        "&:hover svg, &.active svg": {
            fill:theme.my.accent
        }
    }
}))