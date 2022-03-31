import {withStyles} from '@mui/styles'
import {Checkbox, ThemeOptions} from '@mui/material'

export const MyCheckbox = withStyles((theme: ThemeOptions) => ({
    root: {
        color: `${theme.my.text_300} !important`
    },
    checked: {
        color: `${theme.my.accent} !important`
    }
}))(Checkbox)