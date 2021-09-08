import React, { useEffect, useState } from 'react'
import './styles.css';

const Motivation = () => {
    const [quote, setQuote] = useState('');

    const getQuote = () => {
        fetch('https://favqs.com/api/qotd')
            .then(res => res.json())
            .then(data => setQuote(data.quote.body));
    };

    useEffect(() => {
        getQuote();
    }, []);
    
    return (
        <div className="motiv p-3">
            <p>{quote}</p>
            <div className="d-flex flex-row-reverse">
                <button type="button" class="btn btn-outline-dark" onClick={getQuote}>Refresh</button>
            </div>
        </div>
    )
}

export default Motivation
