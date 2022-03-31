export enum NoteStatuses {
    important,
    active,
    completed,
    onHold
}

export interface NoteProject {
    _id: string,
    title: string,
}

export interface NoteTag {
    _id: string
    title: string,
    backgroundColor: string,
    color?: string
}

export interface NotePreview {
    _id: string,
    tags: Array<NoteTag>,
    title: string,
    shortDescription: string,
    deadline: string,
    status: NoteStatuses,
    projects: Array<NoteProject>
}

export interface Note extends Omit<NotePreview, "shortDescription"> {
    description: string,
}