/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";

export class ParagraphRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "paragraph_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
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

