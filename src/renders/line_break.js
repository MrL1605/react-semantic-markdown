/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";

export class LineBreakRenderer {

    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "softbreak";
    }

    render(token, _key) {
        return <br key={_key}/>;
    }
}
