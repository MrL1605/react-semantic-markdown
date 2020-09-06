/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import {HeaderRenderer} from "./header";
import React, {Component} from "react";
import {InlineRenderer} from "./inline";
import {HorizontalLineRenderer} from "./horizontal_line";
import {ParagraphRenderer} from "./paragraph";
import {BulletListRenderer, ListItemRenderer} from "./lists";
import {StrongRenderer} from "./strong";
import {LineBreakRenderer} from "./line_break";
import {LinkRenderer} from "./link";


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
                let blockTokens = []
                blockTokens.push(currentToken);
                tokenIndex += 1;
                currentToken = tokenList[tokenIndex];
                while (!eachRenderer.isBlockEnd(currentToken)) {
                    blockTokens.push(currentToken);
                    tokenIndex += 1;
                    if (tokenIndex >= tokenList.length) {
                        console.error("Reached end of token list, but did not find block end");
                        break;
                    }
                    currentToken = tokenList[tokenIndex];
                }
                if (eachRenderer.isBlockEnd(currentToken)) {
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



