class BestiaryApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results_list : null
        };
    }

    loadJson = () => {
        var that = this;
        $.getJSON('https://www.dnd5eapi.co/api/monsters?name=' + $("#ffield-name").val(), function(json_content) {
            that.setState({results_list : json_content.results});
        });
    }
    
    render() {
        let results_table = []
        for (let result in this.state.results_list) {
            console.log(result);
            results_table.push(
                <tr>
                    <td>{this.state.results_list[result].name}</td>
                    <td>{this.state.results_list[result].name}</td>
                    <td>{this.state.results_list[result].name}</td>
                </tr>
            )
        }

        return (
            <div>
                <h1 className="mt-5">Bestiary</h1>
                <div className="row justify-content-between">
                    <div className="col-sm-5 mb-3">
                        <div className="card bg-light mb-3">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="ffield-name" className="fw-bold">Search by name: </label>
                                    <input id="ffield-name" type="text" className="form-control" onChange={this.loadJson}></input>
                                </div>
                                <label className="fw-bold">Filter by Challenge Rating (CR): </label>
                                <div className="d-flex flex-sm-row flex-column align-items-center mb-3">
                                    <div className="col-sm-4">
                                        <input id="ffield-min-cr" type="number" className="form-control" placeholder="Minimum"></input>
                                    </div>
                                    <span className="col-sm-1 text-center">to</span>
                                    <div className="col-sm-4">
                                        <input id="ffield-min-cr" type="number" className="form-control" placeholder="Maximum"></input>
                                    </div>
                                    <span className="col-sm-3 text-center">(inclusive)</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="ffield-type" className="fw-bold">Filter by type: </label>
                                    <select id="ffield-type" className="form-select">
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable-table">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>CR</th>
                                        <th>Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results_table}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-6 card mb-3 border-warning" style={{height: "fit-content"}}>
                        <div className="card-body">
                            <h4 className="card-title">Monster name</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <BestiaryApp />,
    document.getElementById('bestiary_react')
);