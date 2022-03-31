import React from 'react';
import {useLocation} from "react-router-dom";

const useActive = (to: string): boolean => {
    const {pathname} = useLocation()
    return !!pathname.match(to)
};

export default useActive;