import {NoteProject} from "../notes/notes.model";
import faker from "@faker-js/faker";

export const randomProject: () => NoteProject = () => ({
    _id: faker.datatype.number().toString(),
    title: faker.lorem.word(),
})