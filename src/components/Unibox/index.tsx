import React from 'react';
import { Search, Filter } from 'lucide-react';

function Unibox() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-800 p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-md"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-md">
            <Filter size={18} />
          </button>
        </div>

        <div className="space-y-2">
          {/* Conversation list */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="p-3 hover:bg-gray-800 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full" />
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-gray-400">Latest message preview...</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6">
          {/* Messages will go here */}
        </div>

        {/* Message input */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-gray-800 rounded-md"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unibox;