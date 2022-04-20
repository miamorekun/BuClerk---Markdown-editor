import React from 'react';
import {MyButtonFilled} from "../../../button/MyButton";
import MyTooltip from "../../../tooltip/MyTooltip";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarStrikeThrough = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleStrikeThroughMark(editor)
    }

    return (
        <MyTooltip title="Strikethrough" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isStrikeThroughMarkActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5625 5.875H8.01172L5.63281 5.16406C5.14062 5 4.8125 4.5625 4.8125 4.01562C4.8125 3.35938 5.33203 2.83984 5.98828 2.8125H7.82031C8.33984 2.8125 8.80469 3.14062 9.05078 3.57812C9.10547 3.71484 9.26953 3.82422 9.43359 3.82422C9.48828 3.82422 9.57031 3.79688 9.625 3.76953L10.8008 3.19531C10.9375 3.11328 11.0469 2.97656 11.0469 2.78516C11.0469 2.73047 11.0195 2.64844 10.9922 2.59375V2.56641C10.418 1.41797 9.21484 0.625 7.84766 0.625H5.98828C4.12891 0.652344 2.59766 2.15625 2.59766 4.01562C2.59766 4.125 2.625 4.23438 2.625 4.34375C2.67969 4.91797 2.89844 5.4375 3.22656 5.875H0.4375C0.191406 5.875 0 6.09375 0 6.3125V7.1875C0 7.43359 0.191406 7.625 0.4375 7.625H13.5625C13.7812 7.625 14 7.43359 14 7.1875V6.3125C14 6.09375 13.7812 5.875 13.5625 5.875ZM8.61328 8.5C8.94141 8.71875 9.16016 9.10156 9.1875 9.51172C9.16016 10.168 8.64062 10.6875 7.98438 10.6875H6.15234C5.63281 10.6875 5.16797 10.3867 4.94922 9.94922C4.86719 9.8125 4.70312 9.70312 4.53906 9.70312C4.48438 9.70312 4.40234 9.73047 4.34766 9.75781L3.17188 10.332C3.03516 10.4141 2.92578 10.5508 2.92578 10.7422C2.92578 10.7969 2.95312 10.8789 2.98047 10.9336V10.9609C3.55469 12.1094 4.75781 12.875 6.125 12.875H7.98438C9.84375 12.875 11.375 11.3711 11.375 9.51172C11.375 9.40234 11.3477 9.29297 11.3477 9.18359C11.3203 8.9375 11.2656 8.71875 11.2109 8.5H8.61328Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarStrikeThrough;