import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarQuotes = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleQuoteBlock(editor)
    }

    return (
        <MyTooltip title="Quote Block" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isQuoteBlockActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0.75C1.92891 0.75 0.25 2.39453 0.25 4.5C0.25 6.60547 1.92891 8.25 4 8.25C4.44062 8.25 4.85742 8.15996 5.25 8.02035V8.25C5.25 9.62891 4.12891 10.75 2.75 10.75C2.05977 10.75 1.5 11.3098 1.5 12C1.5 12.6902 2.05977 13.25 2.75 13.25C5.50703 13.25 7.75 11.007 7.75 8.25V4.5C7.75 2.39453 6.07031 0.75 4 0.75ZM17.75 4.5C17.75 2.42891 16.0711 0.75 14 0.75C11.9289 0.75 10.25 2.42891 10.25 4.5C10.25 6.57109 11.9289 8.25 14 8.25C14.4406 8.25 14.8574 8.15996 15.25 8.02035V8.25C15.25 9.62891 14.1289 10.75 12.75 10.75C12.0598 10.75 11.5 11.3098 11.5 12C11.5 12.6902 12.0598 13.25 12.75 13.25C15.507 13.25 17.75 11.007 17.75 8.25V4.5Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarQuotes;