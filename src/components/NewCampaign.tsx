import React, { useState } from 'react';
import { X } from 'lucide-react';

const steps = ['Campaign Details', 'Lead Selection', 'Account Selection', 'Review'];

function NewCampaign({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [campaignData, setCampaignData] = useState({
    name: '',
    platform: '',
    leads: null,
    account: null,
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#0D1425] rounded-lg w-full max-w-2xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold">New Campaign</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between mb-8">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index < steps.length - 1 ? 'flex-1' : ''
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      index < currentStep ? 'bg-blue-600' : 'bg-gray-800'
                    }`}
                  />
                )}
                <div
                  className={`absolute mt-10 text-sm ${
                    index <= currentStep ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            {currentStep === 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Campaign Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter campaign name"
                    value={campaignData.name}
                    onChange={(e) =>
                      setCampaignData({ ...campaignData, name: e.target.value })
                    }
                  />
                </div>
              </div>
            )}

            {/* Add other steps here */}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              className={`px-4 py-2 rounded-md ${
                currentStep === 0
                  ? 'bg-gray-800 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
              disabled={currentStep === 0}
            >
              Back
            </button>
            <button
              onClick={() =>
                currentStep === steps.length - 1
                  ? onClose()
                  : setCurrentStep(currentStep + 1)
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {currentStep === steps.length - 1 ? 'Create Campaign' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCampaign;