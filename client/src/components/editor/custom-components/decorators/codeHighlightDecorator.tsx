import {Editor, Node, Path, Range} from "slate";
import {CustomEditor} from "../../bc-editor.slate";

import Prism, {Token} from "prismjs";
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-java';
import {ReactEditor, RenderLeafProps} from "slate-react";
import React from "react";
import {CodeElement} from "../../models/code";

const getLength = (token: string | Token): number => {
    if (typeof token === 'string') {
        return token.length
    } else if (typeof token.content === 'string') {
        return token.content.length
    } else {
        const content = token.content as Array<string | Token>
        return content.reduce((l, t) => l + getLength(t), 0)
    }
}

export const codeHighlightDecorator = (node: Node, path: Path, editor: CustomEditor): Range[] => {
    const ranges: Range[] = []

    if (Editor.isBlock(editor, node) && node.type === "code-item") {

        const tokens = Prism.tokenize(Node.string(node), Prism.languages[node.lang])

        let start = 0

        for (const token of tokens) {
            const length = getLength(token)
            const end = start + length

            if (typeof token !== 'string') {
                ranges.push({
                    [token.type]: true,
                    anchor: {path, offset: start},
                    focus: {path, offset: end},
                })
            }

            start = end
        }
    }
    return ranges
}

export const useCodeHighlightLeafDecorator = ({leaf}: RenderLeafProps): React.CSSProperties => {
    const styles:React.CSSProperties = {}

    if (leaf.comment)
        styles.color = "slategray"

    if (leaf.operator || leaf.url)
        styles.color = "#9a6e3a"

    if (leaf.keyword)
        styles.color = "#07a"

    if (leaf.number || leaf.boolean || leaf.tag || leaf.constant || leaf.symbol || leaf["attr-name"] || leaf.selector)
        styles.color = "#905"

    if (leaf.punctuation)
        styles.color = "#999"

    if (leaf.string || leaf.char)
        styles.color = "#690"

    if (leaf.function || leaf['class-name'])
        styles.color = "#dd4a68"

    return styles
}

Prism.languages.python = Prism.languages.extend('python', {})
Prism.languages.insertBefore('python', 'prolog', {
    comment: {pattern: /##[^\n]*/, alias: 'comment'},
})
Prism.languages.javascript = Prism.languages.extend('javascript', {})
Prism.languages.insertBefore('javascript', 'prolog', {
    comment: {pattern: /\/\/[^\n]*/, alias: 'comment'},
})
Prism.languages.html = Prism.languages.extend('html', {})
Prism.languages.insertBefore('html', 'prolog', {
    comment: {pattern: /<!--[^\n]*-->/, alias: 'comment'},
})
Prism.languages.markdown = Prism.languages.extend('markup', {})
Prism.languages.insertBefore('markdown', 'prolog', {
    blockquote: {pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation'},
    code: [
        {pattern: /^(?: {4}|\t).+/m, alias: 'keyword'},
        {pattern: /``.+?``|`[^`\n]+`/, alias: 'keyword'},
    ],
    title: [
        {
            pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
            alias: 'important',
            inside: {punctuation: /==+$|--+$/},
        },
        {
            pattern: /(^\s*)#+.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: {punctuation: /^#+|#+$/},
        },
    ],
    hr: {
        pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: !0,
        alias: 'punctuation',
    },
    list: {
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: !0,
        alias: 'punctuation',
    },
    'url-reference': {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
            variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
        },
        alias: 'url',
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^\*\*|^__|\*\*$|__$/},
    },
    italic: {
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^[*_]|[*_]$/},
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: {pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0},
            string: {pattern: /"(?:\\.|[^"\\])*"(?=\)$)/},
        },
    },
})