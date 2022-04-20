import React from "react";
import {ReactEditor, RenderElementProps, useSlateStatic} from "slate-react";
import BcEditorHeading from "./BCEditorHeading";
import BcEditorQuoteBlock from "./quote/BCEditorQuoteBlock";
import BcEditorImageBlock from "./image/BCEditorImageBlock";
import BcEditorCodeBlock from "./code/BCEditorCodeBlock";
import BcEditorDividerBlock from "./divider/BCEditorDividerBlock";
import BcEditorLinkComponent from "./BCEditorLinkComponent";
import {Node} from "slate";
import BCEditorPlaceholder from "./BCEditorPlaceholder";
import {ThemeOptions, useTheme} from "@mui/material";
import BcEditorCheckItem from "./checklist/BCEditorCheckItem";
import BcEditorListBlock from "./list/BCEditorListBlock";
import {BCEditorListItem} from "./list/BCEditorListStyles";
import BcEditorCodeItem from "./code/BCEditorCodeItem";

interface DefaultBlockProps extends RenderElementProps { isPlaceholder: boolean }

export const DefaultBlock: React.FC<DefaultBlockProps> = (props) => {
    const {attributes, children, element} = props
    const editor = useSlateStatic()
    const Tag = editor.isInline(element) ? 'span' : 'p'

    const theme = useTheme<ThemeOptions>()

    return (
        <Tag {...attributes} style={{position: 'relative', color: theme.my.text_700}}>
            {props.isPlaceholder && <BCEditorPlaceholder/>}
            {children}
        </Tag>
    )
}

const useRenderElementController = (props: RenderElementProps) => {
    let isPlaceholder = false
    const editor = useSlateStatic()
    if ((ReactEditor.findPath(editor, props.element)[0] === editor.children.length - 1) && Node.string(props.element) === "") {
        isPlaceholder = true
    }

    switch (props.element.type) {
        case "code":
            return <BcEditorCodeBlock {...props}/>
        case "code-item":
            return <BcEditorCodeItem {...props}/>
        case "heading":
            return <BcEditorHeading {...props}/>
        case "quote":
            return <BcEditorQuoteBlock {...props}/>
        case "image":
            return <BcEditorImageBlock {...props}/>
        case "divider":
            return <BcEditorDividerBlock {...props}/>
        case "link":
            return <BcEditorLinkComponent {...props}/>
        case "check-list-item":
            return <BcEditorCheckItem {...props}/>
        case "numbered-list" || "ordered-list":
            return <BcEditorListBlock {...props}/>
        case "list-item":
            return <BCEditorListItem {...props.attributes}>{props.children}</BCEditorListItem>
        default:
            return <DefaultBlock {...props} isPlaceholder={isPlaceholder}/>
    }
}

export default useRenderElementController