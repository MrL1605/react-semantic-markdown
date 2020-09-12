/**
 * Created By : Lalit
 * Created On : 10/09/20
 */

import React from "react";
import {Segment} from "semantic-ui-react";

export class CodeRenderer {

    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "code_inline" || token["type"] === "code_block";
    }

    render(token, _key) {
        const content = <code key={_key}>{token["content"]}</code>;
        if (token["type"] === "code_block")
            return <Segment>{content}</Segment>;
        return content;
    }

}
