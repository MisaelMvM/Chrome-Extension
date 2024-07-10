import AWS from 'aws-sdk';

let s3Client = null;

export function initializeS3Service() {
  chrome.storage.local.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], (result) => {
    AWS.config.update({
      accessKeyId: result.awsAccessKeyId,
      secretAccessKey: result.awsSecretAccessKey,
      region: result.awsRegion
    });
    s3Client = new AWS.S3();
  });
}

export async function uploadToS3(bucketName, key, body) {
  if (!s3Client) {
    throw new Error('S3 service not initialized');
  }

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: body
  };

  return new Promise((resolve, reject) => {
    s3Client.upload(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
