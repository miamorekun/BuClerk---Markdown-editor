import {withStyles} from "@mui/styles";
import {ThemeOptions, Tooltip, tooltipClasses} from "@mui/material";

const MyTooltip = withStyles((theme: ThemeOptions) => ({
    popper: {
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.my.text_700
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.my.text_700
        }
    }
}))(Tooltip)

export default MyTooltip;