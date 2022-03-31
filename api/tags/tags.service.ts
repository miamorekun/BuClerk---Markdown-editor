import {NoteTag} from "../notes/notes.model";
import faker from "@faker-js/faker";

export const randomTag: () => NoteTag = () => ({
    _id: faker.datatype.number().toString(),
    title: faker.lorem.word(),
    backgroundColor: faker.internet.color(),
})