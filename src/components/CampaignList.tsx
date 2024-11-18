import React from 'react';
import { ChevronDown } from 'lucide-react';

const statuses = ['All', 'Active', 'Paused', 'Completed', 'Error', 'Draft'];

const campaigns = [
  {
    id: 1,
    name: 'Summer Outreach',
    platform: 'instagram',
    status: 'Active',
    sent: 1250,
    responses: 85,
    replyRate: '6.8%',
  },
  {
    id: 2,
    name: 'Professional Network',
    platform: 'linkedin',
    status: 'Paused',
    sent: 750,
    responses: 120,
    replyRate: '16%',
  },
  // Add more sample campaigns as needed
];

function CampaignList({ selectedPlatforms, selectedStatus, onStatusChange }) {
  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      (selectedPlatforms.includes('all') || selectedPlatforms.includes(campaign.platform)) &&
      (selectedStatus === 'all' || campaign.status.toLowerCase() === selectedStatus.toLowerCase())
  );

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-md">
            <span>Status: {selectedStatus === 'all' ? 'All' : selectedStatus}</span>
            <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 mt-2 bg-gray-800 rounded-md shadow-lg hidden group-hover:block">
            {statuses.map((status) => (
              <div
                key={status}
                onClick={() => onStatusChange(status.toLowerCase())}
                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#0D1425] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Campaign</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Total Sent</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Responses</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Reply Rate</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4">
                  <div className="font-medium">{campaign.name}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === 'Paused'
                        ? 'bg-yellow-100 text-yellow-800'
                        : campaign.status === 'Completed'
                        ? 'bg-blue-100 text-blue-800'
                        : campaign.status === 'Error'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">{campaign.sent.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">{campaign.responses.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">{campaign.replyRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CampaignList;