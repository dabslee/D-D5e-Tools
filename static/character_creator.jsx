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
                            <span className="badge bg-success">+2</span>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Intelligence</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Wisdom</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                            <span className="badge bg-success">+1</span>
                        </div>
                        <div className="input-group flex-nowrap mb-1">
                            <span className="input-group-text">Charisma</span>
                            <input className="form-control" style={{maxWidth: "fit-content"}} placeholder="Drag score here"/>
                        </div>
                    </div>
                    <h2 className="mt-3">❹ Describe your character</h2>
                    <div className="d-flex flex-sm-row flex-column">
                        <div className="col-5 mb-3">
                            <label for="alignment-field" className="form-label"><b>Alignment:</b></label>
                            <table>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Lawful good</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Neutral good</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Chaotic good</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Lawful neutral</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> True neutral</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Chaotic neutral</span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Lawful evil</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> True evil</span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" className="form-check-input" name="alignment-field" />
                                            <span className="badge bg-warning text-dark"><i className="fas fa-balance-scale"></i> Chaotic evil</span>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="col-sm-5 mb-3">
                            <div className="d-flex flex-row mb-2" style={{height: "fit-content", alignItems: "baseline"}}>
                                <label for="ideals-field" className="form-label me-3"><b>Ideals:</b></label>
                                <input type="text" className="form-control" id="ideals-field"/>
                            </div>
                            <div className="d-flex flex-row" style={{height: "fit-content", alignItems: "baseline"}}>
                                <label for="flaws-field" className="form-label me-3"><b>Flaws:</b></label>
                                <input type="text" className="form-control" id="flaws-field"/>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-sm-row flex-column">
                        <div className="d-flex flex-row col-sm-2 col-12" style={{alignItems: "center"}}>
                            <label for="height-field" className="form-label me-3"><b>Height:</b></label>
                            <input type="text" className="form-control mb-3 me-3" id="height-field"></input>
                        </div>
                        <div className="d-flex flex-row col-sm-2 col-12" style={{alignItems: "center"}}>
                            <label for="weight-field" className="form-label me-3"><b>Weight:</b></label>
                            <input type="text" className="form-control mb-3 me-3" id="weight-field"></input>
                        </div>
                        <div className="d-flex flex-row col-sm-2 col-12" style={{alignItems: "center"}}>
                            <label for="eye-color-field" className="form-label me-3"><b>Eye color:</b></label>
                            <input type="color" className="form-control form-control-color mb-3" style={{height: "fit-content"}} id="eye-color-field"></input>
                        </div>
                        <div className="d-flex flex-row col-sm-2 col-12" style={{alignItems: "center"}}>
                            <label for="hair-color-field" className="form-label me-3"><b>Hair color:</b></label>
                            <input type="color" className="form-control form-control-color mb-3" style={{height: "fit-content"}} id="hair-color-field"></input>
                        </div>
                        <div className="d-flex flex-row col-sm-2 col-12" style={{alignItems: "center"}}>
                            <label for="skin-color-field" className="form-label me-3"><b>Skin color:</b></label>
                            <input type="color" className="form-control form-control-color mb-3" style={{height: "fit-content"}} id="skin-color-field"></input>
                        </div>
                    </div>
                    <label for="other-descriptors-field" className="form-label"><b>Other notable descriptors:</b></label>
                    <textarea className="form-control mb-3" rows="2" id="other-descriptors-field"></textarea>
                    <b>Background:</b>
                    <div className="card selectable-card">
                        <div className="card-body d-flex flex-column">
                            <div className="d-flex flex-row">
                                <h5 className="card-title">
                                    <span className="me-3">Acolyte</span>
                                </h5>
                                <span className="link-primary" data-bs-toggle="collapse" href="#acolyteCollapse" role="button" aria-expanded="false" aria-controls="acolyteCollapse">
                                    [Toggle info]
                                </span>
                            </div>
                            <div id="acolyteCollapse" className="collapse">
                                <p>You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.</p>
                                <p>
                                    <b>Additional proficiencies: </b>
                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Insight</span>
                                    <span className="badge bg-dark"><i className="fas fa-book"></i> Religion</span>
                                    <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Disguise Kit</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <label for="backstory-field" className="form-label"><b>Backstory:</b></label>
                    <textarea className="form-control mb-3" rows="5" id="backstory-field"></textarea>
                    <h2 className="mt-3">❺ Choose starting equipment</h2>
                    <p>You have one of two options for choosing your starting equipment:</p>
                    <ul>
                        <label><input type="radio" name="start-equip-method-field"/> Go with the default starting equipment given your race, class, and background:</label>
                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Quarterstaff</span>
                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Component Pouch</span>
                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Scholar's Pack</span>
                        <span className="badge bg-secondary"><i className="fas fa-hammer"></i> Spellbook</span>
                        <br/>
                        <label><input type="radio" name="start-equip-method-field"/> Receive <span class="text-warning"><b>110gp</b></span> to spend on the equipment below.</label>
                    </ul>
                    <p>Hold the <kbd>CTRL</kbd> key to select multiple items. Make sure that your equipment weight does not exceed your wealth or your carrying capacity.</p>
                    <div className="d-flex flex-sm-row flex-column">
                        <div className="col-sm-3 col-12 me-3" style={{alignItems: "center"}}>
                            <label for="weapons-field" className="form-label"><b>Weapons:</b></label>
                            <select className="form-select mb-3" multiple id="weapons-field">
                                <option>Club</option>
                                <option>Dagger</option>
                                <option>Greatclub</option>
                            </select>
                        </div>
                        <div className="col-sm-3 col-12 me-3" style={{alignItems: "center"}}>
                            <label for="armor-field" className="form-label"><b>Armor:</b></label>
                            <select className="form-select mb-3" multiple id="armor-field">
                                <option>Padded</option>
                                <option>Leather</option>
                                <option>Hide</option>
                            </select>
                        </div>
                        <div className="col-sm-3 col-12 me-3" style={{alignItems: "center"}}>
                            <label for="armor-field" className="form-label"><b>Other equipment:</b></label>
                            <select className="form-select mb-3" multiple id="armor-field">
                                <option>Backpack</option>
                                <option>Clothes</option>
                                <option>Paper</option>
                            </select>
                        </div>
                        <div className="col-sm-3 col-12">
                            <p>Wealth remaining: <span class="text-warning"><b>110gp</b></span></p>
                            <p>Total weight: <b><span class="text-success">0</span> / 150 lbs</b></p>
                        </div>
                    </div>
                    <h2 className="mt-3">❻ Finalize</h2>
                    <label for="additional-notes-field" className="form-label"><b>Any additional notes about character:</b></label>
                    <textarea className="form-control mb-3" rows="5" id="additional-notes-field"></textarea>
                    <div class="d-flex flex-sm-row flex-column" style={{alignItems: "center"}}>
                        <b class="me-3 mb-3">Export character as: </b>
                        <button class="btn btn-primary me-3 mb-2"><i class="fas fa-file-code"></i> JSON file</button>
                        <button class="btn btn-primary me-3 mb-2"><i class="fas fa-file-pdf"></i> Editable PDF character sheet</button>
                        <button class="btn btn-primary me-3 mb-2"><i class="fas fa-file-pdf"></i> Non-editable PDF character sheet</button>
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