import { initializeAPIService } from './api_service';
import { initializeS3Service } from './s3_service';
import { initializeQueryService } from './query_service';
import { initializeETLService } from './etl_service';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Salesforce Data Cloud Power Tools installed');
  initializeAPIService();
  initializeS3Service();
  initializeQueryService();
  initializeETLService();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'executeQuery':
      // Handle query execution
      break;
    case 'uploadToS3':
      // Handle S3 upload
      break;
    case 'runETLJob':
      // Handle ETL job execution
      break;
    // Add more cases as needed
    default:
      console.log('Unknown action:', request.action);
  }
  return true; // Indicates that the response will be sent asynchronously
});
