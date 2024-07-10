function injectCustomUI() {
  const customUIContainer = document.createElement('div');
  customUIContainer.id = 'sfdc-power-tools-ui';
  customUIContainer.style.position = 'fixed';
  customUIContainer.style.top = '50px';
  customUIContainer.style.right = '20px';
  customUIContainer.style.zIndex = '9999';

  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'SFDC Power Tools';
  toggleButton.onclick = () => {
    const panel = document.getElementById('sfdc-power-tools-panel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  };

  const panel = document.createElement('div');
  panel.id = 'sfdc-power-tools-panel';
  panel.style.display = 'none';
  panel.style.backgroundColor = 'white';
  panel.style.border = '1px solid #ccc';
  panel.style.padding = '10px';

  // Add your custom UI elements to the panel here

  customUIContainer.appendChild(toggleButton);
  customUIContainer.appendChild(panel);
  document.body.appendChild(customUIContainer);
}

// Inject the custom UI when the page loads
injectCustomUI();
