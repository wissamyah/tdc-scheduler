import { Calendar, Clock, User, Users, CheckCircle, HelpCircle, XCircle, Loader2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { getRoleDisplay, canCreateEvent } from '../utils/permissions';
import { submitRSVP, getRSVPSummary, isPastEvent, deleteEvent } from '../services/eventService';
import { showToast } from '../utils/toast';
import ConfirmModal from './ConfirmModal';
import { formatDate as formatDateUtil } from '../utils/dateFormat';

export default function EventCard({ event, onRSVPUpdate, onClick }) {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [rsvpLoading, setRsvpLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const rsvpSummary = getRSVPSummary(event);
  const userRSVP = event.rsvps?.[currentUser.username];
  const isPast = isPastEvent(event);
  const creatorRole = getRoleDisplay(event.createdByRole);
  const canDelete = canCreateEvent(currentUser);

  const handleRSVP = async (status) => {
    if (isPast || rsvpLoading) return;

    setRsvpLoading(true);

    try {
      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.error(t('auth.authRequired'));
        return;
      }

      await submitRSVP(event.id, currentUser.username, status, pat);
      showToast.success(t('events.rsvpUpdated'));
      onRSVPUpdate();
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      showToast.error(t('events.rsvpFailed'));
    } finally {
      setRsvpLoading(false);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    setDeleteLoading(true);

    try {
      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.error(t('auth.authRequired'));
        setShowDeleteModal(false);
        return;
      }

      await deleteEvent(event.id, pat);
      showToast.success(t('events.eventDeleted'));
      setShowDeleteModal(false);
      onRSVPUpdate(); // Refresh the events list
    } catch (error) {
      console.error('Error deleting event:', error);
      showToast.error(t('common.error'));
      setShowDeleteModal(false);
    } finally {
      setDeleteLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return formatDateUtil(dateString);
  };

  const formatTime = (time) => {
    return time; // Already in HH:MM format
  };

  return (
    <div
      className={`bg-creed-light border rounded-lg shadow-tactical overflow-hidden
                  transition-all hover:shadow-glow-primary cursor-pointer
                  ${isPast ? 'opacity-70' : ''}
                  ${userRSVP === 'going' ? 'border-creed-success ring-2 ring-creed-success/30' : ''}
                  ${userRSVP === 'maybe' ? 'border-creed-warning ring-2 ring-creed-warning/30' : ''}
                  ${!userRSVP ? 'border-creed-lighter' : ''}`}
    >
      {/* Header - Clickable area */}
      <div onClick={onClick} className="p-6 space-y-4">
        {/* Event Name */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide">
            {event.name}
          </h3>
          <div className="flex items-center gap-2">
            {isPast && (
              <span className="px-2 py-1 bg-creed-muted/20 border border-creed-muted rounded text-xs font-display font-semibold text-creed-muted uppercase tracking-wide">
                {t('events.past')}
              </span>
            )}
            {canDelete && (
              <button
                onClick={handleDeleteClick}
                disabled={deleteLoading}
                className="p-2 rounded-lg bg-creed-danger/10 border border-creed-danger text-creed-danger
                          hover:bg-creed-danger hover:text-white transition-all
                          disabled:opacity-50 disabled:cursor-not-allowed"
                title={t('events.deleteEvent')}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2 text-creed-muted">
          <Calendar className="w-4 h-4" />
          <span className="font-body text-sm">
            {formatDate(event.date)} • {formatTime(event.startTime)} - {formatTime(event.endTime)}
          </span>
        </div>

        {/* Created By */}
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-creed-muted" />
          <span className="font-body text-sm text-creed-muted">
            {t('events.createdBy')} {event.createdBy}
          </span>
          <span className={`px-2 py-0.5 rounded text-xs font-display font-semibold uppercase tracking-wide
                          bg-${creatorRole.bgColor} text-${creatorRole.color} border border-${creatorRole.borderColor}`}>
            {t(creatorRole.labelKey)}
          </span>
        </div>

        {/* Description */}
        {event.description && (
          <p className="text-sm font-body text-creed-muted line-clamp-2">
            "{event.description}"
          </p>
        )}

        {/* RSVP Summary */}
        <div className="flex items-center gap-4 pt-2 border-t border-creed-lighter">
          <Users className="w-4 h-4 text-creed-accent" />
          <div className="flex items-center gap-4 text-sm font-body">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-creed-success" />
              <span className="text-creed-text">{rsvpSummary.going}</span>
              <span className="text-creed-muted">{t('events.going')}</span>
            </div>
            <div className="flex items-center gap-1">
              <HelpCircle className="w-4 h-4 text-creed-warning" />
              <span className="text-creed-text">{rsvpSummary.maybe}</span>
              <span className="text-creed-muted">{t('events.maybe')}</span>
            </div>
            <div className="flex items-center gap-1">
              <XCircle className="w-4 h-4 text-creed-danger" />
              <span className="text-creed-text">{rsvpSummary.not_going}</span>
              <span className="text-creed-muted">{t('events.notGoing')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Buttons - Separate area, not clickable for modal */}
      {!isPast && (
        <div className="p-6 pt-0 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRSVP('going');
            }}
            disabled={rsvpLoading}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       font-display font-semibold uppercase tracking-wide text-sm
                       transition-all disabled:opacity-50 disabled:cursor-not-allowed
                       ${userRSVP === 'going'
                         ? 'bg-creed-success text-white shadow-glow-success'
                         : 'bg-creed-base border border-creed-success text-creed-success hover:bg-creed-success/20'}`}
          >
            {rsvpLoading && userRSVP === 'going' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CheckCircle className="w-4 h-4" />
            )}
            <span>{t('events.going')}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRSVP('maybe');
            }}
            disabled={rsvpLoading}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       font-display font-semibold uppercase tracking-wide text-sm
                       transition-all disabled:opacity-50 disabled:cursor-not-allowed
                       ${userRSVP === 'maybe'
                         ? 'bg-creed-warning text-white shadow-glow-warning'
                         : 'bg-creed-base border border-creed-warning text-creed-warning hover:bg-creed-warning/20'}`}
          >
            {rsvpLoading && userRSVP === 'maybe' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <HelpCircle className="w-4 h-4" />
            )}
            <span>{t('events.maybe')}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRSVP('not_going');
            }}
            disabled={rsvpLoading}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg
                       font-display font-semibold uppercase tracking-wide text-sm
                       transition-all disabled:opacity-50 disabled:cursor-not-allowed
                       ${userRSVP === 'not_going'
                         ? 'bg-creed-danger text-white shadow-glow-danger'
                         : 'bg-creed-base border border-creed-danger text-creed-danger hover:bg-creed-danger/20'}`}
          >
            {rsvpLoading && userRSVP === 'not_going' ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            <span>{t('events.notGoing')}</span>
          </button>
        </div>
      )}

      {/* Past Event - Show user's RSVP if they had one */}
      {isPast && userRSVP && (
        <div className="px-6 pb-6 pt-0">
          <div className={`px-4 py-2 rounded-lg text-center font-display font-semibold uppercase tracking-wide text-sm
                          ${userRSVP === 'going' ? 'bg-creed-success/20 text-creed-success border border-creed-success' : ''}
                          ${userRSVP === 'maybe' ? 'bg-creed-warning/20 text-creed-warning border border-creed-warning' : ''}
                          ${userRSVP === 'not_going' ? 'bg-creed-danger/20 text-creed-danger border border-creed-danger' : ''}`}>
            {t('events.yourResponse')}: {t(`events.${userRSVP === 'not_going' ? 'notGoing' : userRSVP}`)}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => !deleteLoading && setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        title={t('events.deleteEvent')}
        message={t('events.confirmDelete')}
        confirmText={t('common.delete')}
        cancelText={t('common.cancel')}
        type="danger"
        loading={deleteLoading}
      />
    </div>
  );
}
