import {ThemeOptions} from "@mui/material";
import {styled} from "@mui/styles";

export const QuoteStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    padding: "14px 24px",
    borderLeft: `2px solid ${theme.my.accent}`,
    color: theme.my.text_550,
    margin: "12px 0",
}))