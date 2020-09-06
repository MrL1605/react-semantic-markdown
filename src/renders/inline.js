/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";

export class InlineRenderer {
    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "inline";
    }

    render(token, _key) {
        if (!token.children.length) {
            return token.content;
        }

        let contents = [];
        for (let eachChild of token.children) {
            if (eachChild.type === "text" || eachChild.type === "emoji")
                contents.push(eachChild.content);
            else {
                console.error("Unsupported type", eachChild);
                contents.push("ABRAKADABRA");
            }
        }
        return contents.join(" ");
    }
}
