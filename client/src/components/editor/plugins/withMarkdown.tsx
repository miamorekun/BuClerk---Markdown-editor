import React from 'react';
import {CustomEditor, CustomElement} from "../bc-editor.slate";
import {Editor, Range, Element, Transforms} from "slate";
import {ListElement} from "../models/list";
import {MyEditor} from "../CustomEditor";

type types = CustomElement["type"]

interface Options {
    shorts: {
        [key: string]: types
    }
}

const heading_ref_exp = /heading:\d$/
const withMarkdown = (editor: CustomEditor, options: Options) => {
    const {insertText} = editor

    editor.insertText = text => {
        const {selection} = editor

        if (text === ' ' && selection && Range.isCollapsed(selection)) {
            const {anchor} = selection
            const block = Editor.above(editor, {
                match: n => Editor.isBlock(editor, n),
            })
            const path = block ? block[1] : []
            const start = Editor.start(editor, path)
            const range = {anchor, focus: start}
            const beforeText = Editor.string(editor, range)
            const type = options.shorts[beforeText]

            if (type) {
                Transforms.select(editor, range)
                Transforms.delete(editor)

                if (type === "heading") {
                    MyEditor.toggleHeadingBlock(editor, 1)
                    return
                } else if (heading_ref_exp.test(type)) {
                    const [, level] = type.split(":")
                    MyEditor.toggleHeadingBlock(editor, parseInt(level))
                    return
                }

                if (type === "ordered-list" || type == "numbered-list") {
                    MyEditor.toggleListBlock(editor, type)
                    return
                }

                if(type === "code") {
                    MyEditor.toggleCodeBlock(editor, "javascript")
                    return
                }

                if(type === "divider") {
                    MyEditor.toggleDivider(editor)
                }

                if(type === "quote") {
                    MyEditor.toggleQuoteBlock(editor)
                }

                if(type === "check-list-item") {
                    MyEditor.toggleCheckItem(editor)
                }

                return
            }
        }

        insertText(text)
    };

    return editor
}

export const markdown_options: Options = {
    shorts: {
        ">": "quote",
        "-": "ordered-list",
        "*": "ordered-list",
        "1.": "numbered-list",
        "1": "numbered-list",
        "[ ]": "check-list-item",
        "#": "heading:1",
        "##": "heading:2",
        "###": "heading:3",
        "####": "heading:4",
        "#####": "heading:5",
        "######": "heading:6",
        "[code]": "code",
        "---": "divider"
    }
}

export default withMarkdown