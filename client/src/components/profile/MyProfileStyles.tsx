import {styled} from "@mui/styles";
import {ThemeOptions} from "@mui/material";

export const ProfileStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    marginTop: 24,
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "0 16px"
}))

export const ProfileStyledAvatar = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    width: 48,
    height: 48,
    background:`linear-gradient(148.17deg, ${theme.my.primary_gradient.color_1}  23.5%, ${theme.my.primary_gradient.color_2} 109.97%)`,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontFamily: "Rubik-Medium"
}))
