import {Note} from "../components/notes/myNoteModel";
import {makeAutoObservable} from "mobx";
import {Http} from "../components/http/MyHttp";


class NoteStore {
    note?: Note
    isLoading: boolean = false
    error: Error | null = null

    constructor() {
        makeAutoObservable(this)
    }

    get(id: string) {
        if(this.note?._id === id) return

        this.note = undefined
        this.isLoading = true
        Http.get(`/notes/${id}`).then(res => res.json()).then(note => {
            this.note = note
            this.isLoading = false
            this.error = null
        }).catch(e => {
            this.error = e
        })
    }
}


export default new NoteStore()