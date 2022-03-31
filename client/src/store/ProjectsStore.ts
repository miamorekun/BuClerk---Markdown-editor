import {Note, NoteProject} from "../components/notes/myNoteModel";
import {makeAutoObservable} from "mobx";
import {Http} from "../components/http/MyHttp";

class ProjectsStore {
    projects: Array<NoteProject> = []
    isLoading: boolean = true
    error: Error | null = null

    constructor() {
        makeAutoObservable(this)
        this.get()
    }

    get() {
        this.isLoading = true
        Http.get(`/projects`).then(res => res.json()).then(projects => {
            this.projects = projects
            this.isLoading = false
            this.error = null
        }).catch(e => {
            this.error = e
        })
    }
}


export default new ProjectsStore()