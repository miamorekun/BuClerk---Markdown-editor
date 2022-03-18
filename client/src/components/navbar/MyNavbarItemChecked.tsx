import React from 'react';
import MyNavbarItem, {Props as MyNavbarItemProps} from "./MyNavbarItem"
import MyRadio from "../radio/MyRadio";
import {Link, useLocation} from "react-router-dom";

interface Props extends MyNavbarItemProps {
    to: string,
    color?: string
}

const MyNavbarItemChecked: React.FC<Props> = ({color,to, ...rest}) => {
    const {pathname} = useLocation()
    const active = !!pathname.match(to)

    return (
        <Link to={to} className="d-block">
            <MyNavbarItem icon={<MyRadio size="small" defaultColor={color} checked={active}/>} {...rest}/>
        </Link>
    );
};

export default MyNavbarItemChecked;