// This script will be injected into Salesforce pages
console.log('Salesforce Data Cloud Power Tools content script loaded');

// For MVP, we'll just add a simple message to the page
const messageDiv = document.createElement('div');
messageDiv.textContent = 'Salesforce Data Cloud Power Tools is active';
messageDiv.style.position = 'fixed';
messageDiv.style.top = '10px';
messageDiv.style.right = '10px';
messageDiv.style.backgroundColor = 'yellow';
messageDiv.style.padding = '5px';
messageDiv.style.zIndex = '9999';
document.body.appendChild(messageDiv);
