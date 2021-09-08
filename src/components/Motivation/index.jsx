import React, { useEffect, useState } from 'react'
import './styles.css';

const Motivation = () => {
    const [quote, setQuote] = useState('');

    // Function which fetches quote from the API and sets it as quote
    const getQuote = () => {
        fetch('https://favqs.com/api/qotd')
            .then(res => res.json())
            .then(data => setQuote(data.quote.body));
    };

    // Getting a quote when the component gets mounted initially
    useEffect(() => {
        getQuote();
    }, []);
    
    return (
        <div className="motiv p-3">
            <p>{quote}</p>
            <div className="d-flex flex-row-reverse">
                {/* Getting new quote whenever user clicks on the Refresh button */}
                <button type="button" class="btn btn-outline-dark" onClick={getQuote}>Refresh</button>
            </div>
        </div>
    )
}

export default Motivation
