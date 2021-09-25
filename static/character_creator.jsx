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
                                <div className="d-flex flex-sm-row flex-column" style={{justifyContent: "space-between"}}>
                                    <div>
                                        <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.</p>
                                        <div><b>Key traits:</b>
                                            <ul>
                                                <li><b>Usual alignment:</b><span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Lawful good</span></li>
                                                <li><b>Ability score perks:</b><span className="badge bg-light text-success"><i className="fas fa-star"></i> +2 Constitution</span></li>
                                                <li><b>Proficiencies:</b>
                                                    <span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Battleaxe</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Handaxe</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Light hammer</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Warhammer</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Artisan's Tools (1)</span>
                                                </li>
                                                <li><b>Other traits:</b>
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
                                                        <span className="badge bg-light text-success"><i className="fas fa-star"></i> +1 Wisdom</span>
                                                        <span className="badge bg-primary"><i className="fas fa-eye"></i> Dwarven Toughness</span>
                                                    </div>
                                                    <p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.</p>
                                                </div>
                                            </div>
                                            <div className="card me-3 mb-3" style={{width: "25rem", maxWidth: "100%"}}>
                                                <div className="card-body selectable-card">
                                                    <h6 className="card-title">Mountain Dwarf</h6>
                                                    <div className="mb-3">
                                                        <span className="badge bg-light text-success"><i className="fas fa-star"></i> +2 Strength</span>
                                                        <span className="badge bg-secondary"><i className="fas fa-shield-alt"></i> Light Armor</span>
                                                        <span className="badge bg-secondary"><i className="fas fa-shield-alt"></i> Medium Armor</span>
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
                    <div className="card selectable-card">
                        <div className="card-body d-flex flex-column">
                            <div className="d-flex flex-row">
                                <h5 className="card-title">
                                    <span className="me-3">Wizard</span>
                                </h5>
                                <span className="link-primary" data-bs-toggle="collapse" href="#wizardCollapse" role="button" aria-expanded="false" aria-controls="wizardCollapse">
                                    [Toggle info]
                                </span>
                            </div>
                            <div id="wizardCollapse" className="collapse">
                                <div className="d-flex flex-sm-row flex-column" style={{justifyContent: "space-between"}}>
                                    <div>
                                        <p>A scholarly magic-user capable of manipulating the structures of reality.</p>
                                        <div><b>Key traits:</b>
                                            <ul>
                                                <li><b>Hit dice:</b><span className="badge bg-danger"><i className="fas fa-bolt"></i> 1d6</span></li>
                                                <li>
                                                    <b>Hit points:</b><span className="badge bg-success"><i className="fas fa-heart"></i> 6 + Constitution Modifier</span>
                                                </li>
                                                <li><b>Proficiencies:</b>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Dagger</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Darts</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Sling</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Quarterstaff</span>
                                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Light Crossbow</span>
                                                </li>
                                                <li><b>Saving throws:</b>
                                                    <span className="badge bg-light text-dark"><i className="fas fa-star"></i> Intelligence</span>
                                                    <span className="badge bg-light text-dark"><i className="fas fa-star"></i> Wisdom</span>
                                                </li>
                                                <li><b>Skills:</b> Choose two from 
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Arcana</span>
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> History</span>
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Insight</span>
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Investigation</span>
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Medicine</span>
                                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Religion</span>
                                                </li>
                                                <li><b>Magic:</b>
                                                    <span className="badge bg-primary"><i className="fas fa-fire"></i> Cantrip (3)</span>
                                                    <span className="badge bg-primary"><i className="fas fa-fire"></i> 1st lv Wizard Spell (6)</span>
                                                </li>
                                                <li><b>Starting equipment:</b>
                                                    <ul>
                                                        <li><span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Quarterstaff</span> or <span className="badge bg-secondary"><i className="fas fa-fist-raised"></i> Dagger</span></li>
                                                        <li><span className="badge bg-secondary"><i className="fas fa-hammer"></i> Component Pouch</span> or <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Arcane Focus</span></li>
                                                        <li><span className="badge bg-secondary"><i className="fas fa-hammer"></i> Scholar's Pack</span> or <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Explorer's Pack</span></li>
                                                        <li><span className="badge bg-secondary"><i className="fas fa-hammer"></i> Spellbook</span></li>
                                                    </ul>
                                                    <div>Alternatively, start with <b className="text-warning">4d4 x 10gp</b> and buy equipment of your choice.</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img className="race-image" src="https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-3">❸ Determine ability scores</h2>
                    <div className="d-flex flex-row mb-3">
                        <button className="btn btn-primary"><i className="fas fa-dice-d20"></i> Roll for ability scores</button>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">15</div>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">14</div>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">13</div>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">12</div>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">10</div>
                        <div className="badge bg-secondary ability-score-badge" draggable="true">8</div>
                    </div>
                    <div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Strength</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Dexterity</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Constitution</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                            <span class="badge bg-success">+2</span>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Intelligence</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Wisdom</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                            <span class="badge bg-success">+1</span>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Charisma</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
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