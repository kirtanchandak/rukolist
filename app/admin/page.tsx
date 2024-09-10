"use client";

import { getProductName } from "../actions/actions"; // Import the server-side action
import ProductPage from "../[productname]/page";

const Dashboard = () => {
  const handleSave = () => {
    // Save changes to the user's product page
    alert("Changes saved!");
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Dashboard for</h2>

      {/* Render the Showcase Component */}
      <div className="mb-6">
        <ProductPage />
      </div>

      <button
        onClick={handleSave}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Dashboard;
