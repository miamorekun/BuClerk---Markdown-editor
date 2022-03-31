import React, {useState} from 'react';
import MySelect from "../select/MySelect";
import {InputAdornment, MenuItem, SelectChangeEvent} from "@mui/material";
import {MyMenuItem} from "../menu/MyMenuItem";
import {MyCheckbox} from "../checkbox/MyCheckbox";
import {NoteStatuses} from "./myNoteModel";
import MyNoteStatus from "./MyNoteStatus";

interface Props {
    onChange: (status: NoteStatuses) => void,
    status: NoteStatuses
}

const MyNoteStatusSelect: React.FC<Props> = ({onChange, status}) => {
    const [selectedStatus, setStatus] = useState(status)

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const value = event.target.value as NoteStatuses
        onChange(value)
    }

    return (
        <MySelect
            onChange={handleChange}
            value={selectedStatus}
            renderValue={() => {
                return <MyNoteStatus status={selectedStatus}/>
            }}
        >
            <MenuItem disabled value="">
                Status
            </MenuItem>
            <MyMenuItem value={NoteStatuses.important}>
                {/*<MyCheckbox checked={selected.indexOf(selectItemValue) > -1}/>*/}
                {/*{menuItemChildren ? menuItemChildren : entity.title}*/}
                <MyNoteStatus status={NoteStatuses.important}/>
            </MyMenuItem>
            <MyMenuItem value={NoteStatuses.active}>
                {/*<MyCheckbox checked={selected.indexOf(selectItemValue) > -1}/>*/}
                <MyNoteStatus status={NoteStatuses.active}/>
            </MyMenuItem>
            <MyMenuItem value={NoteStatuses.completed}>
                {/*<MyCheckbox checked={selected.indexOf(selectItemValue) > -1}/>*/}
                <MyNoteStatus status={NoteStatuses.completed}/>
            </MyMenuItem>
            <MyMenuItem value={NoteStatuses.onHold}>
                {/*<MyCheckbox checked={selected.indexOf(selectItemValue) > -1}/>*/}
                <MyNoteStatus status={NoteStatuses.onHold}/>
            </MyMenuItem>
        </MySelect>
    );
};

export default MyNoteStatusSelect;