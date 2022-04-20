import React from 'react';
import MyTooltip from "../../../tooltip/MyTooltip";
import {MyButtonFilled} from "../../../button/MyButton";
import {useSlate} from "slate-react";
import {MyEditor} from "../../CustomEditor";
import {isImgLink} from "../../utils/utils";

const BcEditorToolbarImage = () => {
    const editor = useSlate()

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const url = window.prompt("Insert an image url")

        if (url && isImgLink(url)) {
            MyEditor.toggleImageBlock(editor, url)
        } else return
    }

    return (
        <MyTooltip title="Image" enterDelay={0} leaveDelay={0}>
            <MyButtonFilled onClick={onClickHandler}>
                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.6658 3.33331H3.3325C2.41333 3.33331 1.66583 4.08081 1.66583 4.99998V15C1.66583 15.9191 2.41333 16.6666 3.3325 16.6666H16.6658C17.585 16.6666 18.3325 15.9191 18.3325 15V4.99998C18.3325 4.08081 17.585 3.33331 16.6658 3.33331ZM5.41583 5.83331C5.74735 5.83331 6.0653 5.96501 6.29972 6.19943C6.53414 6.43385 6.66583 6.75179 6.66583 7.08331C6.66583 7.41483 6.53414 7.73278 6.29972 7.9672C6.0653 8.20162 5.74735 8.33331 5.41583 8.33331C5.08431 8.33331 4.76637 8.20162 4.53195 7.9672C4.29753 7.73278 4.16583 7.41483 4.16583 7.08331C4.16583 6.75179 4.29753 6.43385 4.53195 6.19943C4.76637 5.96501 5.08431 5.83331 5.41583 5.83331V5.83331ZM9.99917 14.1666H4.16583L7.49917 9.99998L8.74917 11.6666L11.2492 8.33331L15.8325 14.1666H9.99917Z"/>
                </svg>
            </MyButtonFilled>
        </MyTooltip>
    );
};

export default BcEditorToolbarImage;