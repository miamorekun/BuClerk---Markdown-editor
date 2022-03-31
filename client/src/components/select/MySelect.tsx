import React from 'react';
import {SelectProps} from '@mui/material/Select';
import {Select, OutlinedInput, OutlinedInputProps} from "@mui/material";
import {useStyledSelect} from "./MySelectStyles";
import {GoChevronDown} from "react-icons/go";
import {useMyMenuStyles} from "../menu/MyMenuStyles";

interface Props extends SelectProps {
    outlinedInputProps?: OutlinedInputProps
}


const MySelect: React.FC<Props> = ({children, outlinedInputProps, onChange, ...rest}) => {
    const classes = useStyledSelect()
    const menuClasses = useMyMenuStyles()

    return (
        <Select
            onChange={onChange}
            input={<OutlinedInput classes={classes} {...outlinedInputProps}/>}
            IconComponent={GoChevronDown}
            {...rest}
            MenuProps={{classes: menuClasses}}
        >
            {children}
        </Select>
    );
};

export default MySelect;