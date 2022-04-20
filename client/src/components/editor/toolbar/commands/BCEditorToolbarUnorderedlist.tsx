import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BCEditorToolbarUnorderedlist = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleListBlock(editor, "ordered-list")
    }

    return (
        <MyTooltip title="Unordered List" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isListBlock(editor, "ordered-list") ? `active` : ``} onClick={onClickHandler}>
                <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3125 0.0625C0.574219 0.0625 0 0.664062 0 1.375C0 2.11328 0.574219 2.6875 1.3125 2.6875C2.02344 2.6875 2.625 2.11328 2.625 1.375C2.625 0.664062 2.02344 0.0625 1.3125 0.0625ZM1.3125 4.4375C0.574219 4.4375 0 5.03906 0 5.75C0 6.48828 0.574219 7.0625 1.3125 7.0625C2.02344 7.0625 2.625 6.48828 2.625 5.75C2.625 5.03906 2.02344 4.4375 1.3125 4.4375ZM1.3125 8.8125C0.574219 8.8125 0 9.41406 0 10.125C0 10.8633 0.574219 11.4375 1.3125 11.4375C2.02344 11.4375 2.625 10.8633 2.625 10.125C2.625 9.41406 2.02344 8.8125 1.3125 8.8125ZM13.5625 9.25H4.8125C4.56641 9.25 4.375 9.46875 4.375 9.6875V10.5625C4.375 10.8086 4.56641 11 4.8125 11H13.5625C13.7812 11 14 10.8086 14 10.5625V9.6875C14 9.46875 13.7812 9.25 13.5625 9.25ZM13.5625 0.5H4.8125C4.56641 0.5 4.375 0.71875 4.375 0.9375V1.8125C4.375 2.05859 4.56641 2.25 4.8125 2.25H13.5625C13.7812 2.25 14 2.05859 14 1.8125V0.9375C14 0.71875 13.7812 0.5 13.5625 0.5ZM13.5625 4.875H4.8125C4.56641 4.875 4.375 5.09375 4.375 5.3125V6.1875C4.375 6.43359 4.56641 6.625 4.8125 6.625H13.5625C13.7812 6.625 14 6.43359 14 6.1875V5.3125C14 5.09375 13.7812 4.875 13.5625 4.875Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BCEditorToolbarUnorderedlist;