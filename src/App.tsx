import React from 'react';
import { Settings, ChevronDown } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white">
      {/* Top Bar */}
      <div className="h-16 border-b border-gray-800 flex items-center justify-between px-6">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          UltraReach.ai
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 px-3 py-2 rounded-md">
            <span>My Organization</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Dashboard />
        </div>

        {/* Settings Menu (Bottom Left) */}
        <div className="fixed bottom-6 left-6 group">
          <div className="p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700">
            <Settings size={24} />
          </div>
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block">
            <div className="bg-gray-800 rounded-lg py-2 w-48">
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile Settings</div>
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Billing</div>
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Team Members</div>
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Integrations</div>
              <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Community & Training</div>
              <div className="border-t border-gray-700 mt-2 pt-2">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-red-400">Sign Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;