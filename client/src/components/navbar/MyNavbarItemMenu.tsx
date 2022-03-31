import React, {useState} from 'react';
import {
    NavbarStyledAccordion,
    NavbarStyledAccordionDetails,
    NavbarStyledAccordionSummary
} from "./MyNavbarStyles";
import MyNavbarItem, {Props as MyNavbarItemProps} from "./MyNavbarItem"
import {GoChevronDown} from "react-icons/go";
import {ThemeOptions, useTheme} from "@mui/material";
import {useLocation, useMatch, useParams} from "react-router-dom";
import useActive from "./useActive";

interface Props extends MyNavbarItemProps {
    isOpen?: boolean,
    to: string,
    query?: boolean
}

const MyNavbarItemMenu: React.FC<Props> = ({query, to, children, isOpen = false, ...rest}) => {
    const theme: ThemeOptions = useTheme()
    const [isExpanded, setExpanded] = useState(isOpen)
    const active = useActive(to)

    const onStateChange = (e: React.SyntheticEvent, expanded: boolean) => {
        setExpanded(expanded)
    }

    return (
        <NavbarStyledAccordion
            onChange={onStateChange}
            defaultExpanded={isOpen}
        >
            <NavbarStyledAccordionSummary>
                <MyNavbarItem
                    {...rest}
                    endIcon={(
                        <GoChevronDown
                            size={18} color={theme.my.text_550} style={isExpanded ? {transform: "rotate(-180deg)"} : {}}
                        />
                    )}
                    defaultActive={active}
                />
            </NavbarStyledAccordionSummary>
            <NavbarStyledAccordionDetails>
                {children}
                <div
                    style={{
                        width: "100%",
                        margin: "12px 0",
                        padding: "0 16px"
                    }}
                >
                    <div style={{
                        backgroundColor: theme.my.text_300,
                        height: 1,
                        width: "100%"
                    }}/>
                </div>
            </NavbarStyledAccordionDetails>
        </NavbarStyledAccordion>
    );
};

export default MyNavbarItemMenu;