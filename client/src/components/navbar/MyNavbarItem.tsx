import React from 'react';
import {NavbarItemStyled} from "./MyNavbarStyles";
import {IconType} from "react-icons/lib";
import {Link, useLocation} from "react-router-dom";
import useActive from "./useActive";

export interface Props {
    icon?: JSX.Element,
    title: string,
    endIcon?: JSX.Element,
    to?: string,
    defaultActive?: boolean
}

export interface NavbarItemUsedActiveHookProps extends Props{
    to: string,
}

const MyNavbarItemPattern: React.FC<Props> = ({defaultActive, title, icon, endIcon}) => {
    return (
        <NavbarItemStyled className={defaultActive ? `active` : ``}>
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
}

const MyNavbarItemUsedActiveHook: React.FC<NavbarItemUsedActiveHookProps> = ({to, ...rest}) => {
    const active = useActive(to)
    return <MyNavbarItemPattern {...rest} defaultActive={active}/>
}

const MyNavbarItem: React.FC<Props> = ({to, ...rest}) => {
    if (to) {
        return (
            <Link to={to} className="w-100">
               <MyNavbarItemUsedActiveHook to={to} {...rest}/>
            </Link>
        )
    } else {
        return <MyNavbarItemPattern {...rest}/>
    }
};

export default MyNavbarItem;