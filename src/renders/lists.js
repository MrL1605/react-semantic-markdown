/**
 * Created By : Lalit
 * Created On : 06/09/20
 */

import React from "react";
import {Renders} from "./index";
import {List} from "semantic-ui-react";

export class BulletListRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "bullet_list_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "bullet_list_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <List bulleted key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </List>;
    }

}

export class OrderedListRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "ordered_list_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "ordered_list_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <List ordered key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </List>;
    }

}

export class ListItemRenderer {

    isBlockStart(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "list_item_open";
    }

    isBlockEnd(token) {
        if (!token["tag"])
            return false;
        return token["type"] === "list_item_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <List.Item key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </List.Item>;
    }

}
