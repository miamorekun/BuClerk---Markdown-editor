import React, {PropsWithChildren, useState} from 'react';
import MySelect from "../select/MySelect";
import {InputAdornment, MenuItem, SelectChangeEvent, ThemeOptions, useTheme} from "@mui/material";
import {FaFolder} from "react-icons/fa";
import {MyMenuItem} from "../menu/MyMenuItem";
import {MyCheckbox} from "../checkbox/MyCheckbox";

interface Entity {
    title: string,
    _id: string
}

interface Props<T> {
    entities: Array<T>,
    onChange: (selected: Array<T>) => void,
    allEntities: Array<T>,
    menuItemChildren?: (entity: T) => JSX.Element,
    icon?: JSX.Element,
    title: string
}

function MyNoteSelect<T extends Entity>(props: PropsWithChildren<Props<T>>) {
    const {onChange, entities, allEntities, menuItemChildren, icon, title} = props
    const [selected, setSelected] = useState<string[]>(entities.map(entity => JSON.stringify(entity)))

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const value = event.target.value as typeof selected
        setSelected(value)
    }

    const handleClose = () => {
        const value = selected.map(project => JSON.parse(project))
        if (JSON.stringify(entities) == JSON.stringify(value)) return
        onChange(value)
    }

    return (
        <MySelect
            displayEmpty
            onClose={handleClose}
            onChange={handleChange}
            multiple
            value={selected}
            renderValue={() => {
                return title
            }}
            outlinedInputProps={icon ? ({
                startAdornment: (
                    <InputAdornment position="start">
                        {icon}
                    </InputAdornment>
                )
            }) : ({})}
        >
            <MenuItem disabled value="">
                Projects
            </MenuItem>
            {allEntities.length !== 0 ? (
                allEntities.map((entity) => {
                    const selectItemValue = JSON.stringify(entity)

                    return (
                        <MyMenuItem key={entity._id} value={selectItemValue}>
                            <MyCheckbox checked={selected.indexOf(selectItemValue) > -1}/>
                            {menuItemChildren ? menuItemChildren : entity.title}
                        </MyMenuItem>
                    )
                })
            ) : (
                <MenuItem disabled value="">
                    Loading...
                </MenuItem>
            )}
        </MySelect>
    );
};

export default MyNoteSelect;