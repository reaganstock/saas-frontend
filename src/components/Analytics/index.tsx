import React from 'react';
import PlatformSelector from '../PlatformSelector';
import { BarChart2, TrendingUp, MessageCircle } from 'lucide-react';

function Analytics() {
  const [selectedPlatforms, setSelectedPlatforms] = React.useState(['all']);

  const metrics = [
    {
      label: 'Total Messages Sent',
      value: '12,458',
      change: '+12.5%',
      icon: MessageCircle,
    },
    {
      label: 'Total Responses',
      value: '2,845',
      change: '+8.2%',
      icon: BarChart2,
    },
    {
      label: 'Reply Rate',
      value: '22.8%',
      change: '+1.2%',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <PlatformSelector
          selectedPlatforms={selectedPlatforms}
          onPlatformChange={setSelectedPlatforms}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <metric.icon size={24} className="text-blue-500" />
              <span className={`text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change}
              </span>
            </div>
            <div className="text-2xl font-bold mb-1">{metric.value}</div>
            <div className="text-gray-400 text-sm">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Add charts and detailed analytics here */}
    </div>
  );
}

export default Analytics;