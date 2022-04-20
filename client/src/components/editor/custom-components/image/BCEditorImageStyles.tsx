import {ThemeOptions} from "@mui/material";
import {styled} from "@mui/styles";

export const ImageBlockStyled = styled("img")(({theme}: { theme: ThemeOptions }) => ({
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%"
}))