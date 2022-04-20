import React from 'react';
import {ReactEditor, RenderElementProps, useReadOnly, useSlateStatic} from "slate-react";
import {ChecklistElement} from "../../models/checklist";
import {CheckListItemStyled} from "./BCEditorCheckItemStyles";
import {MyCheckbox} from "../../../checkbox/MyCheckbox";
import {Transforms, Element, Node} from "slate";
import BCEditorPlaceholder from "../BCEditorPlaceholder";

const BcEditorCheckItem = (props: RenderElementProps) => {
    const element = props.element as ChecklistElement

    const editor = useSlateStatic()
    const readOnly = useReadOnly()
    const { checked } = element

    let isPlaceholder = false
    if (Node.string(props.element) === "") {
        isPlaceholder = true
    }

    return (
        <CheckListItemStyled {...props.attributes}>
            <div contentEditable={false} style={{marginRight: 12, marginLeft: -9}}>
                <MyCheckbox
                    checked={!!checked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const path = ReactEditor.findPath(editor, element)
                        const newProperties: Partial<Element> = {
                            checked: event.target.checked,
                        }
                        Transforms.setNodes(editor, newProperties, { at: path })
                    }}
                    style={{
                        width: 36,
                        height: 36
                    }}
                />
            </div>
            <div
                contentEditable={!readOnly}
                suppressContentEditableWarning
                style={{position: "relative", width: "100%", margin: "9px 0"}}
            >
                {isPlaceholder && <BCEditorPlaceholder/>}
                {props.children}
            </div>
        </CheckListItemStyled>
    );
};

export default BcEditorCheckItem;