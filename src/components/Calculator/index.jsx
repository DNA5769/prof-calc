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

    const [exp, setExp] = useState('');
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
        <div className="calc container">
            <div className="row">
                <div className="col-12">
                    {exp}
                </div>
            </div>
            {calcList.map((row, i) => (
                <div key={i} className="row">
                    {row.map((el, j) => (
                        <div key={j} className="col-3" onClick={() => handleInput(el)}>
                            {el}
                        </div>
                    ))}
                </div>
            ))}
            <div className="row">
                <div className="col-12" onClick={() => setExp('')}>
                    Clear
                </div>
            </div>
        </div>
    );
}

export default Calculator;
