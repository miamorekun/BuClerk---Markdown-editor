import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import TextField from "./MySearchTextfield";
import {yupResolver} from '@hookform/resolvers/yup';
import {FormData} from "./mySearchModel";
import {yupSchema} from "./mySearchModel";
import {ReactAttributes} from "../types";

export const MySearch: React.FC<ReactAttributes> = ({className}) => {
    const {control, handleSubmit} = useForm<FormData>({
        resolver: yupResolver(yupSchema),
        mode: "onSubmit"
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField placeholder="Search..." name="query" control={control} className={className}/>
        </form>
    )
}