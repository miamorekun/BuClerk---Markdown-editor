import {CElement, CustomText} from "../bc-editor.slate";

export interface QuoteElement extends CElement {
    type: 'quote',
    children: CustomText[]
}