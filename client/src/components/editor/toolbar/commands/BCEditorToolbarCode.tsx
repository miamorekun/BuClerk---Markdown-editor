import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";

const BcEditorToolbarCode = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        MyEditor.toggleCodeBlock(editor, "javascript")
    }

    return (
        <MyTooltip title="Code Block" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled className={MyEditor.isCodeBlockActive(editor) ? `active` : ``} onClick={onClickHandler}>
                <svg width="19" height="15" viewBox="0 0 19 15" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.60156 14.75C8.79297 14.8047 8.95703 14.6953 9.01172 14.5312L12.7578 1.67969C12.8125 1.48828 12.7031 1.29688 12.5391 1.26953L10.8711 0.777344C10.6797 0.722656 10.5156 0.832031 10.4609 0.996094L6.71484 13.8477C6.66016 14.0391 6.76953 14.2031 6.93359 14.2578L8.60156 14.75ZM5.48438 11.6875L6.6875 10.4023C6.82422 10.2656 6.79688 10.0742 6.66016 9.9375L4.19922 7.75L6.66016 5.58984C6.79688 5.45312 6.82422 5.23438 6.6875 5.125L5.48438 3.83984C5.375 3.70312 5.15625 3.70312 5.01953 3.83984L1.08203 7.53125C0.945312 7.64062 0.945312 7.85938 1.08203 7.99609L5.01953 11.6875C5.15625 11.8242 5.375 11.8242 5.48438 11.6875ZM14.4531 11.6875L18.3906 7.99609C18.5273 7.88672 18.5273 7.64062 18.3906 7.53125L14.4531 3.83984C14.3164 3.70312 14.0977 3.70312 13.9883 3.83984L12.7852 5.09766C12.6758 5.23438 12.6758 5.45312 12.8125 5.58984L15.3008 7.75L12.8125 9.9375C12.6758 10.0742 12.6484 10.2656 12.7852 10.4023L13.9883 11.6875C14.0977 11.8242 14.3164 11.8242 14.4531 11.6875Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarCode;