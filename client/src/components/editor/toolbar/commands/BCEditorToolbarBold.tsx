import React, {MouseEventHandler} from 'react';
import {MyButtonFilled} from "../../../button/MyButton";
import MyTooltip from "../../../tooltip/MyTooltip";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarBold = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleBoldMark(editor)
    }

    return (
        <MyTooltip title="Bold Text" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isBoldMarkActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="12" height="13" viewBox="0 0 12 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.60547 6.25781C10.0156 5.76562 10.2891 5.16406 10.3438 4.48047C10.5352 2.40234 8.92188 0.625 6.87109 0.625H1.42969C1.18359 0.625 0.992188 0.84375 0.992188 1.0625V2.375C0.992188 2.62109 1.18359 2.8125 1.42969 2.8125H2.27734V10.6875H1.42969C1.18359 10.6875 0.992188 10.9062 0.992188 11.125V12.4375C0.992188 12.6836 1.18359 12.875 1.42969 12.875H7.14453C9.08594 12.875 10.8086 11.4805 11 9.53906C11.1367 8.22656 10.5352 7.02344 9.60547 6.25781ZM4.46484 2.8125H6.87109C7.58203 2.8125 8.18359 3.41406 8.18359 4.125C8.18359 4.86328 7.58203 5.4375 6.87109 5.4375H4.46484V2.8125ZM6.87109 10.6875H4.46484V7.625H6.87109C7.71875 7.625 8.40234 8.33594 8.40234 9.15625C8.40234 10.0039 7.71875 10.6875 6.87109 10.6875Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarBold;