import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import CampaignName from './CampaignName';
import LeadSelection from './LeadSelection';
import AccountSelection from './AccountSelection';
import SequenceBuilder from './SequenceBuilder';
import ScheduleSettings from './ScheduleSettings';
import ReviewLaunch from './ReviewLaunch';

interface NewCampaignProps {
  onClose: () => void;
}

const steps = [
  { id: 'name', label: 'Campaign Name' },
  { id: 'leads', label: 'List of leads' },
  { id: 'accounts', label: 'Platform Accounts' },
  { id: 'sequence', label: 'Sequence' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'review', label: 'Review & Launch' }
];

function NewCampaign({ onClose }: NewCampaignProps) {
  const [currentStep, setCurrentStep] = useState('name');
  const [campaignData, setCampaignData] = useState({
    name: '',
    platform: '',
    leads: [],
    accounts: [],
    messages: [],
    schedule: {
      timezone: 'UTC',
      messagesPerDay: 0,
      startDate: null,
      workingHours: { start: '9:00', end: '17:00' }
    }
  });

  const renderStep = () => {
    switch(currentStep) {
      case 'name':
        return (
          <div className="max-w-xl mx-auto">
            <CampaignName
              value={campaignData.name}
              onChange={(name) => setCampaignData({ ...campaignData, name })}
              onNext={() => setCurrentStep('leads')}
            />
          </div>
        );
      case 'leads':
        return (
          <LeadSelection
            leads={campaignData.leads}
            onLeadsUpdate={(leads) => setCampaignData({ ...campaignData, leads })}
            onNext={() => setCurrentStep('accounts')}
            onBack={() => setCurrentStep('name')}
          />
        );
      case 'accounts':
        return (
          <AccountSelection
            selectedAccounts={campaignData.accounts}
            onAccountsUpdate={(accounts) => setCampaignData({ ...campaignData, accounts })}
            onNext={() => setCurrentStep('sequence')}
            onBack={() => setCurrentStep('leads')}
          />
        );
      case 'sequence':
        return (
          <SequenceBuilder
            messages={campaignData.messages}
            onMessagesUpdate={(messages) => setCampaignData({ ...campaignData, messages })}
            onNext={() => setCurrentStep('schedule')}
            onBack={() => setCurrentStep('accounts')}
            platform={campaignData.platform}
          />
        );
      case 'schedule':
        return (
          <ScheduleSettings
            schedule={campaignData.schedule}
            onScheduleUpdate={(schedule) => setCampaignData({ ...campaignData, schedule })}
            onNext={() => setCurrentStep('review')}
            onBack={() => setCurrentStep('sequence')}
          />
        );
      case 'review':
        return (
          <ReviewLaunch
            campaign={campaignData}
            onBack={() => setCurrentStep('schedule')}
            onLaunch={() => {
              // Handle campaign launch
              onClose();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0A0F1F] overflow-auto">
      {/* Header */}
      <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
        <button
          onClick={() => {
            const currentIndex = steps.findIndex(s => s.id === currentStep);
            if (currentIndex > 0) {
              setCurrentStep(steps[currentIndex - 1].id);
            } else {
              onClose();
            }
          }}
          className="flex items-center gap-2 text-gray-400 hover:text-white"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white p-2"
        >
          <X size={20} />
        </button>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <div className="flex justify-between mb-12">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index < steps.length - 1 ? 'flex-1' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  steps.findIndex(s => s.id === currentStep) >= index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    steps.findIndex(s => s.id === currentStep) > index
                      ? 'bg-blue-600'
                      : 'bg-gray-800'
                  }`}
                />
              )}
              <div
                className={`absolute mt-10 text-sm ${
                  steps.findIndex(s => s.id === currentStep) >= index
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="pb-12">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default NewCampaign;