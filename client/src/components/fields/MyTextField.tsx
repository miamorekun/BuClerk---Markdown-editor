import {styled, withStyles} from '@mui/styles'
import {TextField, ThemeOptions} from '@mui/material'

// export const MyTextField = withStyles((theme: ThemeOptions) => ({
//     root: {
//         '& label.Mui-focused': {},
//         '& .MuiInput-underline:after': {},
//         '& .MuiOutlinedInput-root': {
//             backgroundColor: theme.my.text_100,
//             borderRadius: 4,
//             transition: "200ms ease-in-out",
//
//             "&:hover": {
//                 backgroundColor: theme.my.accent_background,
//             },
//
//             "&.Mui-focused": {
//                 backgroundColor: theme.my.accent_background,
//             },
//
//             '& fieldset': {
//                 border: "1px solid transparent",
//                 transition: "200ms ease-in-out",
//             },
//             '&:hover fieldset': {
//                 border: `1px solid ${theme.my.accent}`
//             },
//             '&.Mui-focused fieldset': {
//                 border: `1px solid ${theme.my.accent}`
//             },
//         },
//         "& .MuiOutlinedInput-input": {
//             color: theme.my.text_700,
//             padding: "12.5px 16px",
//             "&::placeholder": {
//                 color: theme.my.text_550,
//                 opacity: 1
//             },
//         }
//     }
// }))(TextField)

export const MyTextFieldFilled = withStyles((theme: ThemeOptions) => ({
    root: {
        '& label.Mui-focused': {},
        '& .MuiInput-underline:after': {},
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.my.text_100,
            borderRadius: 4,
            transition: "200ms ease-in-out",

            "&:hover": {
                backgroundColor: theme.my.accent_background,
            },

            "&.Mui-focused": {
                backgroundColor: theme.my.accent_background,
            },

            '& fieldset': {
                border: "1px solid transparent",
                transition: "200ms ease-in-out",
            },
            '&:hover fieldset': {
                border: `1px solid ${theme.my.accent}`
            },
            '&.Mui-focused fieldset': {
                border: `1px solid ${theme.my.accent}`
            },
        },
        "& .MuiOutlinedInput-input": {
            color: theme.my.text_700,
            padding: "12.5px 16px",
            "&::placeholder": {
                color: theme.my.text_550,
                opacity: 1
            },
        }
    }
}))(TextField)