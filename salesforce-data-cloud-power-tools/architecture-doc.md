# Salesforce Data Cloud Power Tools - Architecture

## Overview

This document provides an overview of the architecture of the Salesforce Data Cloud Power Tools Chrome extension.

## Directory Structure

- `popup/`: Contains the HTML, JS, and CSS for the extension's popup interface.
- `options/`: Contains the HTML, JS, and CSS for the extension's options page.
- `background/`: Contains background scripts that handle API requests and data processing.
- `content_scripts/`: Contains scripts that interact directly with web pages.
- `components/`: Contains React components for each major feature of the extension.
- `services/`: Contains services for interacting with external APIs (Salesforce, AWS, etc.).
- `utils/`: Contains utility functions used throughout the application.
- `lib/`: Contains third-party libraries used in the project.
- `assets/`: Contains static assets like styles and images.
- `icons/`: Contains icon files for the extension.
- `tests/`: Contains unit and integration tests.
- `docs/`: Contains project documentation.

## Key Components

1. **App.js**: The main React component that orchestrates all other components.
2. **Background Scripts**: Handle API requests and data processing in the background.
3. **Content Scripts**: Interact with and modify Salesforce web pages.
4. **React Components**: Implement the UI for each major feature.
5. **Services**: Provide interfaces for external API interactions.
6. **Redux Store**: Manages the global state of the application.

## Data Flow

1. User interacts with the UI (React components)
2. Actions are dispatched to the Redux store
3. Redux middleware processes actions (e.g., making API calls via services)
4. State is updated in the Redux store
5. React components re-render based on new state

## Security Considerations

- All API keys and sensitive data are stored securely using Chrome's storage API
- HTTPS is used for all API communications
- Content Security Policy (CSP) is implemented to prevent XSS attacks

## Performance Considerations

- React components are optimized for performance using memoization and efficient rendering techniques
- Background scripts are used for heavy computations to keep the UI responsive
- Data is cached where appropriate to reduce API calls

For more detailed information on specific components or processes, please refer to the inline documentation in the respective files.
