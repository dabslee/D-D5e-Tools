class ChararacterCreatorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <h1 className="mt-5">Character Creator</h1>
                <p>
                    Welcome to Brandon's D&D5e character creator! Follow the steps below to create your character.
                    Customization options may currently be limited.
                    This creator quotes <a href="https://www.dndbeyond.com">D&D Beyond</a> for much of its descriptors and rules.
                    This project is not commercial and cedes all rights to the original creators of D&D.
                </p>
                <form className="form">
                    <h2 className="mt-3">❶ Choose a race</h2>
                    <div className="card selectable-card">
                        <div className="card-body d-flex flex-column">
                            <div className="d-flex flex-row">
                                <h5 className="card-title">
                                    <span className="me-3">Dwarf</span>
                                </h5>
                                <span className="link-primary" data-bs-toggle="collapse" href="#dwarfCollapse" role="button" aria-expanded="false" aria-controls="dwarfCollapse">
                                    [Toggle info]
                                </span>
                            </div>
                            <div id="dwarfCollapse" className="collapse">
                                <div className="d-flex flex-sm-row flex-column">
                                    <div>
                                        <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.</p>
                                        <div><b>Key traits:</b>
                                            <ul>
                                                <li>Usual alignment:<span className="badge bg-success"><i className="fas fa-balance-scale"></i> Lawful good</span></li>
                                                <li>Ability score perks:<span className="badge bg-success"><i className="fas fa-star"></i> +2 Constitution</span></li>
                                                <li>Proficiencies:
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Battleaxe</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Handaxe</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Light hammer</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Warhammer</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Artisan's Tools (1)</span>
                                                </li>
                                                <li>Other traits:
                                                    <span className="badge bg-primary"><i className="fas fa-eye"></i> Darkvision</span>
                                                    <span className="badge bg-primary"><i className="fas fa-eye"></i> Dwarven Resilience</span>
                                                    <span className="badge bg-primary"><i className="fas fa-eye"></i> Stonecunning</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <b>Subraces:</b>
                                        <div className="d-flex flex-column flex-sm-row">
                                            <div className="card me-3 mb-3" style={{width: "25rem", maxWidth: "100%"}}>
                                                <div className="card-body selectable-card">
                                                    <h6 className="card-title">Hill Dwarf</h6>
                                                    <div className="mb-3">
                                                        <span className="badge bg-success"><i className="fas fa-star"></i> +1 Wisdom</span>
                                                        <span className="badge bg-primary"><i className="fas fa-eye"></i> Dwarven Toughness</span>
                                                    </div>
                                                    <p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.</p>
                                                </div>
                                            </div>
                                            <div className="card me-3 mb-3" style={{width: "25rem", maxWidth: "100%"}}>
                                                <div className="card-body selectable-card">
                                                    <h6 className="card-title">Mountain Dwarf</h6>
                                                    <div className="mb-3">
                                                        <span className="badge bg-success"><i className="fas fa-star"></i> +2 Strength</span>
                                                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Light Armor</span>
                                                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Medium Armor</span>
                                                    </div>
                                                    <p>As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="race-image" src="https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-3">❷ Choose a class</h2>

                </form>
            </div>
        );
    }
}

ReactDOM.render(
    <ChararacterCreatorApp />,
    document.getElementById('character_creator_react')
);