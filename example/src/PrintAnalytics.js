import React from 'react';

const PrintAnalytics = ({ analytics }) => (
  <div className="print-analytics">
    Printing analytics {JSON.stringify(analytics, null, 2)}
  </div>
);

export default PrintAnalytics;
