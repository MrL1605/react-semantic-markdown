/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";

export class LinkRenderer {

    isBlockStart(token) {
return token["type"] === "link_open";
    }

    isBlockEnd(token) {
return token["type"] === "link_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        const startingToken = tokenList[0];
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

