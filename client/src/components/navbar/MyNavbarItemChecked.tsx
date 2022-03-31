import React from 'react';
import MyNavbarItem, {Props as MyNavbarItemProps} from "./MyNavbarItem"
import MyRadio from "../radio/MyRadio";
import {Link, useLocation, useMatch} from "react-router-dom";
import useActive from "./useActive";

interface Props extends MyNavbarItemProps {
    to: string,
    color?: string,
}

const MyNavbarItemChecked: React.FC<Props> = ({color,to, ...rest}) => {
    const active = useActive(to)

    return (
        <Link to={to} className="d-block">
            <MyNavbarItem icon={<MyRadio size="small" defaultColor={color} checked={active}/>} {...rest}/>
        </Link>
    );
};

export default MyNavbarItemChecked;