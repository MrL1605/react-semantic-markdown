/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";

export class ParagraphRenderer {

    isBlockStart(token) {
        return token["type"] === "paragraph_open";
    }

    isBlockEnd(token) {
        return token["type"] === "paragraph_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <p key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </p>
    }

}

export class StrongRenderer {

    isBlockStart(token) {
        return token["type"] === "strong_open";
    }

    isBlockEnd(token) {
        return token["type"] === "strong_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <strong key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </strong>
    }
}

export class ItalicRenderer {

    isBlockStart(token) {
        return token["type"] === "em_open";
    }

    isBlockEnd(token) {
        return token["type"] === "em_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <em key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </em>
    }
}

export class StrikethroughRenderer {

    isBlockStart(token) {
        return token["type"] === "s_open";
    }

    isBlockEnd(token) {
        return token["type"] === "s_close";
    }

    canRender(token) {
        return token["type"] === "code_inline";
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <s key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </s>
    }
}

