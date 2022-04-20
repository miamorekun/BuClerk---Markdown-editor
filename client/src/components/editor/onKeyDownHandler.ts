import React from "react";
import {CustomEditor} from "./bc-editor.slate";
import {isKeyHotkey} from 'is-hotkey'
import {Editor, Element, Node, Range, Transforms} from "slate";

export const onKeyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>, editor: CustomEditor) => {
    const {selection} = editor

    if (selection && Range.isCollapsed(selection)) {
        const {nativeEvent} = event

        const nodeIndex = selection.anchor.path[0]
        const node = editor.children[nodeIndex]

        if (isKeyHotkey('left', nativeEvent)) {
            event.preventDefault()
            Transforms.move(editor, {unit: 'offset', reverse: true})
            return
        }

        if (isKeyHotkey('right', nativeEvent)) {
            event.preventDefault()
            Transforms.move(editor, {unit: 'offset'})
            return
        }

        if (isKeyHotkey('Backspace', nativeEvent)) {
            event.preventDefault()
            const index = parseInt(`${nodeIndex}`)

            if (Editor.isBlock(editor, node) && Node.string(node) === "" && node.children.length < 2 && node.type !== "paragraph") {
                if (Editor.isBlock(editor, node.children[0])) {

                    Transforms.unwrapNodes(editor, {
                        match: n =>
                            !Editor.isEditor(n) &&
                            Element.isElement(n),
                        split: true,
                        at: [index]
                    })

                    Transforms.setNodes(editor, {type: "paragraph"}, {at: [index]})
                } else {
                    Transforms.setNodes(editor, {type: "paragraph"}, {at: [index]})
                }
            } else {
                editor.deleteBackward("character")
            }
        }


        if (isKeyHotkey('tab', nativeEvent)) {
            event.preventDefault()
            Transforms.insertText(editor, "    ")
        }


        if (nativeEvent.key === "Tab" && nativeEvent.shiftKey && Range.isCollapsed(selection) && Editor.isBlock(editor, node)) {
            event.preventDefault()
            if(node.type === "code") {
                editor.deleteBackward("character")
                editor.deleteBackward("character")
                editor.deleteBackward("character")
                editor.deleteBackward("character")
            } else {
                Transforms.move(editor, {distance: 4, reverse: true})
            }
        }
    }
}