import {styled, withStyles} from "@mui/styles";
import {Accordion, AccordionDetails, AccordionSummary, ThemeOptions} from "@mui/material";

export const NavbarStyled = styled("div")({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: 24,
})


export const NavbarItemStyled = styled("div")(({theme}: { theme: ThemeOptions }) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 16px",
    height: 48,
    borderRadius: 4,
    color: theme.my.text_550,
    transition: "all 200ms",
    cursor: "pointer",
    width: "100%",

    "& svg": {
        transition: "all 200ms"
    },

    "&:hover": {
        color: theme.my.accent,

        "& svg": {
            fill: `${theme.my.accent}BF`,
        }
    },
    "&.active": {
        backgroundColor: theme.my.accent_background,
        color: theme.my.accent,

        "& svg": {
            fill: `${theme.my.accent}BF`,
        }
    }
}))

export const NavbarStyledAccordion = withStyles((theme: ThemeOptions) => ({
    root: {
        boxShadow: "none !important",
        "&::before": {
            display: "none"
        },
        "& .MuiButtonBase-root": {
            padding: 0,

        },
        "& .MuiAccordionSummary-content": {
            margin: 0,
        },
        "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
            minHeight: "0px !important",
        },
        "& .MuiAccordionDetails-root": {
            padding: "0px !important",
        },
    },
    expanded: {
        margin: "0px !important",
        "& .MuiButtonBase-root": {
            minHeight: "0px !important"
        },
    }
}))(Accordion)

export const NavbarStyledAccordionSummary = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: 0,
    }
}))(AccordionSummary)

export const NavbarStyledAccordionDetails = withStyles((theme: ThemeOptions) => ({
    root: {
        padding: 0,
    },
}))(AccordionDetails)
