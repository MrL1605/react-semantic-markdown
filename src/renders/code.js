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
        return token["type"] === "code_inline";
    }

    render(token, _key) {
        return <code key={_key}>{token["content"]}</code>;
    }
}

export class CodeBlockRenderer {

    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "fence" || token["type"] === "code_block";
    }

    render(token, _key) {
        const language = token.info ? token.info.trim() : "";

        return <Segment key={_key}>
            <pre><code className={language}>{token["content"]}</code></pre>
        </Segment>;
    }
}
