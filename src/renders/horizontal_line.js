/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";

export class HorizontalLineRenderer {

    isBlockStart(token) {
        return false;
    }

    isBlockEnd(token) {
        return false;
    }

    canRender(token) {
        return token["type"] === "hr";
    }

    render(token, _key) {
        return <hr key={_key}/>;
    }
}
