import React, { useEffect, useState } from 'react'
import './styles.css';

const Motivation = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://favqs.com/api/qotd')
            .then(res => res.json())
            .then(data => setQuote(data.quote.body));
    }, []);
    
    return (
        <div className="motiv">
            <p>{quote}</p>
        </div>
    )
}

export default Motivation
