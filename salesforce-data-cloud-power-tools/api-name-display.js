function displayAPINames() {
  const elements = document.querySelectorAll('[data-aura-class="uiOutputText"]');
  elements.forEach(element => {
    const apiName = element.getAttribute('data-aura-rendered-by');
    if (apiName) {
      const apiNameSpan = document.createElement('span');
      apiNameSpan.textContent = ` (${apiName})`;
      apiNameSpan.style.color = 'gray';
      apiNameSpan.style.fontSize = '0.8em';
      element.appendChild(apiNameSpan);
    }
  });
}

// Run the function when the page loads
displayAPINames();

// Also run the function whenever the DOM changes
const observer = new MutationObserver(displayAPINames);
observer.observe(document.body, { childList: true, subtree: true });
