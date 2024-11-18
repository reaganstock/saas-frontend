import React from 'react';
import TimezoneSelect from 'react-timezone-select';

interface ScheduleSettingsProps {
  schedule: any;
  onScheduleUpdate: (schedule: any) => void;
  onNext: () => void;
  onBack: () => void;
}

function ScheduleSettings({ schedule, onScheduleUpdate, onNext, onBack }: ScheduleSettingsProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Schedule Settings</h2>
        <p className="text-gray-400">Configure when your messages will be sent</p>
      </div>

      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2">Timezone</label>
          <div className="w-full">
            <TimezoneSelect
              value={schedule.timezone}
              onChange={(tz) => onScheduleUpdate({ ...schedule, timezone: tz })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Working Hours</label>
          <div className="flex gap-4">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Start Time</label>
              <input
                type="time"
                value={schedule.workingHours.start}
                onChange={(e) =>
                  onScheduleUpdate({
                    ...schedule,
                    workingHours: { ...schedule.workingHours, start: e.target.value },
                  })
                }
                className="px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">End Time</label>
              <input
                type="time"
                value={schedule.workingHours.end}
                onChange={(e) =>
                  onScheduleUpdate({
                    ...schedule,
                    workingHours: { ...schedule.workingHours, end: e.target.value },
                  })
                }
                className="px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Messages per Day</label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              max="100"
              value={schedule.messagesPerDay}
              onChange={(e) =>
                onScheduleUpdate({ ...schedule, messagesPerDay: parseInt(e.target.value) })
              }
              className="w-24 px-3 py-2 bg-gray-800 rounded-md border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-400">messages per account</span>
          </div>
          <p className="mt-2 text-sm text-yellow-500">
            Note: Message limits vary by platform. Ensure you stay within platform limits.
          </p>
        </div>
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
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Review Campaign
        </button>
      </div>
    </div>
  );
}

export default ScheduleSettings;