/**
 * Created By : Lalit
 * Created On : 10/09/20
 */

import React from "react";

export class CodeRenderer {

    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "code_inline";
    }

    render(token, _key) {
        return <code key={_key}>
            {token["content"]}
        </code>;
    }

}
