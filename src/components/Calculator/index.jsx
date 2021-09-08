import React, { useState } from 'react'
import { Parser } from 'expr-eval';
import './styles.css';

const Calculator = () => {
    const parser = new Parser();
    const calcList = [
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '', '=', '/'],
    ];

    const [exp, setExp] = useState('Type expression!');
    const [inpFl, setInpFl] = useState(true);

    const handleInput = (el) => {
        if (el === '=')
        {
            setExp(parser.parse(exp).evaluate());
            setInpFl(true);
        }
        else
        {
            if (!inpFl)
                setExp(exp+el);
            else
            {
                setExp(el);
                setInpFl(false);
            }
        }
    }

    return (
        <div className="calc container py-3 p-2 mb-5">
            <div className="row big-row p-2">
                <div className="col-12 text-right">
                    {exp}
                </div>
            </div>
            {calcList.map((row, i) => (
                <div key={i} className="row">
                    {row.map((el, j) => (
                        <div key={j} className="col-3 text-center py-4 p-3 calc-btn" onClick={() => handleInput(el)}>
                            {el}
                        </div>
                    ))}
                </div>
            ))}
            <div className="row big-row">
                <div className="col-12 text-center py-3 p-2 calc-btn" onClick={() => setExp('Type expression!')}>
                    Clear
                </div>
            </div>
        </div>
    );
}

export default Calculator;
