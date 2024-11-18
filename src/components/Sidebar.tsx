import React from 'react';
import { BarChart2, Users, Send, Inbox, FileSpreadsheet } from 'lucide-react';

const menuItems = [
  { icon: BarChart2, label: 'Analytics', active: false },
  { icon: Users, label: 'Accounts', active: false },
  { icon: Send, label: 'Campaigns', active: true },
  { icon: Inbox, label: 'Unibox', active: false },
  { icon: FileSpreadsheet, label: 'Leads', active: false },
];

function Sidebar() {
  return (
    <div className="w-64 bg-[#0D1425] border-r border-gray-800">
      <div className="py-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-6 py-3 cursor-pointer ${
              item.active
                ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-r-2 border-blue-500'
                : 'hover:bg-gray-800'
            }`}
          >
            <item.icon size={20} className={item.active ? 'text-blue-500' : 'text-gray-400'} />
            <span className={item.active ? 'text-white' : 'text-gray-400'}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;