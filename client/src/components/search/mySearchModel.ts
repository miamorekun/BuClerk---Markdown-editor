import * as yup from "yup";

export type FormData = {
    query: string,
}

export const yupSchema = yup.object().shape({
    query: yup.string().required("Required Field").max(256, "No more 256 chars"),
})
