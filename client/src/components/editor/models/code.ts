import {CElement, CustomText} from "../bc-editor.slate";
import {Grammar, GrammarRest, GrammarValue} from "prismjs";

export interface CodeLeafFields {
    keyword?: boolean
    number?: boolean
    function?: boolean
    string?: boolean
    boolean?: boolean
    operator?: boolean
    punctuation?: boolean
    atrule?: boolean
    url?: boolean
    selector?: boolean
    property?: boolean
    important?: boolean
    style?: boolean
    comment?: boolean
    'class-name'?: boolean
    rest?: boolean,
    tag?: boolean,
    constant?: boolean
    symbol?: boolean,
    "attr-name"?: boolean,
    variable?: boolean,
    char?: boolean
}

export interface CodeElement extends CElement {
    type: 'code',
    children: CodeItem[],
    lang: string
}


export interface CodeItem extends CElement {
    type: 'code-item',
    children: CustomText[],
    lang: string
}
