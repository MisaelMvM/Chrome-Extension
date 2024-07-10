import { executeAPIRequest } from '../background/api_service';
import { logError } from '../utils/errorHandler';

export async function getDataMappings() {
  try {
    return await executeAPIRequest('/data-cloud/mappings', 'GET');
  } catch (error) {
    logError(error, { context: 'getDataMappings' });
    throw new Error('Failed to fetch data mappings');
  }
}

export async function createDataMapping(mappingConfig) {
  try {
    return await executeAPIRequest('/data-cloud/mappings', 'POST', mappingConfig);
  } catch (error) {
    logError(error, { context: 'createDataMapping', mappingConfig });
    throw new Error('Failed to create data mapping');
  }
}

export async function updateDataMapping(mappingId, updates) {
  try {
    return await executeAPIRequest(`/data-cloud/mappings/${mappingId}`, 'PATCH', updates);
  } catch (error) {
    logError(error, { context: 'updateDataMapping', mappingId, updates });
    throw new Error('Failed to update data mapping');
  }
}

export async function deleteDataMapping(mappingId) {
  try {
    await executeAPIRequest(`/data-cloud/mappings/${mappingId}`, 'DELETE');
    return { success: true };
  } catch (error) {
    logError(error, { context: 'deleteDataMapping', mappingId });
    throw new Error('Failed to delete data mapping');
  }
}
