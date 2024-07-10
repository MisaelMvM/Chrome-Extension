# Salesforce Data Cloud Power Tools

## Overview

Salesforce Data Cloud Power Tools is a Chrome extension designed to enhance the capabilities of Salesforce Data Cloud for power users and developers. It provides a suite of advanced tools for data management, exploration, and integration within the Salesforce ecosystem.

## Features

[The features section remains the same as in the previous README]

## Installation

### For Users

1. Download the latest release from the Chrome Web Store (link to be added upon publication).
2. Click "Add to Chrome" to install the extension.

### For Developers

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/salesforce-data-cloud-power-tools.git
   ```
2. Navigate to the project directory:
   ```
   cd salesforce-data-cloud-power-tools
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Build the extension:
   ```
   npm run build
   ```
5. Open Google Chrome and navigate to `chrome://extensions`.
6. Enable "Developer mode" in the top right corner.
7. Click "Load unpacked" and select the `dist` directory created by the build process.

## Usage

After installation, click on the extension icon in the Chrome toolbar when on a Salesforce Data Cloud page. This will open the main interface of the Power Tools.

Navigate through the different features using the sidebar menu. Each tool comes with its own set of instructions and options.

## Configuration

1. Go to the extension options page by right-clicking the extension icon and selecting "Options".
2. Set up your Salesforce Data Cloud credentials and configure any necessary API connections.
3. Customize the extension settings according to your preferences and requirements.

## Development

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup

Follow the installation steps for developers above.

### Running in Development Mode

To run the extension in development mode with hot reloading:

```
npm run dev
```

### Building for Production

To create a production build:

```
npm run build
```

This will create a `dist` folder with the compiled extension files, ready for deployment.

### Running Tests

To run the test suite:

```
npm test
```

### Linting

To run the linter:

```
npm run lint
```

To automatically fix linting issues:

```
npm run lint:fix
```

## Project Structure

```
salesforce-data-cloud-power-tools/
├── manifest.json
├── popup/
├── options/
├── background/
├── content_scripts/
├── components/
├── services/
├── utils/
├── lib/
├── assets/
├── icons/
├── tests/
├── docs/
└── [Configuration files]
```

For a detailed explanation of each directory and file, please refer to our [Architecture.md](docs/Architecture.md) document.

## Contributing

We welcome contributions to the Salesforce Data Cloud Power Tools project! Please read our [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub issue tracker.

## Acknowledgments

- Salesforce for their powerful Data Cloud platform
- The open-source community for the various libraries used in this project

