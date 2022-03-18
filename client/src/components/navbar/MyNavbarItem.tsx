import React from 'react';
import {NavbarItemStyled} from "./MyNavbarStyles";
import {IconType} from "react-icons/lib";
import {Link, useLocation} from "react-router-dom";

export interface Props {
    icon?: JSX.Element,
    title: string,
    endIcon?: JSX.Element,
    to?: string,
    defaultActive?: boolean
}

const MyNavbarItem: React.FC<Props> = ({to, defaultActive, title, icon, endIcon}) => {
    const {pathname} = useLocation()
    const active = defaultActive ? defaultActive : (to ? !!pathname.match(to) : false)

    const jsx_element = (
        <NavbarItemStyled className={active ? "active" : ""}>
            <div className="me-3 text-center" style={{width: 24}}>
                {icon}
            </div>
            <div className="d-flex justify-content-between flex-grow-1 align-items-center">
                {title}
                {endIcon && (
                    <div className="ms-3" style={{width: 24}}>
                        {endIcon}
                    </div>
                )}
            </div>
        </NavbarItemStyled>
    )

    if (to) {
        return (
            <Link to={to ? to : ""} className="w-100">
                {jsx_element}
            </Link>
        )
    } else {
        return jsx_element
    }
};

export default MyNavbarItem;