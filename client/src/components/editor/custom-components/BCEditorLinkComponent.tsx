import React, {useState} from 'react';
import {RenderElementProps, useFocused, useSelected, useSlateStatic} from "slate-react";
import {LinkElement} from "../models/link";
import {Menu, Paper, Popper, ThemeOptions, useTheme} from "@mui/material";
import {InlineChromiumBugfixComponent, unwrapLink} from "../plugins/withLinks";
import {MyButtonClear, MyButtonError} from "../../button/MyButton";

const BcEditorLinkComponent = (props: RenderElementProps) => {
    const element = props.element as LinkElement
const theme = useTheme<ThemeOptions>()

    const editor = useSlateStatic();
    const selected = useSelected();
    const focused = useFocused();

    const [isOpen, setOpen] = useState(true)

    return (
        <span style={{display: "inline-block", position: "relative"}}>
            <a style={{color: theme.my.accent}} {...props.attributes} href={element.url}>
                <InlineChromiumBugfixComponent/>
                {props.children}
                <InlineChromiumBugfixComponent/>
            </a>
            {selected && focused && (
                <div style={{
                    position: 'absolute',
                    top: "125%",
                    transform: "translateX(-10%)",
                    backgroundColor: "#ffffff",
                    zIndex: 100,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0px 6px 10px rgba(215, 218, 222, 0.75)",
                    padding: "6px 6px 6px 12px",
                }} contentEditable={false}>
                    <a style={{color: theme.my.accent}} href={element.url} rel="noreferrer"
                       target="_blank">
                        {element.url.slice(0, 24)}...
                    </a>
                    <MyButtonClear onClick={() => unwrapLink(editor)} style={{marginLeft: 4}}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill={theme.my.text_500}
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.3125 11.8516L8.21875 10.7852C8.08203 10.6484 7.89062 10.6484 7.75391 10.7852L6.52344 11.9883C5.75781 12.7812 4.52734 12.7812 3.76172 11.9883C2.96875 11.2227 2.96875 9.99219 3.76172 9.22656L4.96484 7.99609C5.10156 7.85938 5.10156 7.66797 4.96484 7.53125L3.89844 6.4375C3.76172 6.32812 3.54297 6.32812 3.43359 6.4375L2.20312 7.66797C0.589844 9.28125 0.589844 11.9336 2.20312 13.5469C3.81641 15.1602 6.46875 15.1602 8.08203 13.5469L9.3125 12.3164C9.42188 12.207 9.42188 11.9883 9.3125 11.8516ZM7.75391 4.74219C7.89062 4.87891 8.08203 4.87891 8.21875 4.74219L9.44922 3.53906C10.2148 2.74609 11.4453 2.74609 12.2109 3.53906C13.0039 4.30469 13.0039 5.53516 12.2109 6.30078L11.0078 7.53125C10.8711 7.66797 10.8711 7.85938 11.0078 7.99609L12.0742 9.08984C12.2109 9.19922 12.4297 9.19922 12.5391 9.08984L13.7695 7.85938C15.3828 6.24609 15.3828 3.59375 13.7695 1.98047C12.1562 0.367188 9.50391 0.367188 7.89062 1.98047L6.66016 3.21094C6.55078 3.32031 6.55078 3.53906 6.66016 3.67578L7.75391 4.74219ZM14.1797 14.5586L14.7812 13.957C15.0547 13.6836 15.0547 13.2734 14.7812 13.0273L2.72266 0.96875C2.47656 0.695312 2.06641 0.695312 1.79297 0.96875L1.19141 1.57031C0.917969 1.84375 0.917969 2.25391 1.19141 2.5L13.25 14.5586C13.4961 14.832 13.9062 14.832 14.1797 14.5586Z"/>
                        </svg>
                    </MyButtonClear>
                </div>
            )}
        </span>
    );
};

export default BcEditorLinkComponent;