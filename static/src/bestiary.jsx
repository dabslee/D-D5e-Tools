function getModifier(score) {
    return Math.floor((score-10)/2);
}
function withSign(score) {
    return (
        <span>
            {(score >= 0 ? "+" : "")}{score.toString()}
        </span>
    );
}
function withSignColor(score) {
    return (
        <span className={score >= 0 ? (score == 0 ? "text-muted" : "text-success") : "text-danger"}>
            {(score >= 0 ? "+" : "")}{score.toString()}
        </span>
    );
}

const badge_styles = {
    "ability" : {
        style : "bg-light text-dark",
        icon : "star",
    },
    "skill" : {
        style : "bg-dark",
        icon : "book",
    },
    "alignment" : {
        style : "bg-warning text-dark",
        icon : "balance-scale",
    },
    "tool" : {
        style : "bg-secondary",
        icon : "tools",
    },
    "weapon" : {
        style : "bg-secondary",
        icon : "fist-raised",
    },
    "spell" : {
        style : "bg-primary",
        icon : "fire",
    },
    "armor" : {
        style : "bg-secondary",
        icon : "shield-alt",
    },
    "vehicle" : {
        style : "bg-secondary",
        icon : "horse",
    },
    "good" : {
        style : "bg-secondary",
        icon : "boxes",
    },
    "coin" : {
        style : "bg-transparent text-warning",
        icon : "stop-circle"
    },
    "other" : {
        style: "bg-transparent text-danger",
        icon : "exclamation"
    },
    "trait" : {
        style : "bg-primary",
        icon : "eye",
    }
}
class Badge extends React.Component {
    render() {
        let style = badge_styles[this.props.type];
        return (
            <span className={"badge " + style.style}>
                <i className={"fas fa-" + style.icon}></i> {this.props.text}
            </span>
        )
    }
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
            let profs = {};
            for (let item in monster.proficiencies) {
                let name = monster.proficiencies[item].proficiency.name;
                let label = name.split(": ")[0].toLowerCase();
                if (label == "saving throw") label = "ability";
                let value = name.split(": ")[1];

                if (!(label in badge_styles)) label = "other";
                if (!(label in profs)) {
                    profs[label] = [];
                }
                profs[label].push(
                    <Badge type={label} text={[value, " ", withSign(monster.proficiencies[item].value)]}/>
                );
            }
            let profs_list = [];
            for (let label in profs) {
                profs_list.push(
                    <li>
                        {label[0].toUpperCase() + label.slice(1)}: {profs[label]}
                    </li>
                );
            }
            let profs_section = null;
            if (profs_list.length > 0) {
                profs_section = (
                    <div>
                        <hr/>
                        <b>Proficiencies</b>
                        <ul>
                            {profs_list}
                        </ul>
                    </div>
                );
            }

            // immunities section
            let vul = []; // damage vulnerabilities
            for (let item in monster.damage_vulnerabilities) vul.push(<span>{monster.damage_vulnerabilities[item]}. </span>)
            let res = []; // damage resistances
            for (let item in monster.damage_resistances) res.push(<span>{monster.damage_resistances[item]}. </span>)
            let imm = []; // damage immunities
            for (let item in monster.damage_immunities) imm.push(<span>{monster.damage_immunities[item]}. </span>)
            let cimm = []; // conditional immunities
            for (let item in monster.damage_vulnerabilities) cimm.push(<span>{monster.damage_vulnerabilities[item]}. </span>)
            let immunities_section = vul.length + res.length + imm.length + cimm.length > 0 ? (
                <div>
                    <b>Vulnerabilities and Resistances</b>
                    <ul>
                        {vul.length > 0 ? <li>Vulnerabilities: {vul}</li> : null}
                        {res.length > 0 ? <li>Resistances: {res}</li> : null}
                        {imm.length > 0 ? <li>Damage immunities: {imm}</li> : null}
                        {cimm.length > 0 ? <li>Conditional immunities: {cimm}</li> : null}
                    </ul>
                </div>
            ) : null;

            // senses
            let senses = [];
            for (let sense in monster.senses) {
                senses.push(
                    <Badge type="trait" text={[sense, " ", <span>({monster.senses[sense]})</span>]} />
                );
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
                        <Badge type="alignment" text={monster.alignment}/>
                    </div>
                    <div className="d-flex flex-sm-row flex-column flex-wrap">
                        <span className="me-3"><b>XP:</b> {monster.xp}</span>
                        <span className="me-3"><b>AC:</b> {monster.armor_class}</span>
                        <span className="me-3"><b>Hit Points:</b> {monster.hit_points}</span>
                        <span className="me-3"><b>Speed:</b> {speed}</span>
                        {Object.keys(monster.languages).length > 0 ? <span className="me-3"><b>Languages:</b> {monster.languages}</span> : null}
                        {senses.length > 0 ? <span className="me-3"><b>Senses:</b> {senses}</span> : null}
                    </div>
                    <hr/>
                    <div className="d-flex flex-sm-row flex-wrap align-items-center justify-content-center">
                        <div className="ability-cell">
                            <b>STR</b>
                            <span>{monster.strength} ({withSignColor(getModifier(monster.strength))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>DEX</b>
                            <span>{monster.dexterity} ({withSignColor(getModifier(monster.dexterity))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>CON</b>
                            <span>{monster.constitution} ({withSignColor(getModifier(monster.constitution))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>INT</b>
                            <span>{monster.intelligence} ({withSignColor(getModifier(monster.intelligence))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>WIS</b>
                            <span>{monster.wisdom} ({withSignColor(getModifier(monster.wisdom))})</span>
                        </div>
                        <div className="ability-cell">
                            <b>CHA</b>
                            <span>{monster.charisma} ({withSignColor(getModifier(monster.charisma))})</span>
                        </div>
                    </div>
                    {profs_section}
                    {immunities_section}
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