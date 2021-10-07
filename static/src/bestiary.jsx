function getModifier(score) {
    return Math.floor((score-10)/2);
}
function withSign(score) {
    return <span>{score >= 0 ? "+" : ""}{score}</span>
}

class BestiaryApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results_list : null,
            selected_monster : null,
        };
    }

    componentDidMount() {
        this.loadSearch();
    }

    loadSearch = () => {
        var that = this;
        $.getJSON('https://www.dnd5eapi.co/api/monsters?name=' + $("#ffield-name").val(), function(json_content) {
            that.setState({results_list : json_content.results});
        });
    }

    loadMonster = (index) => {
        var that = this;
        $.getJSON('https://www.dnd5eapi.co/api/monsters/' + index, function(json_content) {
            that.setState({selected_monster : json_content});
        });
    }
    
    render() {
        // results table
        let results_table = [];
        for (let result in this.state.results_list) {
            let result_obj = this.state.results_list[result];
            results_table.push(
                <tr
                style={{cursor: "pointer"}}
                onClick={() => {this.loadMonster(result_obj.index)}}
                className={this.state.selected_monster && this.state.selected_monster.index==result_obj.index ? "table-active" : ""}
                >
                    <td>{result_obj.name}</td>
                    <td>{result_obj.name}</td>
                    <td>{result_obj.name}</td>
                </tr>
            )
        }

        // monster card
        let monster_card = [];
        if (this.state.selected_monster) {
            let monster = this.state.selected_monster;

            // speed
            let speed = [];
            for (let method in monster.speed)
                speed.push(<span className="me-2">{monster.speed[method]} ({method})</span>);

            // proficiencies
            let saving_throws = [];
            let skill_profs = [];
            for (let item in monster.proficiencies) {
                let name = monster.proficiencies[item].proficiency.name;
                if (name.includes("Saving Throw")) {
                    name = name.substring(14, name.length);
                    saving_throws.push(
                        <span className="badge bg-light text-success"><i className="fas fa-star"></i> {name} {withSign(monster.proficiencies[item].value)}</span>
                    );
                } else if (name.includes("Skill")) {
                    name = name.substring(7, name.length);
                    skill_profs.push(
                        <span className="badge bg-dark"><i className="fas fa-book"></i> {name} {withSign(monster.proficiencies[item].value)}</span>
                    );
                }
            }

            monster_card = (
                <div className="card-body">
                    <div className="d-flex flex-row">
                        <h4 style={{flex: "2 2 auto"}}>{monster.name}</h4>
                        <h4 className="fst-italic text-muted">CR: {monster.challenge_rating}</h4>
                    </div>
                    <div className="d-flex flex-sm-row flex-column justify-content-between mb-3">
                        <div className="fst-italic">
                            <span className="me-1">{monster.size}</span>
                            <span className="me-1">{monster.type}{monster.subtype ? " ("+monster.subtype+")" : ""}</span>
                        </div>
                        <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> {monster.alignment}</span>
                    </div>
                    <div className="d-flex flex-sm-row flex-column flex-wrap">
                        <span className="me-3"><b>AC:</b> {monster.armor_class}</span>
                        <span className="me-3"><b>Hit Points:</b> {monster.hit_points}</span>
                        <span className="me-3"><b>Speed:</b> {speed}</span>
                    </div>
                    <hr/>
                    <div className="d-flex flex-sm-row flex-wrap align-items-center justify-content-center">
                        <div className="ability-cell">
                            <b>STR</b>
                            <span>{monster.strength} ({withSign(getModifier(monster.strength))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>DEX</b>
                            <span>{monster.dexterity} ({withSign(getModifier(monster.dexterity))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>CON</b>
                            <span>{monster.constitution} ({withSign(getModifier(monster.constitution))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>INT</b>
                            <span>{monster.intelligence} ({withSign(getModifier(monster.intelligence))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>WIS</b>
                            <span>{monster.wisdom} ({withSign(getModifier(monster.wisdom))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>CHA</b>
                            <span>{monster.charisma} ({withSign(getModifier(monster.charisma))})</span>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <b>Proficiencies</b>
                        <ul>
                            <li>Saving throws: {saving_throws}</li>
                            <li>Skills: {skill_profs}</li>
                        </ul>
                    </div>
                </div>
            );
        }

        return (
            <div style={{margin: "0.3rem"}}>
                <h1 className="mt-5">Bestiary</h1>
                <div className="row justify-content-between">
                    <div className="col-sm-5 mb-3">
                        <div className="card bg-light mb-3">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="ffield-name" className="fw-bold">Search by name: </label>
                                    <input id="ffield-name" type="text" className="form-control" onChange={this.loadSearch}></input>
                                </div>
                                <label className="fw-bold">Filter by CR: </label>
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
                        {monster_card}
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