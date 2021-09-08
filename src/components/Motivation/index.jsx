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
        <div className="motiv">
            <p>{quote}</p>
            <button onClick={getQuote}>Refresh</button>
        </div>
    )
}

export default Motivation
