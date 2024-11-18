import React, { useState } from 'react';
import { Upload, FileSpreadsheet, Search, Plus, Filter } from 'lucide-react';

function Leads() {
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);

  const leadLists = [
    {
      id: '1',
      name: 'Tech Founders List',
      count: 2500,
      date: '2024-02-15',
      platform: 'linkedin',
    },
    {
      id: '2',
      name: 'Instagram Influencers',
      count: 1200,
      date: '2024-02-14',
      platform: 'instagram',
    },
    // Add more sample lead lists
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Leads</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md">
            <Filter size={20} />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
            <Plus size={20} />
            Import Leads
          </button>
        </div>
      </div>

      <div className="bg-[#0D1425] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    setSelectedLeads(e.target.checked ? leadLists.map((l) => l.id) : [])
                  }
                />
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">List Name</th>
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Platform</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Lead Count</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-400">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {leadLists.map((list) => (
              <tr key={list.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(list.id)}
                    onChange={(e) =>
                      setSelectedLeads(
                        e.target.checked
                          ? [...selectedLeads, list.id]
                          : selectedLeads.filter((id) => id !== list.id)
                      )
                    }
                  />
                </td>
                <td className="px-6 py-4">
                  <div className="font-medium">{list.name}</div>
                </td>
                <td className="px-6 py-4">{list.platform}</td>
                <td className="px-6 py-4 text-right">{list.count.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">
                  {new Date(list.date).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leads;