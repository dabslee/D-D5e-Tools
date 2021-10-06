class BestiaryApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        <div>
            <h1 className="mt-5">Bestiary</h1>
        </div>
    }
}

ReactDOM.render(
    <BestiaryApp />,
    document.getElementById('bestiary_react')
);