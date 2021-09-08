import React, { useState } from 'react'
import { Parser } from 'expr-eval';
import './styles.css';

const Calculator = () => {
    const parser = new Parser();

    // Using an array of arrays to represent the calculator which we will use
    // to render the calculator
    const calcList = [
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '', '=', '/'],
    ];

    // The main expression which we see in the top of the calculator
    const [exp, setExp] = useState('Type expression!');

    // This is a flag which is used to indicate whether the input should clear
    // the expression or should it append to the expression. The necessity for this flag
    // is that after we calculate the result of the expression, any input after should clear
    // the expression, whereas in other cases, it should append to it
    const [inpFl, setInpFl] = useState(true);

    const handleInput = (el) => {
        // If '=' is pressed we need to calculate the result
        if (el === '=')
        {
            // Wanted to use anything other than eval() to calculate the result because
            // the only thing getting injected should be us and not our websites
            // #getvaccinated
            setExp(parser.parse(exp).evaluate());

            // Since we calculated the result, we need to clear the expression on the next input
            // so we set the flag to true
            setInpFl(true);
        }
        else if (el !== '')
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
        <div className="calc container p-2 mb-5">
            <div className="row big-row py-3 p-2">
                <div className="col-12 text-right">
                    {exp}
                </div>
            </div>
            {/* Rendering calculator from the array of arrays we made */}
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
                <div className="col-12 text-center py-3 p-2 calc-btn" onClick={() => {
                    setExp('Type expression!');
                    setInpFl(true);
                }}>
                    Clear
                </div>
            </div>
        </div>
    );
}

export default Calculator;
