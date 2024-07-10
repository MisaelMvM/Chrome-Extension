import { executeAPIRequest } from '../background/api_service';

export async function executeDataCloudQuery(query) {
  return executeAPIRequest('/data-cloud/query', 'POST', { query });
}

export async function getQueryHistory() {
  return executeAPIRequest('/data-cloud/query-history', 'GET');
}

export async function saveQuery(name, query) {
  return executeAPIRequest('/data-cloud/saved-queries', 'POST', { name, query });
}

export async function getSavedQueries() {
  return executeAPIRequest('/data-cloud/saved-queries', 'GET');
}

export async function optimizeQuery(query) {
  // Implement query optimization logic here
  // This could involve analyzing the query structure, suggesting indexes, etc.
  return { optimizedQuery: query, suggestions: [] };
}
