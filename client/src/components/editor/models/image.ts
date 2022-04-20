import {CElement, CustomText} from "../bc-editor.slate";

export interface ImageElement extends CElement {
    type: 'image',
    url: string,
    altAttr?: string
    children: CustomText[]
}