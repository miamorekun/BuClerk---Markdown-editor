import {CElement, CustomText} from "../bc-editor.slate";

export interface HeadingElement extends CElement {
    type: 'heading' | 'heading:1' | 'heading:2' | 'heading:3' | 'heading:4' | 'heading:5' | 'heading:6'
    level?: number
    children: CustomText[]
}