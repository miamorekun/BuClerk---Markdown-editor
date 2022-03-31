import React from 'react';
import {MySearch} from "../search/MySearch";
import {NavbarStyled} from "./MyNavbarStyles";
import MyNavbarItem from "./MyNavbarItem";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import {FaFolder, FaTrash} from "react-icons/fa";
import {ThemeOptions, useTheme} from "@mui/material";
import MyNavbarItemMenu from "./MyNavbarItemMenu";
import MyNavbarItemChecked from "./MyNavbarItemChecked";
import {BsFillPatchCheckFill, BsTagsFill} from "react-icons/bs"
import MyProfile from "../profile/MyProfile";
import {NoteStatuses} from "../notes/myNoteModel";

const MyNavbar: React.FC = () => {
    const theme: ThemeOptions = useTheme()

    return (
        <NavbarStyled>
            <MySearch className="w-100"/>
            <div style={{width:262}} className="mt-3 flex-grow-1 overflow-scroll">
                <MyNavbarItem
                    icon={
                        <BsFillCalendarCheckFill size={18} color={theme.my.text_300}/>
                    }
                    title="All Notes"
                    to={`notes/all-notes`}
                />
                <MyNavbarItemMenu
                    icon={
                        <FaFolder size={18} color={theme.my.text_300}/>
                    }
                    title="Projects"
                    to={`notes/projects`}
                >
                    <MyNavbarItemChecked
                        title="BuClerk TA"
                        to={`notes/projects/project-1`}
                    />
                    <MyNavbarItemChecked
                        title="BuClerk File Manager"
                        to={`notes/projects/project-2`}
                    />
                    <MyNavbarItemChecked
                        title="BuClerk Accounting 1"
                        to={`notes/projects/project-3`}
                    />
                </MyNavbarItemMenu>
                <MyNavbarItemMenu
                    icon={
                        <BsFillPatchCheckFill size={18} color={theme.my.text_300}/>
                    }
                    title="Sort by Status"
                    to={`notes/status`}
                >
                    <MyNavbarItemChecked
                        title="Important"
                        to={`notes/status/${NoteStatuses.important}`}
                        color={theme.my.tomato}
                    />
                    <MyNavbarItemChecked
                        title="Active"
                        to={`notes/status/${NoteStatuses.active}`}
                        color={theme.my.warning}
                    />
                    <MyNavbarItemChecked
                        title="Completed"
                        to={`notes/status/${NoteStatuses.completed}`}
                        color={theme.my.success}
                    />
                    <MyNavbarItemChecked
                        title="On Hold"
                        to={`notes/status/${NoteStatuses.onHold}`}
                        color={theme.my.text_550}
                    />
                </MyNavbarItemMenu>
                <MyNavbarItemMenu
                    icon={
                        <BsTagsFill size={18} color={theme.my.text_300}/>
                    }
                    title="Sort by Tags"
                    to={`notes/tags`}
                >
                    <MyNavbarItemChecked
                        title="Java Script"
                        to={`notes/tags/java-script`}
                    />
                    <MyNavbarItemChecked
                        title="Css (SCSS) React"
                        to={`notes/tags/css-react`}
                    />
                    <MyNavbarItemChecked
                        title="Front-end"
                        to={`notes/tags/front-end`}
                    />
                </MyNavbarItemMenu>
                <MyNavbarItem
                    icon={
                        <FaTrash size={18} color={theme.my.text_300}/>
                    }
                    title="My Trash"
                    to="notes/trash"
                />
            </div>
            <MyProfile/>
        </NavbarStyled>
    );
}

export default MyNavbar;