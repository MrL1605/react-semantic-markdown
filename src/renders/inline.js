/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";

export class InlineRenderer {
    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "inline" || token["type"] === "text" || token["type"] === "emoji";
    }

    render(token, _key) {
        if (token["type"] === "text" || token["type"] === "emoji")
            return token.content;
        if (!token.children || !token.children.length)
            return token.content;

        return <Renders key={_key} tokenList={token.children} startingKey={_key}/>;
    }
}
