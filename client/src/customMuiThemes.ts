import {createTheme} from "@mui/material";

declare module '@mui/material/styles' {
    interface ThemeOptions {
        my: {
            accent_background: string,
            accent: string,
            accent_light: string,
            success: string,
            success_light: string,
            tomato: string,
            tomato_light: string,
            warning: string,
            warning_light: string,
            warning_700: string,
            warning_200: string,
            purple: string,
            red: string,
            info: string,
            primary_gradient: {
                color_1: string,
                color_2: string
            },
            text_700: string,
            text_600: string,
            text_550: string,
            text_500: string,
            text_300: string,
            text_100: string,
            primaryBackground: string,
        }
    }
    interface Theme {
        my: {
            accent_background: string,
            accent: string,
            accent_light: string,
            success: string,
            success_light: string,
            tomato: string,
            tomato_light: string,
            warning: string,
            warning_light: string,
            warning_700: string,
            warning_200: string,
            purple: string,
            red: string,
            info: string,
            primary_gradient: {
                color_1: string,
                color_2: string
            },
            text_700: string,
            text_600: string,
            text_550: string,
            text_500: string,
            text_300: string,
            text_100: string,
            primaryBackground: string,
        }
    }
}

export const themeLight = createTheme({
    my: {
        accent_background: "#F7F8FE",
        accent: "#6172F3",
        accent_light: "#F1F6FF",
        success: "#32D583",
        success_light: "#ECFDF3",
        tomato: "#FF6347",
        tomato_light: "#FFEFED",
        warning: "#FFA500",
        warning_light: "#FFF6E5",
        warning_700: "#B54708",
        warning_200: "#FEDF89",
        purple: "#7F56D9",
        red: "#D92D20",
        info: "#1570EF",
        primary_gradient: {
            color_1: "#6172F3",
            color_2: "#B2C8FF"
        },
        text_700: "#404653",
        text_600: "#70747E",
        text_550: "#7A8290",
        text_500: "#98A2B3",
        text_300: "#D7DADE",
        text_100: "#F7F8F8",
        primaryBackground: "#ffffff"
    },
    typography: {
        fontFamily: [
            "Rubik-Regular",
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})