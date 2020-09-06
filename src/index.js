/**
 * Created By : Lalit
 * Created On : 05/09/20
 */

import React, {Component} from "react";
import MarkdownIt from "markdown-it";
import {Renders} from "./renders";

export class ReactSemanticMarkdown extends Component {

    constructor(props) {
        super(props);
        // TODO: Have this customizable in future.
        this.mdit = MarkdownIt();
    }

    render() {
        let parsedTokens = this.mdit.parse(this.props.children);
        return <Renders tokenList={parsedTokens}/>;
    }

}



