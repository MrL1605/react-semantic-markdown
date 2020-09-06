/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";

export class LinkRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "link_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "link_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        let startingToken = tokenList[0];
        tokenList = tokenList.slice(1, tokenList.length - 1);
        let attributes = {};
        if (startingToken.attrs) {
            for (let eachAttr of startingToken.attrs) {
                attributes = {...attributes, [eachAttr[0]]: eachAttr[1]};
            }
        }
        return <a {...attributes} key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </a>
    }

}

