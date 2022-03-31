import {useEffect, useState} from "react";
import {Http} from "../../http/MyHttp";
import {NotePreview} from "../myNoteModel";
import {useParams} from "react-router-dom";
import {DataModelState} from "./data.model";

interface State extends DataModelState {
    notes: Array<NotePreview>,
}

const useGetMyNotes = (url?: string) => {
    const {sortBy, sortValue} = useParams()
    const [state, setState] = useState<State>({
        notes: [],
        error: null,
        isLoading: false
    })

    useEffect(() => {
        setState({...state, isLoading: true})

        const reqStr = url ? url : (sortBy && sortValue) ?
            `/notes?sortBy=${sortBy}&sortValue=${sortValue}` :
            `/notes`

        Http.get(reqStr)
            .then(res => res.json())
            .then(notes => setState({error: null, notes, isLoading: false}))
            .catch(error => setState({...state, error, isLoading: false}))
    }, [sortBy, sortValue])

    return state
}

export default useGetMyNotes