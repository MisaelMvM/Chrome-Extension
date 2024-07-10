chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'executeQuery') {
    // In a real implementation, this would call the Salesforce API
    // For MVP, we'll just return a mock result
    const mockResults = [
      { Id: '001', Name: 'Sample Account 1' },
      { Id: '002', Name: 'Sample Account 2' }
    ];
    sendResponse({ results: mockResults });
  }
  return true; // Indicates that the response is sent asynchronously
});
