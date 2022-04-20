import {CustomEditor, CustomElement} from "../bc-editor.slate";
import {Transforms} from "slate"

export const withAdditionalParagraph = (editor: CustomEditor) => {
    const {onChange} = editor

    editor.onChange = () => {
        const lastIndex = editor.children.length - 1
        const lastNode = editor.children[lastIndex] as CustomElement
        const type = lastNode.type

        if (type === "quote" ||
            type === "image" ||
            type === "code" ||
            type === "divider" ||
            type === "check-list-item" ||
            type === "numbered-list" ||
            type === "ordered-list"
        ) {
            Transforms.insertNodes(
                editor,
                {type: "paragraph", children: [{text: ""}]},
                {at: [editor.children.length]}
            )
        }

        onChange()
    }

    return editor
}
