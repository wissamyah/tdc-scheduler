import { useState } from 'react';
import { User, Zap, Building2, ChevronDown, Calendar, Clock } from 'lucide-react';
import { DAYS_OF_WEEK, getDayDisplayName, getTimeSlotLabel } from '../utils/timeSlots';

export default function MemberCard({ member }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const hasAvailability = Object.values(member.availability || {}).some(
    slots => slots && slots.length > 0
  );

  return (
    <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical hover:shadow-glow-primary transition-all p-6">
      {/* Tactical corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-creed-accent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-creed-accent opacity-50"></div>

      {/* Member Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-creed-primary to-creed-secondary
                        flex items-center justify-center shadow-glow-primary">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide">
              {member.username}
            </h3>
            <p className="text-xs text-creed-muted font-body">
              {member.lastUpdated && `Updated: ${new Date(member.lastUpdated).toLocaleDateString()}`}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-creed-base border border-creed-lighter rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3 h-3 text-creed-primary" />
            <div className="text-xs text-creed-muted font-display uppercase tracking-wide">Car Power</div>
          </div>
          <div className="text-lg font-display font-bold text-creed-primary">{member.carPower}M</div>
        </div>
        <div className="bg-creed-base border border-creed-lighter rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-3 h-3 text-creed-accent" />
            <div className="text-xs text-creed-muted font-display uppercase tracking-wide">Tower</div>
          </div>
          <div className="text-lg font-display font-bold text-creed-accent">{member.towerLevel}</div>
        </div>
      </div>

      {/* Availability Toggle */}
      {hasAvailability && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-2.5
                     bg-creed-base border border-creed-lighter hover:border-creed-primary
                     rounded-lg transition-all group"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-creed-muted group-hover:text-creed-primary transition-colors" />
              <span className="font-display font-semibold text-creed-text uppercase tracking-wide text-sm">
                {isExpanded ? 'Hide' : 'Show'} Schedule
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-creed-muted group-hover:text-creed-primary transition-all ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Availability Details */}
          {isExpanded && (
            <div className="mt-4 space-y-3 bg-creed-base rounded-lg p-4 border border-creed-lighter">
              {DAYS_OF_WEEK.map(day => {
                const daySlots = member.availability[day] || [];
                if (daySlots.length === 0) return null;

                return (
                  <div key={day} className="border-l-2 border-creed-primary pl-3">
                    <h4 className="font-display font-bold text-creed-text uppercase tracking-wide text-sm mb-2">
                      {getDayDisplayName(day)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {daySlots.map(slot => (
                        <span
                          key={slot}
                          className="inline-flex items-center gap-1 px-2 py-1
                                   bg-creed-lighter border border-creed-primary/30
                                   text-creed-text text-xs font-display font-semibold
                                   rounded uppercase tracking-wide"
                        >
                          <Clock className="w-3 h-3 text-creed-primary" />
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
        <div className="text-center py-4 border border-creed-lighter rounded-lg bg-creed-base">
          <p className="text-creed-muted text-sm font-body">No availability data</p>
        </div>
      )}
    </div>
  );
}
