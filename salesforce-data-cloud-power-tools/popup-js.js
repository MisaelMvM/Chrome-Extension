import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = () => {
    chrome.runtime.sendMessage({ action: 'executeQuery', query }, (response) => {
      setResults(response.results);
    });
  };

  return (
    <div>
      <h1>Salesforce Data Cloud Power Tools</h1>
      <textarea 
        value={query}
        onChange={handleQueryChange}
        placeholder="Enter your SOQL query here"
      />
      <button onClick={handleQuerySubmit}>Execute Query</button>
      {results && (
        <div>
          <h2>Results:</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('root'));
