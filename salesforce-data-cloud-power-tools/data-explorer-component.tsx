import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { queryDataCloud, describeObject } from '../services/salesforce_api';
import { setCurrentObject, setObjectFields, setQueryResults } from '../store/actions/dataExplorerActions';

const DataExplorer = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { currentObject, objectFields, queryResults } = useSelector(state => state.dataExplorer);

  useEffect(() => {
    if (currentObject) {
      describeObject(currentObject)
        .then(fields => dispatch(setObjectFields(fields)))
        .catch(error => console.error('Error fetching object fields:', error));
    }
  }, [currentObject, dispatch]);

  const handleObjectChange = (e) => {
    dispatch(setCurrentObject(e.target.value));
  };

  const handleQuerySubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await queryDataCloud(query);
      dispatch(setQueryResults(results));
    } catch (error) {
      console.error('Error executing query:', error);
      // You might want to dispatch an action to set an error state here
    }
  };

  return (
    <div>
      <h2>Data Explorer</h2>
      <select onChange={handleObjectChange} value={currentObject || ''}>
        <option value="">Select an object</option>
        {/* Add your Salesforce objects here */}
      </select>
      <form onSubmit={handleQuerySubmit}>
        <textarea 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your SOQL query here"
        />
        <button type="submit">Execute Query</button>
      </form>
      {queryResults && (
        <table>
          <thead>
            <tr>
              {objectFields.map(field => <th key={field.name}>{field.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {queryResults.records.map((record, index) => (
              <tr key={index}>
                {objectFields.map(field => <td key={field.name}>{record[field.name]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataExplorer;
