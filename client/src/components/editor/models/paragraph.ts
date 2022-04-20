import {CElement, CustomText} from "../bc-editor.slate";

export interface ParagraphElement extends CElement {
    type: 'paragraph',
    children: CustomText[]
}
