import { useState, useEffect } from 'react';
import { Calendar, Plus, Loader2, AlertCircle, Filter, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { canCreateEvent } from '../utils/permissions';
import { getEvents, deleteEvent } from '../services/eventService';
import { fetchDataFromAPI } from '../services/github';
import { showToast } from '../utils/toast';
import { useAutoRefresh } from '../hooks/useAutoRefresh';
import EventCard from './EventCard';
import CreateEventModal from './CreateEventModal';
import EventDetailsModal from './EventDetailsModal';

export default function EventsPage() {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [events, setEvents] = useState([]);
  const [allMembers, setAllMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('upcoming'); // all, upcoming, past
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    loadEventsAndMembers();
  }, []);

  const loadEventsAndMembers = async (silent = false) => {
    try {
      if (!silent) setLoading(true);

      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.error(t('auth.authRequired'));
        return;
      }

      // Fetch data
      const data = await fetchDataFromAPI(pat);

      setAllMembers(data.members || []);
      setEvents(data.events || []);
    } catch (error) {
      console.error('Error loading events:', error);
      if (!silent) showToast.error(t('events.loadFailed'));
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Auto-refresh
  const { isRefreshing } = useAutoRefresh(
    () => loadEventsAndMembers(true),
    60000,
    true
  );

  const handleEventCreated = () => {
    loadEventsAndMembers();
  };

  const handleEventUpdated = () => {
    loadEventsAndMembers();
    setEditEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowDetailsModal(true);
  };

  const handleEdit = (event) => {
    setEditEvent(event);
    setShowCreateModal(true);
  };

  const handleDelete = async (eventId) => {
    try {
      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.error(t('auth.authRequired'));
        return;
      }

      await deleteEvent(eventId, pat);
      showToast.success(t('events.eventDeleted'));
      loadEventsAndMembers();
    } catch (error) {
      console.error('Error deleting event:', error);
      showToast.error(t('events.deleteFailed'));
    }
  };

  // Filter events
  const filteredEvents = events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.endTime}`);
    const now = new Date();

    if (filter === 'upcoming') {
      return eventDateTime > now;
    } else if (filter === 'past') {
      return eventDateTime <= now;
    }

    return true; // all
  }).sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.startTime}`);
    const dateB = new Date(`${b.date}T${b.startTime}`);

    if (filter === 'past') {
      return dateB - dateA; // Most recent first for past events
    }
    return dateA - dateB; // Soonest first for upcoming
  });

  const upcomingCount = events.filter(e => {
    const eventDateTime = new Date(`${e.date}T${e.endTime}`);
    return eventDateTime > new Date();
  }).length;

  const pastCount = events.filter(e => {
    const eventDateTime = new Date(`${e.date}T${e.endTime}`);
    return eventDateTime <= new Date();
  }).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 text-creed-primary animate-spin mx-auto mb-4" />
          <p className="text-creed-text font-display font-semibold uppercase tracking-wide">
            {t('events.loadingEvents')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-8 h-8 text-creed-primary" />
                <h1 className="text-4xl font-display font-bold text-creed-text uppercase tracking-wide">
                  {t('events.events')}
                </h1>
              </div>
              <div className="h-0.5 w-48 bg-gradient-to-r from-creed-primary to-transparent mb-2"></div>
              <p className="text-creed-muted font-body">
                {t('events.manageEventsAndRSVPs')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* Auto-refresh indicator */}
              {isRefreshing && (
                <div className="flex items-center gap-2 text-creed-muted">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-body">{t('autoRefresh.updating')}</span>
                </div>
              )}

              {/* Create Event Button */}
              {canCreateEvent(currentUser) && (
                <button
                  onClick={() => {
                    setEditEvent(null);
                    setShowCreateModal(true);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5
                           bg-gradient-to-r from-creed-primary to-creed-secondary
                           text-white rounded-lg
                           hover:shadow-glow-primary
                           transition-all font-display font-semibold uppercase tracking-wide"
                >
                  <Plus className="w-5 h-5" />
                  <span>{t('events.createEvent')}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex items-center flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-creed-text" />
            <span className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide">
              {t('events.filter')}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                       transition-all ${
                         filter === 'upcoming'
                           ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                           : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                       }`}
            >
              {t('events.upcoming')} ({upcomingCount})
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                       transition-all ${
                         filter === 'past'
                           ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                           : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                       }`}
            >
              {t('events.past')} ({pastCount})
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-sm font-display font-semibold uppercase tracking-wide
                       transition-all ${
                         filter === 'all'
                           ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                           : 'bg-creed-base border border-creed-lighter text-creed-text hover:border-creed-primary'
                       }`}
            >
              {t('events.all')} ({events.length})
            </button>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-12 text-center">
            <Calendar className="mx-auto h-16 w-16 text-creed-muted mb-4" />
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide mb-2">
              {t('events.noEvents')}
            </h3>
            <p className="text-creed-muted font-body mb-4">
              {filter === 'upcoming' ? t('events.noUpcomingEvents') :
               filter === 'past' ? t('events.noPastEvents') :
               t('events.noEventsYet')}
            </p>
            {canCreateEvent(currentUser) && filter !== 'past' && (
              <button
                onClick={() => {
                  setEditEvent(null);
                  setShowCreateModal(true);
                }}
                className="inline-flex items-center gap-2 px-6 py-3
                         bg-gradient-to-r from-creed-primary to-creed-secondary
                         text-white rounded-lg
                         hover:shadow-glow-primary
                         transition-all font-display font-semibold uppercase tracking-wide"
              >
                <Plus className="w-5 h-5" />
                <span>{t('events.createFirstEvent')}</span>
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onRSVPUpdate={handleEventCreated}
                onClick={() => handleEventClick(event)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create/Edit Event Modal */}
      <CreateEventModal
        isOpen={showCreateModal}
        onClose={() => {
          setShowCreateModal(false);
          setEditEvent(null);
        }}
        onEventCreated={editEvent ? handleEventUpdated : handleEventCreated}
        editEvent={editEvent}
      />

      {/* Event Details Modal */}
      <EventDetailsModal
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
        allMembers={allMembers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
