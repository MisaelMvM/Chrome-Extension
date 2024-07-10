import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import APIIntegrationDashboard from '../../components/APIIntegrationDashboard';
import { fetchAPIConnections, updateAPIConnection } from '../../store/actions/apiDashboardActions';

jest.mock('../../store/actions/apiDashboardActions');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('APIIntegrationDashboard Component', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      apiDashboard: {
        connections: [
          { id: '1', name: 'API 1', status: 'Active', lastSync: '2023-07-10T12:00:00Z', isEnabled: true },
          { id: '2', name: 'API 2', status: 'Inactive', lastSync: '2023-07-09T12:00:00Z', isEnabled: false },
        ],
        loading: false,
        error: null
      }
    });

    fetchAPIConnections.mockImplementation(() => ({ type: 'FETCH_API_CONNECTIONS' }));
    updateAPIConnection.mockImplementation((id, updates) => ({ type: 'UPDATE_API_CONNECTION', payload: { id, ...updates } }));
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <APIIntegrationDashboard />
      </Provider>
    );
  });

  it('displays API connections', () => {
    const { getByText } = render(
      <Provider store={store}>
        <APIIntegrationDashboard />
      </Provider>
    );

    expect(getByText('API 1')).toBeInTheDocument();
    expect(getByText('API 2')).toBeInTheDocument();
  });

  it('toggles API connection', async () => {
    const { getAllByRole } = render(
      <Provider store={store}>
        <APIIntegrationDashboard />
      </Provider>
    );

    const switches = getAllByRole('switch');
    fireEvent.click(switches[1]); // Toggle the second API connection

    await waitFor(() => {
      expect(updateAPIConnection).toHaveBeenCalledWith('2', { isEnabled: true });
    });
  });

  it('fetches API connections on mount', () => {
    render(
      <Provider store={store}>
        <APIIntegrationDashboard />
      </Provider>
    );

    expect(fetchAPIConnections).toHaveBeenCalled();
  });
});
