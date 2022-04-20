import React from 'react';
import {CustomEditor} from "../bc-editor.slate";

const withVoid = (editor: CustomEditor) => {
    const {isVoid} = editor

    editor.isVoid = element => {
        if (element.type === "image")
            return true
        if (element.type === "divider")
            return true

        return isVoid(element)
    }

    return editor
};

export default withVoid;