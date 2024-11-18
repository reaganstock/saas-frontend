import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MessageCircle,
  Send as TelegramIcon,
  Video,
  Hash,
  MessageSquare,
  Slack,
  Image,
  Home,
  Globe,
} from 'lucide-react';

const platforms = [
  { id: 'all', name: 'All Platforms', icon: Globe },
  { id: 'instagram', name: 'Instagram', icon: Instagram },
  { id: 'facebook', name: 'Facebook', icon: Facebook },
  { id: 'twitter', name: 'X', icon: Twitter },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin },
  { id: 'reddit', name: 'Reddit', icon: MessageCircle },
  { id: 'discord', name: 'Discord', icon: Hash },
  { id: 'whatsapp', name: 'WhatsApp', icon: MessageSquare },
  { id: 'telegram', name: 'Telegram', icon: TelegramIcon },
  { id: 'tiktok', name: 'TikTok', icon: Video },
  { id: 'slack', name: 'Slack', icon: Slack },
  { id: 'pinterest', name: 'Pinterest', icon: Image },
  { id: 'skool', name: 'Skool.com', icon: MessageCircle },
  { id: 'nextdoor', name: 'Nextdoor', icon: Home },
];

function PlatformSelector({ selectedPlatforms, onPlatformChange }) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-[#0D1425] rounded-lg">
      {platforms.map((platform) => (
        <div
          key={platform.id}
          onClick={() => {
            if (platform.id === 'all') {
              onPlatformChange(['all']);
            } else {
              const newSelected = selectedPlatforms.includes('all')
                ? [platform.id]
                : selectedPlatforms.includes(platform.id)
                ? selectedPlatforms.filter((p) => p !== platform.id)
                : [...selectedPlatforms, platform.id];
              onPlatformChange(newSelected.length ? newSelected : ['all']);
            }
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
            selectedPlatforms.includes(platform.id)
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <platform.icon size={18} />
          <span className="text-sm font-medium">{platform.name}</span>
        </div>
      ))}
    </div>
  );
}

export default PlatformSelector;