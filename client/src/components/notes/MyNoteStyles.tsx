import {makeStyles, styled} from "@mui/styles";
import {ThemeOptions} from "@mui/material";
import {motion} from "framer-motion";

export const useNotePreviewStyles = makeStyles<ThemeOptions>((theme) => ({
    root: {
        "&:first-child": {
            marginTop: "12px",
        },
        "&:not(:last-child)": {
            paddingBottom: "24px",
            borderBottom: `1px solid ${theme.my.text_300}`
        },
        "&:not(:first-child)": {
            marginTop: "24px",
        },
        "& .bc__note-preview__title": {
            transition: "all 200ms ease-in-out",
            color:theme.my.text_700,
            fontFamily: "Rubik-Medium",
            cursor: "pointer",

            "&:hover, &.active": {
                color:theme.my.accent
            }
        }
    }
}))

export const NoteTagStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    padding: "4px 8px",
    borderRadius: 4,
    fontFamily: "Rubik-SemiBold",
    fontSize: 12,
    lineHeight: 1.2,
    marginRight: 6,
    marginBottom: 6
}))

export const NotesList = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    padding:"24px 0",
    display: "flex",
    flexDirection: "column",
    height: "100%",
}))

export const NoteStyled =  styled("div")(({theme}: { theme: ThemeOptions }) => ({
    flexGrow:1,
    padding: "24px 36px 24px 12px"
}))
