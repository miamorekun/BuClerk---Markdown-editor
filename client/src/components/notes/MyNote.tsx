import React from 'react';
import {NoteStyled} from "./MyNoteStyles";
import {ThemeOptions, useTheme} from "@mui/material";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import {observer} from "mobx-react";
import NoteStore from "../../store/NoteStore"
import NyNoteProjectsSelect from "./NyNoteProjectsSelect";
import {motion} from "framer-motion"
import {leftBounceAnim} from "../animations/motion.variant";
import MyNoteTagsSelect from "./MyNoteTagsSelect";
import MyNoteStatusSelect from "./MyNoteStatusSelect";
import MyNoteDatePicker from "./MyNoteDatePicker";
import moment from "moment";
import {date_time_format} from "../moment-dt-config/my-dt-formats";
import MyNoteCreateDescriptionButton from "./MyNoteCreateDescriptionButton";

interface Props {
    todoId?: string
}

const MyNotePattern: React.FC = ({children}) => {
    const theme = useTheme<ThemeOptions>()
    return (
        <div
            className="w-100 h-100 d-flex justify-content-center align-items-center"
            style={{color: theme.my.text_500, fontFamily: "Rubik-Medium", fontSize: 16}}
        >
            {children}
        </div>
    )
}

const MyNotePlug = () => {
    const theme = useTheme<ThemeOptions>()

    return (
        <MyNotePattern>
            <div>
                <BsFillCalendarCheckFill
                    style={{verticalAlign: "sub"}}
                    size={20}
                    color={theme.my.text_300}
                    className="me-3"
                />
                Select Note from list
            </div>
        </MyNotePattern>
    )
}

const MyNoteLoading = () => {
    return (
        <MyNotePattern>
            <div>
                Loading...
            </div>
        </MyNotePattern>
    )
}

const MyNoteError = () => {
    return (
        <MyNotePattern>
            <div>
                Error!
            </div>
        </MyNotePattern>
    )
}

const MyNote: React.FC<Props> = () => {
    const theme = useTheme<ThemeOptions>()

    return (
        <NoteStyled>{
            !NoteStore.error ? !NoteStore.isLoading ? (
                NoteStore.note ? (
                    <motion.div
                        variants={leftBounceAnim}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <div className="w-100 d-flex">
                            <div className="flex-grow-1 d-flex align-items-center" style={{
                                height: 48,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                fontSize: 18,
                                color: theme.my.text_700,
                                fontFamily: "Rubik-Medium"
                            }}>
                                {NoteStore.note.title}
                            </div>
                        </div>
                        <div className="d-flex align-items-center" style={{marginTop: 6}}>
                            <NyNoteProjectsSelect
                                onChange={(data) => {
                                    console.log(data)
                                }}
                                projects={NoteStore.note.projects}
                            />
                            <div className="ms-2">
                                <MyNoteTagsSelect
                                    onChange={(data) => {
                                        console.log(data)
                                    }}
                                    tags={NoteStore.note.tags}
                                />
                            </div>
                            <div className="ms-2">
                                <MyNoteStatusSelect
                                    onChange={(data) => {
                                        console.log(data)
                                    }}
                                    status={NoteStore.note.status}
                                />
                            </div>
                            <div className="ms-2">
                                <MyNoteDatePicker value={moment.unix(parseInt(NoteStore.note.deadline))} onChange={(date) => console.log(date)} inputFormat={date_time_format}/>
                            </div>
                        </div>
                        <div style={{marginTop: 24}}>
                            <MyNoteCreateDescriptionButton/>
                        </div>
                    </motion.div>
                ) : <MyNotePlug/>
            ) : <MyNoteLoading/> : <MyNoteError/>
        } </NoteStyled>
    );
};

export default observer(MyNote);