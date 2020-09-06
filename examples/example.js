/**
 * Created By : Lalit
 * Created On : 05/09/20
 */

const e = React.createElement;

class ExampleForRSM extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            md: "",
            loading: false
        };
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            fetch("example.md").then((res) => {
                res.text()
                    .then((content) => this.setState({loading: false, md: content}));
            });
        });
    }

    render() {
        const {loading, md} = this.state;
        if (loading || !md) {
            return "Loading. Please wait."
        }
        // console.log("Rendering", md);
        return e(ReactSemanticMarkdown, {}, md);
    }
}

ReactDOM.render(e(ExampleForRSM), document.getElementById("root"));
