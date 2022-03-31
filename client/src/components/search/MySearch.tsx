import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import TextField from "./MySearchTextfield";
import {yupResolver} from '@hookform/resolvers/yup';
import {FormData} from "./my-search.model";
import {yupSchema} from "./my-search.model";

export const MySearch: React.FC<{ className?: string }> = ({className}) => {
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