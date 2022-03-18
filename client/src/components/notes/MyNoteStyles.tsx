import {styled} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const NotePreviewStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    maxWidth: 310
}))

export const NoteTagStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    padding: "4px 8px",
    borderRadius: 4,
    fontFamily: "Rubik-SemiBold",
    fontSize: 13,
    lineHeight: 1.2,
    marginRight: 6,
    marginBottom: 6
}))

export const NotesList = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    padding: "24px 36px 24px 0",
}))

