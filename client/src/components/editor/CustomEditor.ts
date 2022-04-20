import {Editor, Transforms, Text, Node, Element} from "slate";
import {CustomEditor, CustomElement, CustomText} from "./bc-editor.slate";
import {isLink} from "./utils/utils";
import {LinkElement} from "./models/link";
import {CodeElement} from "./models/code";

export const MyEditor = {
    ...Editor,
    // Bold Mark
    isBoldMarkActive(editor: CustomEditor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => {
                const node = n as CustomText
                return node.bold === true
            },
            universal: true,
        })

        return !!match
    },

    toggleBoldMark(editor: CustomEditor) {
        const isActive = MyEditor.isBoldMarkActive(editor)
        Transforms.setNodes(
            editor,
            {bold: isActive ? undefined : true},
            {match: n => Text.isText(n), split: true}
        )
    },

    // Underline Mark
    isUnderlineMarkActive(editor: CustomEditor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => {
                const node = n as CustomText
                return node.underline === true
            },
            universal: true,
        })

        return !!match
    },

    toggleUnderlineMark(editor: CustomEditor) {
        const isActive = MyEditor.isUnderlineMarkActive(editor)
        Transforms.setNodes(
            editor,
            {underline: isActive ? undefined : true},
            {match: n => Text.isText(n), split: true}
        )
    },


    // Strikethrough Text
    isStrikeThroughMarkActive(editor: CustomEditor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => {
                const node = n as CustomText
                return node.strikethrough === true
            },
            universal: true,
        })

        return !!match
    },

    toggleStrikeThroughMark(editor: CustomEditor) {
        const isActive = MyEditor.isStrikeThroughMarkActive(editor)
        Transforms.setNodes(
            editor,
            {strikethrough: isActive ? undefined : true},
            {match: n => Text.isText(n), split: true}
        )
    },

    // Italic Text
    isItalicMarkActive(editor: CustomEditor) {
        const [match] = Editor.nodes(editor, {
            match: (n) => {
                const node = n as CustomText
                return node.italic === true
            },
            universal: true,
        })

        return !!match
    },

    toggleItalicMark(editor: CustomEditor) {
        const isActive = MyEditor.isItalicMarkActive(editor)
        Transforms.setNodes(
            editor,
            {italic: isActive ? undefined : true},
            {match: n => Text.isText(n), split: true}
        )
    },

    // Heading Block
    isHeadingBlockActive(editor: CustomEditor) {
        const [match] = Editor.nodes<CustomElement>(editor, {
            match: (n) => {
                const node = n as CustomElement
                return node.type === 'heading'
            }
        })

        return !!match
    },

    toggleHeadingBlock(editor: CustomEditor, lvl: number) {
        const isActive = MyEditor.isHeadingBlockActive(editor)

        if (lvl === 0 || isActive) {
            Transforms.setNodes(
                editor,
                {type: 'paragraph'},
                {match: n => Editor.isBlock(editor, n)}
            )
        } else {
            Transforms.setNodes(
                editor,
                {type: 'heading', level: lvl},
                {match: n => Editor.isBlock(editor, n)}
            )
        }
    },

    // Quote Block
    isQuoteBlockActive(editor: CustomEditor) {
        const [match] = Editor.nodes<CustomElement>(editor, {
            match: (n) => {
                const node = n as CustomElement
                return node.type === 'quote'
            }
        })

        return !!match
    },

    toggleQuoteBlock(editor: CustomEditor) {
        const isActive = MyEditor.isQuoteBlockActive(editor)

        Transforms.setNodes(
            editor,
            {type: isActive ? "paragraph" : "quote"},
            {match: n => Editor.isBlock(editor, n)}
        )
    },

    // Image Block
    toggleImageBlock(editor: CustomEditor, url: string) {
        Transforms.setNodes(
            editor,
            {type: 'image', url},
            {match: n => Editor.isBlock(editor, n)}
        )
    },

    // Code Block
    isCodeBlockActive(editor: CustomEditor) {
        const [match] = Editor.nodes<CustomElement>(editor, {
            match: (n) => {
                const node = n as CustomElement
                return node.type === 'code'
            }
        })

        return !!match
    },

    toggleCodeBlock(editor: CustomEditor, lang: string) {
        const isActive = MyEditor.isCodeBlockActive(editor)

        Transforms.unwrapNodes(editor, {
            match: n =>
                !Editor.isEditor(n) &&
                Element.isElement(n) &&
                ["code"].includes(n.type),
            split: true,
        })

        Transforms.setNodes(
            editor,
            {
                type: isActive ? 'paragraph' :  "code-item",
                lang
            },
            {match: n => Editor.isBlock(editor, n)}
        )

        if (!isActive && lang) {
            const block = {type: "code", children: [], lang} as CodeElement
            Transforms.wrapNodes(editor, block)
        }
    },

    // Divider
    toggleDivider(editor: CustomEditor) {
        Transforms.setNodes(
            editor,
            {type: 'divider'},
            {match: n => Editor.isBlock(editor, n)}
        )
    },

    // Code Block
    isCheckItem(editor: CustomEditor) {
        const [match] = Editor.nodes<CustomElement>(editor, {
            match: (n) => {
                const node = n as CustomElement
                return node.type === 'check-list-item'
            }
        })

        return !!match
    },

    toggleCheckItem(editor: CustomEditor) {
        const isActive = MyEditor.isCheckItem(editor)

        Transforms.setNodes(
            editor,
            {
                type: isActive ? 'paragraph' : 'check-list-item',
                checked: false
            },
            {match: n => Editor.isBlock(editor, n)}
        )
    },
    // List Block
    isListBlock(editor: CustomEditor, type?: "numbered-list" | "ordered-list") {
        const [match] = Editor.nodes<CustomElement>(editor, {
            match: (n) => {
                const node = n as CustomElement
                return node.type === type
            }
        })

        return !!match
    },

    toggleListBlock(editor: CustomEditor, type?: "numbered-list" | "ordered-list") {
        const isActive = MyEditor.isListBlock(editor, type)

        Transforms.unwrapNodes(editor, {
            match: n =>
                !Editor.isEditor(n) &&
                Element.isElement(n) &&
                ["numbered-list", "ordered-list"].includes(n.type),
            split: true,
        })

        Transforms.setNodes(
            editor,
            {
                type: isActive ? 'paragraph' : type ? "list-item" : type
            },
            {match: n => Editor.isBlock(editor, n)}
        )

        if (!isActive && type) {
            const block = {type: type, children: []}
            Transforms.wrapNodes(editor, block)
        }
    },
}