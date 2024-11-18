import React, { useState } from 'react';
import PlatformSelector from './PlatformSelector';
import CampaignList from './CampaignList';
import { Plus } from 'lucide-react';
import NewCampaign from './NewCampaign';

function Dashboard() {
  const [showNewCampaign, setShowNewCampaign] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState(['all']);
  const [selectedStatus, setSelectedStatus] = useState('all');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <button
          onClick={() => setShowNewCampaign(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          <Plus size={20} />
          Add New
        </button>
      </div>

      <PlatformSelector
        selectedPlatforms={selectedPlatforms}
        onPlatformChange={setSelectedPlatforms}
      />

      <div className="mt-6">
        <CampaignList
          selectedPlatforms={selectedPlatforms}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />
      </div>

      {showNewCampaign && (
        <NewCampaign onClose={() => setShowNewCampaign(false)} />
      )}
    </div>
  );
}

export default Dashboard;