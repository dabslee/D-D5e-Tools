class ChararacterCreatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <h1 class="mt-5">Character Creator</h1>
                <p>Welcome to Brandon's D&D5e character creator! Follow the steps below to create your character. Customization options may currently be limited.</p>
                <form class="form">
                    <h2>Choose a race</h2>
                    <div class="card">
                        <div class="card-header">
                            Dwarf
                        </div>
                        <div class="card-body">

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <ChararacterCreatorApp />,
    document.getElementById('character_creator_react')
);