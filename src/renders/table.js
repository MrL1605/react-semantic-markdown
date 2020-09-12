/**
 * Created By : Lalit
 * Created On : 12/09/20
 */

import React from "react";
import {Renders} from "./index";
import {Table} from "semantic-ui-react";

export class TableRenderer {

    isBlockStart(token) {
        return token["type"] === "table_open";
    }

    isBlockEnd(token) {
        return token["type"] === "table_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <Table celled key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </Table>;
    }

}

export class TableBodyRenderer {

    isBlockStart(token) {
        return token["type"] === "thead_open" || token["type"] === "tbody_open";
    }

    isBlockEnd(token) {
        return token["type"] === "thead_close" || token["type"] === "tbody_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        const startingToken = tokenList[0];
        tokenList = tokenList.slice(1, tokenList.length - 1);
        if (startingToken["type"] === "thead_open") {
            return <Table.Header key={_key}>
                <Renders tokenList={tokenList} startingKey={_key}/>
            </Table.Header>;
        } else
            return <Table.Body key={_key}>
                <Renders tokenList={tokenList} startingKey={_key}/>
            </Table.Body>;
    }

}

export class TableRowRenderer {

    isBlockStart(token) {
        return token["type"] === "tr_open";
    }

    isBlockEnd(token) {
        return token["type"] === "tr_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        tokenList = tokenList.slice(1, tokenList.length - 1);
        return <Table.Row key={_key}>
            <Renders tokenList={tokenList} startingKey={_key}/>
        </Table.Row>;
    }

}

export class TableCellRenderer {

    isBlockStart(token) {
        return token["type"] === "th_open" || token["type"] === "td_open";
    }

    isBlockEnd(token) {
        return token["type"] === "th_close" || token["type"] === "td_close";
    }

    canRender(token) {
        return false;
    }

    render(tokenList, _key) {
        const startingToken = tokenList[0];
        let attributes = {};
        if (startingToken.attrs) {
            for (let eachAttr of startingToken.attrs) {
                if (eachAttr[0] === "style" && eachAttr[1] === "text-align:right")
                    attributes = {...attributes, textAlign: "right"};
                else
                    attributes = {...attributes, [eachAttr[0]]: eachAttr[1]};
            }
        }
        tokenList = tokenList.slice(1, tokenList.length - 1);
        if (startingToken["type"] === "th_open")
            return <Table.HeaderCell key={_key} {...attributes}>
                <Renders tokenList={tokenList} startingKey={_key}/>
            </Table.HeaderCell>;
        else
            return <Table.Cell key={_key} {...attributes}>
                <Renders tokenList={tokenList} startingKey={_key}/>
            </Table.Cell>;
    }
}
