import React from 'react';
import {MyButtonFilled} from "../../../button/MyButton";
import MyTooltip from "../../../tooltip/MyTooltip";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarItalic = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleItalicMark(editor)
    }

    return (
        <MyTooltip title="Italic Text" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isItalicMarkActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="10" height="13" viewBox="0 0 10 13" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.25 1.0625C9.25 0.84375 9.03125 0.625 8.8125 0.625H3.5625C3.31641 0.625 3.125 0.84375 3.125 1.0625V1.9375C3.125 2.18359 3.31641 2.375 3.5625 2.375H4.82031L2.63281 11.125H0.9375C0.691406 11.125 0.5 11.3438 0.5 11.5625V12.4375C0.5 12.6836 0.691406 12.875 0.9375 12.875H6.1875C6.40625 12.875 6.625 12.6836 6.625 12.4375V11.5625C6.625 11.3438 6.40625 11.125 6.1875 11.125H4.90234L7.08984 2.375H8.8125C9.03125 2.375 9.25 2.18359 9.25 1.9375V1.0625Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarItalic;