import {CustomText} from "../bc-editor.slate";

export interface ChecklistElement {
    type: "check-list-item",
    children: CustomText[],
    checked?: boolean
}