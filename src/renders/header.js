/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";
import {Header} from "semantic-ui-react";

export class HeaderRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "heading_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "heading_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        let startingToken = tokenList[0];
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <Header as={startingToken["tag"]} key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </Header>
    }

}
