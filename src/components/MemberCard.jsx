import { useState } from 'react';
import { DAYS_OF_WEEK, getDayDisplayName, getTimeSlotLabel } from '../utils/timeSlots';

export default function MemberCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAvailability = Object.values(member.availability || {}).some(
    slots => slots && slots.length > 0
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      {/* Member Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{member.username}</h3>
          <p className="text-sm text-gray-500">
            {member.lastUpdated && `Updated: ${new Date(member.lastUpdated).toLocaleDateString()}`}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-purple-50 rounded-lg p-3">
          <div className="text-xs text-purple-600 font-medium mb-1">Car Power</div>
          <div className="text-lg font-bold text-purple-900">{member.carPower}M</div>
        </div>
        <div className="bg-indigo-50 rounded-lg p-3">
          <div className="text-xs text-indigo-600 font-medium mb-1">Tower Level</div>
          <div className="text-lg font-bold text-indigo-900">{member.towerLevel}</div>
        </div>
      </div>

      {/* Availability Toggle */}
      {hasAvailability && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <span className="font-medium text-gray-700">
              {isExpanded ? 'Hide' : 'Show'} Availability
            </span>
            <svg
              className={`w-5 h-5 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Availability Details */}
          {isExpanded && (
            <div className="mt-4 space-y-3">
              {DAYS_OF_WEEK.map(day => {
                const daySlots = member.availability[day] || [];
                if (daySlots.length === 0) return null;

                return (
                  <div key={day} className="border-l-4 border-purple-500 pl-3">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {getDayDisplayName(day)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {daySlots.map(slot => (
                        <span
                          key={slot}
                          className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                        >
                          {getTimeSlotLabel(slot)}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {!hasAvailability && (
        <div className="text-center py-4 text-gray-500 text-sm">
          No availability set
        </div>
      )}
    </div>
  );
}
