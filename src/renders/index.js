/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import {HeaderRenderer} from "./header";
import React, {Component} from "react";
import {InlineRenderer} from "./inline";
import {HorizontalLineRenderer} from "./horizontal_line";
import {ParagraphRenderer} from "./paragraph";
import {BulletListRenderer, ListItemRenderer, OrderedListRenderer} from "./lists";
import {StrongRenderer} from "./strong";
import {LineBreakRenderer} from "./line_break";
import {LinkRenderer} from "./link";
import {BlockquoteRenderer} from "./blockquote";
import {CodeRenderer} from "./code";
import {TableBodyRenderer, TableCellRenderer, TableRenderer, TableRowRenderer} from "./table";


export class Renders extends Component {

    static rendersList = [
        new HeaderRenderer(),
        new InlineRenderer(),
        new HorizontalLineRenderer(),
        new ParagraphRenderer(),
        new StrongRenderer(),
        new BulletListRenderer(),
        new ListItemRenderer(),
        new LineBreakRenderer(),
        new LinkRenderer(),
        new BlockquoteRenderer(),
        new OrderedListRenderer(),
        new CodeRenderer(),
        new TableRenderer(),
        new TableRowRenderer(),
        new TableBodyRenderer(),
        new TableCellRenderer(),
    ];

    render() {

        let {tokenList, startingKey} = this.props;
        if (!startingKey)
            startingKey = "0";
        let componentList = [], tokenIndex = 0;
        while (tokenIndex < tokenList.length) {
            let currentToken = tokenList[tokenIndex];
            let rendered = false;
            for (let eachRenderer of Renders.rendersList) {
                // Check if token is inline
                if (eachRenderer.canRender(currentToken)) {
                    componentList.push(eachRenderer.render(currentToken, startingKey + tokenIndex));
                    rendered = true;
                    break;
                }
                // Check if token is inline
                if (!eachRenderer.isBlockStart(currentToken))
                    continue;

                // If this is a Block Start, collect all blocks and send them to block renderer
                let blockTokens = [], startToken = currentToken;
                blockTokens.push(currentToken);
                tokenIndex += 1;
                currentToken = tokenList[tokenIndex];
                while (!eachRenderer.isBlockEnd(currentToken) || startToken.level !== currentToken.level) {
                    blockTokens.push(currentToken);
                    tokenIndex += 1;
                    if (tokenIndex >= tokenList.length) {
                        console.error("Reached end of token list, but did not find block end for",
                            eachRenderer, "for list", tokenList, "at index", tokenIndex);
                        break;
                    }
                    currentToken = tokenList[tokenIndex];
                }
                if (eachRenderer.isBlockEnd(currentToken) && startToken.level === currentToken.level) {
                    blockTokens.push(currentToken);
                    componentList.push(eachRenderer.render(blockTokens, startingKey + tokenIndex));
                    rendered = true;
                    break;
                }
            }
            if (!rendered)
                console.error("Unsupported block", currentToken);
            tokenIndex += 1;
        }
        return <>{componentList}</>;
    }


}



