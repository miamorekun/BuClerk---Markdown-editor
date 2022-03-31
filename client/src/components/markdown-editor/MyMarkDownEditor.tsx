import React, {ChangeEvent, useState} from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {StyledEditor, StyledMarkDown} from "./MyMarkDownEditorStyles";

const MyMarkDownEditor = () => {
    const [markdown, setMarkdown] = useState<string>("")

    return (
        <div style={{height: "100%", width: "100%", position: "relative"}}>
            <div style={{display: "flex", position: "absolute", top: 0, left:0, width: "100%", height: "100%", overflow: "hidden"}}>
                <StyledEditor
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMarkdown(e.target.value)}
                />
                <StyledMarkDown>
                    <ReactMarkdown
                        children={markdown}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({node, inline, className, children, ...props}) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={docco}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    />
                </StyledMarkDown>
            </div>
        </div>
    );
};

export default MyMarkDownEditor;