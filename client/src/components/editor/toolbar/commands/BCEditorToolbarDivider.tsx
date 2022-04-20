import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarDivider = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleDivider(editor)
    }

    return (
        <MyTooltip title="Divider" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled onClick={onClickHandler}>
                <svg width="18" height="3" viewBox="0 0 18 3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 1.3125C17.4727 1.09375 17.2812 0.902344 17.0625 0.875H0.410156C0.191406 0.902344 0 1.09375 0 1.3125V2.1875C0 2.40625 0.191406 2.59766 0.410156 2.59766H17.0625C17.2812 2.59766 17.4727 2.40625 17.5 2.1875V1.3125Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarDivider;