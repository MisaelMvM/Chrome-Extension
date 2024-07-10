import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataExplorer from './DataExplorer';
import APIIntegrationDashboard from './APIIntegrationDashboard';
import S3BucketIntegration from './S3BucketIntegration';
import DataMappingVisualization from './DataMappingVisualization';
import QueryBuilder from './QueryBuilder';
import DataLineageTracker from './DataLineageTracker';
import DocumentationGenerator from './DocumentationGenerator';
import ReportingEngine from './ReportingEngine';
import DataQualityMonitor from './DataQualityMonitor';
import UserAccessManagement from './UserAccessManagement';
import ChangeTrackingAuditing from './ChangeTrackingAuditing';
import ETLJobManager from './ETLJobManager';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          {/* Add navigation menu items here */}
        </nav>
        <main>
          <Switch>
            <Route path="/data-explorer" component={DataExplorer} />
            <Route path="/api-integration" component={APIIntegrationDashboard} />
            <Route path="/s3-integration" component={S3BucketIntegration} />
            <Route path="/data-mapping" component={DataMappingVisualization} />
            <Route path="/query-builder" component={QueryBuilder} />
            <Route path="/data-lineage" component={DataLineageTracker} />
            <Route path="/documentation" component={DocumentationGenerator} />
            <Route path="/reporting" component={ReportingEngine} />
            <Route path="/data-quality" component={DataQualityMonitor} />
            <Route path="/user-access" component={UserAccessManagement} />
            <Route path="/change-tracking" component={ChangeTrackingAuditing} />
            <Route path="/etl-manager" component={ETLJobManager} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
