import React from 'react';
import {MyButtonFilled} from "../../../button/MyButton";
import MyTooltip from "../../../tooltip/MyTooltip";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarUnderline = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleUnderlineMark(editor)
    }

    return (
        <MyTooltip title="Underline Text" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isUnderlineMarkActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="13" height="15" viewBox="0 0 13 15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.375 2.5H2.25V6.875C2.25 9.30859 4.19141 11.25 6.625 11.25C9.03125 11.25 11 9.30859 11 6.875V2.5H11.875C12.0938 2.5 12.3125 2.30859 12.3125 2.0625V1.1875C12.3125 0.96875 12.0938 0.75 11.875 0.75H7.9375C7.69141 0.75 7.5 0.96875 7.5 1.1875V2.0625C7.5 2.30859 7.69141 2.5 7.9375 2.5H8.8125V6.875C8.8125 8.10547 7.82812 9.0625 6.625 9.0625C5.39453 9.0625 4.4375 8.10547 4.4375 6.875V2.5H5.3125C5.53125 2.5 5.75 2.30859 5.75 2.0625V1.1875C5.75 0.96875 5.53125 0.75 5.3125 0.75H1.375C1.12891 0.75 0.9375 0.96875 0.9375 1.1875V2.0625C0.9375 2.30859 1.12891 2.5 1.375 2.5ZM12.3125 13H0.9375C0.691406 13 0.5 13.2188 0.5 13.4375V14.3125C0.5 14.5586 0.691406 14.75 0.9375 14.75H12.3125C12.5312 14.75 12.75 14.5586 12.75 14.3125V13.4375C12.75 13.2188 12.5312 13 12.3125 13Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarUnderline;