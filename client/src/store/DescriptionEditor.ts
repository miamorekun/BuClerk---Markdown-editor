import {Note, NoteTag} from "../components/notes/myNoteModel";
import {makeAutoObservable} from "mobx";

class DescriptionEditor {
    isOpen: boolean = false

    constructor() {
        makeAutoObservable(this)
    }

    open() {
        this.isOpen = true
    }

    close() {
        this.isOpen = false
    }
}


export default new DescriptionEditor()