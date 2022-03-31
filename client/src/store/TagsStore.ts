import {Note, NoteTag} from "../components/notes/myNoteModel";
import {makeAutoObservable} from "mobx";
import {Http} from "../components/http/MyHttp";

class TagsStore {
    tags: Array<NoteTag> = []
    isLoading: boolean = true
    error: Error | null = null

    constructor() {
        makeAutoObservable(this)
        this.get()
    }

    get() {
        this.isLoading = true
        Http.get(`/tags`).then(res => res.json()).then(tags => {
            this.tags = tags
            this.isLoading = false
            this.error = null
        }).catch(e => {
            this.error = e
        })
    }
}


export default new TagsStore()