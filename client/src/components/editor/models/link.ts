import {CElement, CustomText} from "../bc-editor.slate";

export interface LinkElement extends CElement {
    type: 'link',
    children: CustomText[],
    url: string
}
