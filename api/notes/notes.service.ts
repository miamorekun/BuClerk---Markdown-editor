import {Note, NotePreview, NoteProject, NoteTag} from "./notes.model";
import faker from "@faker-js/faker";
import {projects, tags} from "./notes.entities";
import {randomTag} from "../tags/tags.service";

export const randomNote: () => NotePreview = () => ({
    _id: faker.datatype.number().toString(),
    tags: [randomTag(), randomTag(), randomTag()],
    title: faker.lorem.sentence(5),
    shortDescription: faker.lorem.sentence(15),
    deadline: "1647786484",
    status: faker.datatype.number({min: 0, max: 3}),
    projects: [projects[1], projects[2], projects[3]]
})

export const randomFullNote: (id: string) => Note = (id) => ({
    _id: id,
    tags: [tags[1], tags[2], tags[3], tags[4]],
    title: faker.lorem.sentence(5),
    description: faker.lorem.sentence(25),
    deadline: "1647786484",
    status: faker.datatype.number({min: 0, max: 3}),
    projects: [projects[1], projects[2], projects[3]]
})