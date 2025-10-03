import { useState } from 'react';
import { X, Calendar, Clock, User, Edit, Trash2, TrendingUp, Users as UsersIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { canCreateEvent } from '../utils/permissions';
import { getRoleDisplay } from '../utils/permissions';
import { getMembersByRSVP, isPastEvent } from '../services/eventService';
import { getServerTimezoneDisplay } from '../utils/timezone';
import ConfirmModal from './ConfirmModal';
import { formatDate as formatDateUtil } from '../utils/dateFormat';

export default function EventDetailsModal({ isOpen, onClose, event, allMembers, onEdit, onDelete }) {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('going');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  if (!isOpen || !event) return null;

  const rsvpGroups = getMembersByRSVP(event, allMembers);
  const isPast = isPastEvent(event);
  const canEdit = canCreateEvent(currentUser);
  const creatorRole = getRoleDisplay(event.createdByRole);

  const formatDate = (dateString) => {
    return formatDateUtil(dateString);
  };

  const tabs = [
    { key: 'going', label: t('events.going'), count: rsvpGroups.going.length, color: 'creed-success' },
    { key: 'maybe', label: t('events.maybe'), count: rsvpGroups.maybe.length, color: 'creed-warning' },
    { key: 'not_going', label: t('events.notGoing'), count: rsvpGroups.not_going.length, color: 'creed-danger' },
    { key: 'no_response', label: t('events.noResponse'), count: rsvpGroups.no_response.length, color: 'creed-muted' }
  ];

  const activeMembersList = rsvpGroups[activeTab] || [];

  return (
    <>
      <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-creed-base to-creed-dark p-6 border-b border-creed-lighter flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-creed-primary" />
              <div>
                <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide">
                  {event.name}
                </h2>
                {isPast && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-creed-muted/20 border border-creed-muted rounded text-xs font-display font-semibold text-creed-muted uppercase tracking-wide">
                    {t('events.past')}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {!isPast && canEdit && (
                <>
                  <button
                    onClick={() => {
                      onEdit(event);
                      onClose();
                    }}
                    className="p-2 hover:bg-creed-primary/20 rounded-lg transition-colors"
                    title={t('events.editEvent')}
                  >
                    <Edit className="w-5 h-5 text-creed-primary" />
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="p-2 hover:bg-creed-danger/20 rounded-lg transition-colors"
                    title={t('events.deleteEvent')}
                  >
                    <Trash2 className="w-5 h-5 text-creed-danger" />
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-creed-lighter/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-creed-text" />
              </button>
            </div>
          </div>

          {/* Event Info */}
          <div className="p-6 border-b border-creed-lighter space-y-4">
            {/* Date & Time */}
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-creed-accent" />
              <div>
                <p className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide">
                  {formatDate(event.date)}
                </p>
                <p className="text-sm font-body text-creed-muted">
                  {event.startTime} - {event.endTime} ({getServerTimezoneDisplay()})
                </p>
              </div>
            </div>

            {/* Created By */}
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-creed-accent" />
              <div className="flex items-center gap-2">
                <span className="text-sm font-body text-creed-muted">
                  {t('events.createdBy')} {event.createdBy}
                </span>
                <span className={`px-2 py-0.5 rounded text-xs font-display font-semibold uppercase tracking-wide
                                bg-${creatorRole.bgColor} text-${creatorRole.color} border border-${creatorRole.borderColor}`}>
                  {t(creatorRole.labelKey)}
                </span>
              </div>
            </div>

            {/* Description */}
            {event.description && (
              <div className="pt-2">
                <p className="text-sm font-body text-creed-text">
                  "{event.description}"
                </p>
              </div>
            )}

            {/* RSVP Summary */}
            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {tabs.map(tab => (
                <div key={tab.key} className={`px-4 py-3 bg-creed-base border border-${tab.color}/30 rounded-lg text-center`}>
                  <div className={`text-2xl font-display font-bold text-${tab.color}`}>
                    {tab.count}
                  </div>
                  <div className="text-xs font-display font-semibold text-creed-muted uppercase tracking-wide mt-1">
                    {tab.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-creed-lighter bg-creed-base">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-4 py-3 font-display font-semibold uppercase tracking-wide text-sm
                           transition-all border-b-2
                           ${activeTab === tab.key
                             ? `border-${tab.color} text-${tab.color}`
                             : 'border-transparent text-creed-muted hover:text-creed-text'}`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Members List */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeMembersList.length === 0 ? (
              <div className="text-center py-12">
                <UsersIcon className="w-12 h-12 text-creed-muted mx-auto mb-3" />
                <p className="text-creed-muted font-body">
                  {t('events.noMembersInCategory')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeMembersList.map(member => (
                  <div
                    key={member.username}
                    className="bg-creed-base border border-creed-lighter rounded-lg p-4
                             hover:border-creed-primary transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-creed-text uppercase tracking-wide truncate">
                          {member.username}
                        </h4>
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center gap-2 text-sm font-body text-creed-muted">
                            <TrendingUp className="w-4 h-4 flex-shrink-0" />
                            <span>{member.carPower || 0}M {t('membersList.carPower')}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-body text-creed-muted">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{t('membersList.towerLevel')}: {member.towerLevel || 0}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={() => {
          setShowDeleteConfirm(false);
          onDelete(event.id);
          onClose();
        }}
        title={t('events.deleteEvent')}
        message={`${t('events.deleteConfirm')} "${event.name}"?`}
        confirmText={t('common.delete')}
        type="danger"
      />
    </>
  );
}
