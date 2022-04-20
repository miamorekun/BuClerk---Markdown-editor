import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarChecklist = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleCheckItem(editor)
    }

    return (
        <MyTooltip title="Checklist" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isCheckItem(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.4375 12.875C12.1484 12.875 12.75 12.3008 12.75 11.5625V1.9375C12.75 1.22656 12.1484 0.625 11.4375 0.625H1.8125C1.07422 0.625 0.5 1.22656 0.5 1.9375V11.5625C0.5 12.3008 1.07422 12.875 1.8125 12.875H11.4375ZM5.83203 10.1953C5.66797 10.3867 5.36719 10.3867 5.20312 10.1953L2.35938 7.35156C2.19531 7.1875 2.19531 6.91406 2.35938 6.75L2.98828 6.12109C3.15234 5.95703 3.42578 5.95703 3.58984 6.12109L5.53125 8.03516L9.63281 3.93359C9.79688 3.76953 10.0703 3.76953 10.2344 3.93359L10.8633 4.5625C11.0273 4.72656 11.0273 5 10.8633 5.16406L5.83203 10.1953Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarChecklist;