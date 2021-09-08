import React from 'react'
import './styles.css';

const Calculator = () => {
    const calcList = [
        ['7', '8', '9', 'X'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '', '=', '/'],
    ];

    return (
        <div className="calc container">
            <div className="row">
                <div className="col-12">
                    9+10
                </div>
            </div>
            {calcList.map((row, i) => (
                <div key={i} className="row">
                    {row.map((el, j) => (
                        <div key={j} className="col-3">
                            {el}
                        </div>
                    ))}
                </div>
            ))}
            <button>Clear</button>
        </div>
    );
}

export default Calculator;
