import {ThemeOptions} from "@mui/material";
import {styled} from "@mui/styles";

export const CheckListItemStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    display: "flex",
    alignItems: "flex-start",
    margin: "12px 0"
}))