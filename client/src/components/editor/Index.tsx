import React, {useCallback, useMemo, useState} from 'react'
import {createEditor, Descendant, Node, Path,} from 'slate'
import {Slate, Editable, withReact} from 'slate-react'
import renderElementController from "./custom-components/RenderElementController";
import BcEditorToolbar from "./toolbar/BCEditorToolbar";
import {ThemeOptions, useTheme} from "@mui/material";
import renderLeafController from "./custom-components/RenderLeafController";
import {withHistory} from "slate-history";
import {codeHighlightDecorator} from "./custom-components/decorators/codeHighlightDecorator";
import {onKeyDownHandler} from "./onKeyDownHandler";
import {withInlines} from "./plugins/withLinks";
import initialValue from "./initialValue.json"
import {withAdditionalParagraph} from "./plugins/withAdditionalParagraph";
import withVoid from "./plugins/withVoid";
import withMarkdown, {markdown_options} from "./plugins/withMarkdown";

const BCEditor = () => {
    const theme = useTheme<ThemeOptions>()

    // Editor and its plugins initialization
    const editor = useMemo(() =>
            withMarkdown(
                withInlines(
                    withVoid(
                        withAdditionalParagraph(
                            withHistory(
                                withReact(createEditor())
                            )
                        )
                    )
                ),
                markdown_options
            ),
        []
    )

    // Function to set initial editor state
    const state = initialValue as Descendant[]
    const [value, setValue] = useState<Descendant[]>(state)

    // Function to find which element must be render
    const renderElement = useCallback(renderElementController, [])

    // Function to find how to render split text nodes
    const renderLeaf = useCallback(renderLeafController, [])

    // Function to render decoration ( marks ) in real time
    const renderDecorate = useCallback(([node, path]: [Node, Path]) => {
        let ranges: Array<any> = []
        ranges = [...ranges, ...codeHighlightDecorator(node, path, editor)]

        return ranges
    }, [])

    // Function to handle "on key press" events
    const onkeydown = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => onKeyDownHandler(event, editor), []
    )

    // Editor render function
    return (
        <div style={{color: theme.my.text_700}}>
            <Slate
                editor={editor}
                value={value}
                onChange={newValue => setValue(newValue)}
            >
                <BcEditorToolbar/>
                <div className="mt-3 p-1">
                    <Editable
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        decorate={renderDecorate}
                        onKeyDown={onkeydown}
                    />
                </div>
            </Slate>
        </div>
    );
};

export default BCEditor;