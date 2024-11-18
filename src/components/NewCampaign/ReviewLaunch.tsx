import React from 'react';
import { Check } from 'lucide-react';

interface ReviewLaunchProps {
  campaign: any;
  onBack: () => void;
  onLaunch: () => void;
}

function ReviewLaunch({ campaign, onBack, onLaunch }: ReviewLaunchProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Review & Launch</h2>
        <p className="text-gray-400">Review your campaign settings before launching</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Campaign Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Name</span>
              <span>{campaign.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Platform</span>
              <span>{campaign.platform}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Leads</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Leads</span>
              <span>{campaign.leads.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Schedule</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Timezone</span>
              <span>{campaign.schedule.timezone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Working Hours</span>
              <span>
                {campaign.schedule.workingHours.start} - {campaign.schedule.workingHours.end}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Messages per Day</span>
              <span>{campaign.schedule.messagesPerDay}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Back
        </button>
        <button 
          onClick={onLaunch}
          className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          <Check size={20} />
          Launch Campaign
        </button>
      </div>
    </div>
  );
}

export default ReviewLaunch;