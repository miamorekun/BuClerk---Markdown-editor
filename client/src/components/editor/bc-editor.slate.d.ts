// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import {BaseEditor} from 'slate'
import {ReactEditor} from 'slate-react'
import {HistoryEditor} from 'slate-history'
import {CodeElement, CodeItem, CodeLeafFields} from "./models/code";
import {ImageElement} from "./models/image";
import {QuoteElement} from "./models/quote";
import {HeadingElement} from "./models/heading";
import {ParagraphElement} from "./models/paragraph";
import {DividerElement} from "./models/divider";
import {LinkElement} from "./models/link";
import {ChecklistElement} from "./models/checklist";
import {ListElement, ListItem} from "./models/list";

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor

type CElement = {
    placeholder?: boolean
}

export type CustomElement =
    | ParagraphElement
    | HeadingElement
    | CodeElement
    | QuoteElement
    | ImageElement
    | DividerElement
    | LinkElement
    | ChecklistElement
    | ListElement
    | ListItem
    | CodeItem

export interface CustomText extends CodeLeafFields {
    text: string
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean,
    placeholder?: boolean,
}

declare module 'slate' {
    interface CustomTypes {
        Editor: CustomEditor
        Element: CustomElement
        Text: CustomText
    }
}