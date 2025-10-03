import { useState, useEffect, useMemo } from 'react';
import { Calendar, Users, TrendingUp, Clock, Loader2, AlertCircle, Globe, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fetchDataFromAPI } from '../services/github';
import { DAYS_OF_WEEK, generateTimeSlots, getDayDisplayName } from '../utils/timeSlots';
import { showToast } from '../utils/toast';
import { getServerTimezoneDisplay } from '../utils/timezone';
import AvailableMembersModal from './AvailableMembersModal';
import { useAutoRefresh } from '../hooks/useAutoRefresh';

export default function OptimalScheduleCalendar() {
  const { t } = useLanguage();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ members: [], dayName: '', timeSlot: '' });

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const pat = localStorage.getItem('tdc_system_pat');
      const data = await fetchDataFromAPI(pat);
      setMembers(data.members || []);
    } catch (err) {
      console.error('Error loading members:', err);
      if (!silent) showToast.error(t('membersList.failedToLoad'));
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Auto-refresh setup - silent refresh every 60 seconds
  const { isRefreshing, lastRefreshTime, isEnabled, toggleAutoRefresh, manualRefresh } = useAutoRefresh(
    () => loadMembers(true), // Silent refresh (no loading spinner)
    60000, // 60 seconds
    true // Enabled by default
  );

  // Calculate optimal time slots
  const optimalSlots = useMemo(() => {
    if (members.length === 0) return {};

    const allSlots = generateTimeSlots();
    const results = {};

    DAYS_OF_WEEK.forEach(day => {
      const slotCounts = {};

      // Initialize counts for all slots
      allSlots.forEach(slot => {
        slotCounts[slot.value] = {
          count: 0,
          percentage: 0,
          members: []
        };
      });

      // Count members available for each slot
      members.forEach(member => {
        const availability = member.availability?.[day] || [];
        availability.forEach(slotValue => {
          if (slotCounts[slotValue]) {
            slotCounts[slotValue].count++;
            slotCounts[slotValue].members.push({
              username: member.username,
              carPower: member.carPower || 0
            });
          }
        });
      });

      // Calculate percentages
      Object.keys(slotCounts).forEach(slotValue => {
        slotCounts[slotValue].percentage = members.length > 0
          ? Math.round((slotCounts[slotValue].count / members.length) * 100)
          : 0;
      });

      results[day] = slotCounts;
    });

    return results;
  }, [members]);

  // Get best time slot for each day
  const bestSlotsByDay = useMemo(() => {
    const results = {};

    DAYS_OF_WEEK.forEach(day => {
      const slots = optimalSlots[day] || {};
      let bestSlot = null;
      let maxCount = 0;

      Object.entries(slots).forEach(([slotValue, data]) => {
        if (data.count > maxCount) {
          maxCount = data.count;
          bestSlot = { slotValue, ...data };
        }
      });

      results[day] = bestSlot;
    });

    return results;
  }, [optimalSlots]);

  // Get overall best time slot across all days
  const overallBestSlot = useMemo(() => {
    let best = null;
    let maxCount = 0;

    DAYS_OF_WEEK.forEach(day => {
      const dayBest = bestSlotsByDay[day];
      if (dayBest && dayBest.count > maxCount) {
        maxCount = dayBest.count;
        best = { day, ...dayBest };
      }
    });

    return best;
  }, [bestSlotsByDay]);

  const getSlotColor = (percentage) => {
    if (percentage >= 80) return 'bg-creed-success/20 border-creed-success text-creed-success';
    if (percentage >= 60) return 'bg-creed-accent/20 border-creed-accent text-creed-accent';
    if (percentage >= 40) return 'bg-creed-warning/20 border-creed-warning text-creed-warning';
    if (percentage >= 20) return 'bg-creed-secondary/20 border-creed-secondary text-creed-secondary';
    return 'bg-creed-lighter/20 border-creed-lighter text-creed-muted';
  };

  const getSlotLabel = (slotValue) => {
    const slots = generateTimeSlots();
    const slot = slots.find(s => s.value === slotValue);
    return slot ? slot.label : slotValue;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-creed-primary animate-spin mx-auto mb-4" />
          <p className="text-creed-text font-display font-semibold uppercase tracking-wide">
            {t('optimalSchedule.analyzingData')}
          </p>
        </div>
      </div>
    );
  }

  if (members.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8">
        <div className="container mx-auto px-4">
          <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-12 text-center">
            <AlertCircle className="mx-auto h-16 w-16 text-creed-muted mb-4" />
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
              {t('optimalSchedule.noMemberData')}
            </h3>
            <p className="text-creed-muted font-body">
              {t('optimalSchedule.submitSchedulesFirst')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8">
      {/* Available Members Modal */}
      <AvailableMembersModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        members={modalData.members}
        dayName={modalData.dayName}
        timeSlot={modalData.timeSlot}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-creed-primary" />
                <h1 className="text-4xl font-display font-bold text-creed-text uppercase tracking-wide">
                  {t('optimalSchedule.optimalEventSchedule')}
                </h1>
              </div>
              <div className="h-0.5 w-64 bg-gradient-to-r from-creed-primary to-transparent mb-2"></div>
              <p className="text-creed-muted font-body">
                {t('optimalSchedule.bestTimeSlotsBasedOn')}{' '}
                <span className="font-display font-bold text-creed-accent">{members.length}</span>{' '}
                {members.length !== 1 ? t('optimalSchedule.members') : t('optimalSchedule.member')} {t('optimalSchedule.availability')}
              </p>
            </div>
            {/* Subtle auto-refresh indicator */}
            {isRefreshing && (
              <div className="flex items-center gap-2 text-creed-muted">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span className="text-xs font-body">{t('autoRefresh.updating')}</span>
              </div>
            )}
          </div>
          <div className="mt-3 flex items-center gap-2 px-4 py-2 bg-creed-accent/10 border border-creed-accent/30 rounded-lg inline-block">
            <Globe className="w-4 h-4 text-creed-accent" />
            <p className="text-sm text-creed-text font-body">
              {t('optimalSchedule.allTimesShownIn')} <strong className="text-creed-accent">{getServerTimezoneDisplay()}</strong>
            </p>
          </div>
        </div>

        {/* Overall Best Slot */}
        {overallBestSlot && (
          <div className="mb-8 bg-gradient-to-br from-creed-primary/20 via-creed-secondary/10 to-creed-accent/10
                         border-2 border-creed-primary rounded-lg shadow-glow-primary p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-creed-primary/20 rounded-lg">
                <Calendar className="w-8 h-8 text-creed-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
                  {t('optimalSchedule.recommendedEventTime')}
                </h2>
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-creed-accent" />
                    <span className="text-xl font-display font-bold text-creed-accent">
                      {getDayDisplayName(overallBestSlot.day, t)}
                    </span>
                  </div>
                  <span className="text-creed-muted">•</span>
                  <span className="text-lg font-display font-semibold text-creed-text">
                    {getSlotLabel(overallBestSlot.slotValue)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-creed-success" />
                    <span className="text-lg font-display font-bold text-creed-success">
                      {overallBestSlot.count} / {members.length} {t('optimalSchedule.membersAvailable')}
                    </span>
                  </div>
                  <span className="px-3 py-1 bg-creed-success/20 border border-creed-success rounded-lg
                               text-creed-success font-display font-bold">
                    {overallBestSlot.percentage}% {t('optimalSchedule.availabilityPercentage')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mb-6 bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-4">
          <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-3">
            {t('optimalSchedule.availabilityLegend')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-creed-success/20 border border-creed-success flex-shrink-0"></div>
              <span className="text-xs font-body text-creed-muted">80%+ ({t('optimalSchedule.excellent')})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-creed-accent/20 border border-creed-accent flex-shrink-0"></div>
              <span className="text-xs font-body text-creed-muted">60-79% ({t('optimalSchedule.good')})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-creed-warning/20 border border-creed-warning flex-shrink-0"></div>
              <span className="text-xs font-body text-creed-muted">40-59% ({t('optimalSchedule.moderate')})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-creed-secondary/20 border border-creed-secondary flex-shrink-0"></div>
              <span className="text-xs font-body text-creed-muted">20-39% ({t('optimalSchedule.low')})</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-creed-lighter/20 border border-creed-lighter flex-shrink-0"></div>
              <span className="text-xs font-body text-creed-muted">&lt;20% ({t('optimalSchedule.veryLow')})</span>
            </div>
          </div>
        </div>

        {/* Weekly Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {DAYS_OF_WEEK.map(day => {
            const daySlots = optimalSlots[day] || {};
            const bestSlot = bestSlotsByDay[day];
            const allSlots = generateTimeSlots();

            return (
              <div
                key={day}
                className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical overflow-hidden
                         transition-all hover:border-creed-primary hover:shadow-glow-primary"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-creed-base to-creed-dark p-4 border-b border-creed-lighter">
                  <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide">
                    {getDayDisplayName(day, t)}
                  </h3>
                  {bestSlot && bestSlot.count > 0 && (
                    <div className="mt-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-creed-accent" />
                      <span className="text-sm font-body text-creed-muted">
                        {t('optimalSchedule.peak')} {getSlotLabel(bestSlot.slotValue)} ({bestSlot.percentage}%)
                      </span>
                    </div>
                  )}
                </div>

                {/* Time Slots */}
                <div className="p-4 space-y-2">
                  {allSlots.map(slot => {
                    const slotData = daySlots[slot.value] || { count: 0, percentage: 0, members: [] };
                    const colorClass = getSlotColor(slotData.percentage);
                    const isBest = bestSlot?.slotValue === slot.value && bestSlot.count > 0;

                    return (
                      <div
                        key={slot.value}
                        className={`p-3 rounded-lg border transition-all cursor-pointer
                                 hover:scale-[1.02] ${colorClass}
                                 ${isBest ? 'ring-2 ring-creed-accent shadow-glow-accent' : ''}`}
                        onClick={() => {
                          if (slotData.count > 0) {
                            setModalData({
                              members: slotData.members,
                              dayName: getDayDisplayName(day, t),
                              timeSlot: slot.label
                            });
                            setModalOpen(true);
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-display font-semibold">
                              {slot.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="text-sm font-display font-bold">
                              {slotData.count}
                            </span>
                          </div>
                        </div>
                        {slotData.count > 0 && (
                          <div className="mt-1">
                            <div className="w-full h-1.5 bg-creed-darker/30 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-current rounded-full transition-all"
                                style={{ width: `${slotData.percentage}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
