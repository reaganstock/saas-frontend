import React from 'react';

interface CampaignNameProps {
  value: string;
  onChange: (name: string) => void;
  onNext: () => void;
}

function CampaignName({ value, onChange, onNext }: CampaignNameProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Let's create a new campaign</h1>
      <p className="text-gray-400 mb-8">What would you like to name it?</p>
      
      <div className="mb-8">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter campaign name"
          className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          autoFocus
        />
      </div>

      <button
        onClick={onNext}
        disabled={!value.trim()}
        className={`px-6 py-2 rounded-md ${
          value.trim()
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-800 text-gray-400 cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  );
}

export default CampaignName;