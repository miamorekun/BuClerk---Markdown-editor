import {NotePreview, NoteProject, NoteTag} from "./notes.model";
import {randomProject} from "../projects/projects.service";
import {randomTag} from "../tags/tags.service";

export const projects: NoteProject[] = [
    randomProject(),
    randomProject(),
    randomProject(),
    randomProject(),
    randomProject(),
    randomProject(),
    randomProject(),
    randomProject()
]

export const tags: NoteTag[] = [
    randomTag(),
    randomTag(),
    randomTag(),
    randomTag(),
    randomTag(),
]