import { executeAPIRequest } from '../background/api_service';

export async function queryDataCloud(soql) {
  return executeAPIRequest('/query', 'POST', { query: soql });
}

export async function describeObject(objectName) {
  return executeAPIRequest(`/sobjects/${objectName}/describe`, 'GET');
}

export async function createRecord(objectName, fields) {
  return executeAPIRequest(`/sobjects/${objectName}`, 'POST', fields);
}

export async function updateRecord(objectName, id, fields) {
  return executeAPIRequest(`/sobjects/${objectName}/${id}`, 'PATCH', fields);
}

export async function deleteRecord(objectName, id) {
  return executeAPIRequest(`/sobjects/${objectName}/${id}`, 'DELETE');
}
