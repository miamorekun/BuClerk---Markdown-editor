import React from 'react';
import {MyTextFieldFilled} from "../fields/MyTextField";
import InputAdornment from "@mui/material/InputAdornment";
import {IoSearch} from "react-icons/io5";
import {ThemeOptions, useTheme} from "@mui/material";
import {Control, Controller, UseControllerProps} from "react-hook-form"
import {FormData} from "./mySearchModel";
import {ReactAttributes} from "../types";

interface Props extends ReactAttributes, UseControllerProps<FormData> {
    placeholder?: string,
}

const TextField: React.FC<Props> = ({placeholder = "", control, name, defaultValue = "", ...rest}) => {
    const {my}: ThemeOptions = useTheme()

    return (
        <Controller
            control={control}
            name={name}
            render={({
                         field: {onChange, onBlur, value, name, ref},
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <MyTextFieldFilled
                    onBlur={onBlur}
                    onChange={onChange}
                    inputRef={ref}
                    error={!!error}
                    helperText={error?.message}
                    placeholder={placeholder}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IoSearch style={{height: 18, width: "auto", color: my.text_550}}/>
                            </InputAdornment>
                        ),
                    }}
                    {...rest}
                />
            )}
        />
    );
};

export default TextField;