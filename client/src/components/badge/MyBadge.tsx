import React from 'react';
import Badge from '@mui/material/Badge';
import {makeStyles} from "@mui/styles";
import {BadgeProps, ThemeOptions} from "@mui/material";
import BadgeUnstyledProps from "@mui/base/BadgeUnstyled/BadgeUnstyledProps";


const useStyles = makeStyles<ThemeOptions, Props>((theme,) => ({
    root: (props) => ({
        "& .MuiBadge-badge": {
            backgroundColor: `${props.defaultColor ? props.defaultColor : theme.my.tomato} !important`,
            width: props.size ? props.size : "100%",
            height: props.size ? props.size : "100%",
        }
    })
}))

interface Props extends BadgeProps {
    defaultColor?: string,
    size?: number
}

const MyBadge: React.FC<Props> = (props) => {
    const classes = useStyles(props)
    const {
        children,
        ...rest
    } = props

    return (
        <Badge classes={classes} {...rest}>
            {children}
        </Badge>
    );
};

export default MyBadge;