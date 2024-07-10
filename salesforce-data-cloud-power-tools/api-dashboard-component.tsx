import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPIConnections, updateAPIConnection } from '../store/actions/apiDashboardActions';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const APIIntegrationDashboard = () => {
  const dispatch = useDispatch();
  const { connections, loading, error } = useSelector(state => state.apiDashboard);

  useEffect(() => {
    dispatch(fetchAPIConnections());
  }, [dispatch]);

  const handleConnectionToggle = (connectionId, isEnabled) => {
    dispatch(updateAPIConnection(connectionId, { isEnabled }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>API Integration Dashboard</h2>
      {connections.map(connection => (
        <Card key={connection.id}>
          <CardHeader>{connection.name}</CardHeader>
          <CardContent>
            <p>Status: {connection.status}</p>
            <p>Last Sync: {new Date(connection.lastSync).toLocaleString()}</p>
            <Switch
              checked={connection.isEnabled}
              onCheckedChange={(checked) => handleConnectionToggle(connection.id, checked)}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default APIIntegrationDashboard;
