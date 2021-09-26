class CoinConverterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        let COINS = {
            "cp" : "Copper",
            "sp" : "Silver",
            "ep" : "Electrum",
            "gp" : "Gold",
            "pp" : "Platinum"
        };
        let COIN_VALUES = {
            "cp" : 1,
            "sp" : 10,
            "ep" : 50,
            "gp" : 100,
            "pp" : 1000
        };
        let COIN_COLORS = {
            "cp" : "#B87333",
            "sp" : "#C0C0C0",
            "ep" : "#F2E279",
            "gp" : "#FFD700",
            "pp" : "#E5E4E2"
        }

        // number input fields
        let numberinput = [];
        for (let key in COINS) {
            numberinput.push(
                <div className="mb-3 row">
                    <label for={key + "-field"} className="col-sm-6 col-form-label">
                        <i className="fas fa-stop-circle" style={{color: COIN_COLORS[key]}}></i> {COINS[key]} pieces ({key}):
                    </label>
                    <div className="col-sm-6">
                        <input type="number" readonly className="form-control" id={key + "-field"} defaultValue="0"/>
                    </div>
                </div>
            );
        }

        // radio select
        let radioselect = [];
        for (let key in COINS) {
            radioselect.push(
                <div className="form-check">
                    <input type="radio" className="form-check-input" id={key+"-radio"} name="radioselect"></input>
                    <label className="form-check-label" for={key+"-radio"}>
                        <i className="fas fa-stop-circle" style={{color: COIN_COLORS[key]}}></i> {COINS[key]} pieces ({key}):
                    </label>
                </div>
            )
        }

        return (
            <div>
                <h1 className="mt-5">Coin Converter</h1>
                <div className="accordion mb-3" id="conversionAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#conversionTable" aria-expanded="true" aria-controls="conversionTable">
                                Conversion table
                            </button>
                        </h2>
                        <div id="conversionTable" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#conversionAccordion">
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Coin</th>
                                                <th>CP</th>
                                                <th>SP</th>
                                                <th>EP</th>
                                                <th>GP</th>
                                                <th>PP</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Copper (cp)</td>
                                                <td>1</td>
                                                <td>1/10</td>
                                                <td>1/50</td>
                                                <td>1/100</td>
                                                <td>1/1,000</td>
                                            </tr>
                                            <tr>
                                                <td>Silver (sp)</td>
                                                <td>10</td>
                                                <td>1</td>
                                                <td>1/5</td>
                                                <td>1/10</td>
                                                <td>1/100</td>
                                            </tr>
                                            <tr>
                                                <td>Electrum (ep)</td>
                                                <td>50</td>
                                                <td>5</td>
                                                <td>1</td>
                                                <td>1/2</td>
                                                <td>1/20</td>
                                            </tr>
                                            <tr>
                                                <td>Gold (gp)</td>
                                                <td>100</td>
                                                <td>10</td>
                                                <td>2</td>
                                                <td>1</td>
                                                <td>1/10</td>
                                            </tr>
                                            <tr>
                                                <td>Platinum (pp)</td>
                                                <td>1,000</td>
                                                <td>100</td>
                                                <td>20</td>
                                                <td>10</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="d-flex flex-sm-row flex-column justify-content-between">
                    <div className="mb-3 col-sm-4">
                        <h2>Input</h2>
                        {numberinput}
                    </div>
                    <div className="mb-3 col-sm-3">
                        <h2>Conversion Options</h2>
                        <label className="col-form-label">Convert to:</label>
                        <div className="d-flex flex-column justify-content-between">
                            {radioselect}
                        </div>
                    </div>
                    <div className="mb-3 col-sm-3">
                        <h2>Output</h2>
                        <p style={{color: COIN_COLORS["cp"], fontWeight: "bold"}}>
                            <i className="fas fa-stop-circle"></i> 50 cp
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <CoinConverterApp />,
    document.getElementById('coin_converter_react')
);