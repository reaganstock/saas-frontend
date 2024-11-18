import React from 'react';
import PlatformSelector from '../PlatformSelector';

interface AccountSelectionProps {
  selectedAccounts: any[];
  onAccountsUpdate: (accounts: any[]) => void;
  onNext: () => void;
  onBack: () => void;
}

function AccountSelection({ selectedAccounts, onAccountsUpdate, onNext, onBack }: AccountSelectionProps) {
  const [selectedPlatform, setSelectedPlatform] = React.useState('all');

  const accounts = [
    {
      id: 1,
      platform: 'instagram',
      name: 'John Doe',
      type: 'Business',
      limit: '50 messages/day',
      status: 'Active',
    },
    // Add more sample accounts
  ];

  return (
    <div>
      <PlatformSelector
        selectedPlatforms={[selectedPlatform]}
        onPlatformChange={(platforms) => setSelectedPlatform(platforms[0])}
      />

      <div className="mt-8 bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Account
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Limit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className="border-b border-gray-700 hover:bg-gray-700/50 cursor-pointer"
                onClick={() => {
                  const isSelected = selectedAccounts.includes(account.id);
                  onAccountsUpdate(
                    isSelected
                      ? selectedAccounts.filter((id) => id !== account.id)
                      : [...selectedAccounts, account.id]
                  );
                }}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedAccounts.includes(account.id)}
                      onChange={() => {}}
                      className="mr-3"
                    />
                    <span>{account.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{account.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{account.limit}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                    {account.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedAccounts.length}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-400"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default AccountSelection;