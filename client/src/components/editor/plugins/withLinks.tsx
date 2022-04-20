import {CustomEditor} from "../bc-editor.slate";
import {Editor, Element, Range, Transforms} from "slate"
import {LinkElement} from "../models/link";
import {isLink} from "../utils/utils";

export const withInlines = (editor: CustomEditor) => {
    const {insertData, insertText, isInline} = editor

    editor.isInline = element =>
        ['link'].includes(element.type) || isInline(element)


    editor.insertText = text => {
        if (text && isLink(text)) {
            wrapLink(editor, text)
        } else {
            insertText(text)
        }
    }

    editor.insertData = data => {
        const text = data.getData('text/plain')

        if (text && isLink(text)) {
            wrapLink(editor, text)
        } else {
            insertData(data)
        }
    }

    return editor
}

export const unwrapLink = (editor: CustomEditor) => {
    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    })
}

export const wrapLink = (editor: CustomEditor, url: string) => {
    if (isLinkActive(editor)) {
        unwrapLink(editor)
    }

    const {selection} = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link: LinkElement = {
        type: 'link',
        url,
        children: isCollapsed ? [{text: url}] : [],
    }

    if (isCollapsed) {
        Transforms.insertNodes(editor, link)
    } else {
        Transforms.wrapNodes(editor, link, {split: true})
        Transforms.collapse(editor, {edge: 'end'})
    }
}

export const isLinkActive = (editor: CustomEditor) => {
    const [link] = Editor.nodes(editor, {
        match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    })
    return !!link
}

export const InlineChromiumBugfixComponent = () => {
    return (
        <span
            contentEditable={false}
            style={{fontSize: 0}}
        >
    ${String.fromCodePoint(160) /* Non-breaking space */}
  </span>
    )
}

export const insertLink = (editor:CustomEditor, url: string) => {
    if (editor.selection) {
        wrapLink(editor, url)
    }
}
