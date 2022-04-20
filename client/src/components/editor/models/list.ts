import {CustomElement, CustomText} from "../bc-editor.slate";

export interface ListElement {
    type: "numbered-list" | "ordered-list",
    children: CustomElement[]
}

export interface ListItem {
    type: "list-item"
    children: CustomText[]
}

