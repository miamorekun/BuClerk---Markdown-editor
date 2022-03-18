import {makeStyles} from "@mui/styles";
import {Radio, RadioProps} from "@mui/material";
import {ThemeOptions} from "@mui/material";
import React from "react"
const useStyles = (props: Props) => makeStyles<ThemeOptions, Props>((theme) => ({
    root: {
        color: `${props.defaultColor ?? theme.my.text_300} !important`,
        "& svg": {
            fill: `${props.defaultColor ?? theme.my.text_300} !important`,
        }
    },
    checked: {
        color: `${props.defaultColor ?? theme.my.accent} !important`,
        "& svg": {
            fill: `${props.defaultColor ?? theme.my.accent} !important`,
        }
    }
}))(props)

interface Props extends RadioProps {
    defaultColor?: string
}

const MyRadio: React.FC<Props> = (props) => {
    const {defaultColor, ...rest} = props
    const classes = useStyles(props)

    return (
        <Radio classes={{
            root: classes.root,
            checked: classes.checked
        }} {...rest}/>
    )
}

export default MyRadio
