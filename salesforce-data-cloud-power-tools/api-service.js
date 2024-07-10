let apiToken = null;

export function initializeAPIService() {
  // Initialize API service, perhaps by retrieving stored credentials
  chrome.storage.local.get(['salesforceToken'], (result) => {
    apiToken = result.salesforceToken;
  });
}

export async function executeAPIRequest(endpoint, method, body) {
  if (!apiToken) {
    throw new Error('API not initialized');
  }

  const response = await fetch(`https://your-salesforce-instance.salesforce.com/services/data/v52.0${endpoint}`, {
    method: method,
    headers: {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}
