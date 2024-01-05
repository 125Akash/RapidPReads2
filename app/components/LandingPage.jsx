// LandingPage.js

import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-700 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">RapidReads</h1>
        <p className="text-gray-600 text-lg mb-6">
          Stay Ahead, Stay Informed - Your Fast Track to Breaking News and Top Stories!
        </p>
        <div className="grid gap-4">
          <div className="bg-blue-700 text-white p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Breaking News</h2>
            <p>Get the latest updates as events unfold, making sure you're always in the know.</p>
          </div>
          <div className="bg-green-700 text-white p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Top Story</h2>
            <p>Discover the most talked-about stories that matter to you and the world.</p>
          </div>
          {/* Add more news items as needed */}
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Click on Login</h2>
          {/* You can add login-related content here */}
        </div>
        <div className="mt-6 text-gray-600">
          <p>Explore more features:</p>
          <ul className="list-disc pl-8">
            <li>Personalized News Feed</li>
            <li>Real-time Updates</li>
            <li>Customizable Notifications</li>
            {/* Add more features as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
