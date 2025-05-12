import React from 'react';

const activities = [
  { time: '10:15 AM', action: 'User uploaded a retina scan for analysis' },
  { time: '10:30 AM', action: 'Prediction: Moderate DR detected' },
  { time: '11:00 AM', action: 'User viewed result and downloaded report' },
  { time: '11:15 AM', action: 'Prediction: No DR detected' },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Recent Activity</h3>
      <ul className="space-y-3 max-h-60 overflow-y-auto">
        {activities.map((item, index) => (
          <li
            key={index}
            className="p-3 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 rounded hover:shadow transition-all duration-300"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.time}</p>
            <p className="text-md text-gray-800 dark:text-white font-medium">{item.action}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
