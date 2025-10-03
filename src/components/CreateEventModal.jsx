import { useState } from 'react';
import { X, Calendar, Clock, FileText, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { createEvent, updateEvent } from '../services/eventService';
import { showToast } from '../utils/toast';
import { getServerTimezoneDisplay } from '../utils/timezone';

export default function CreateEventModal({ isOpen, onClose, onEventCreated, editEvent = null }) {
  const { t } = useLanguage();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: editEvent?.name || '',
    date: editEvent?.date || '',
    startTime: editEvent?.startTime || '',
    endTime: editEvent?.endTime || '',
    description: editEvent?.description || ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('events.nameRequired');
    }

    if (!formData.date) {
      newErrors.date = t('events.dateRequired');
    }

    if (!formData.startTime) {
      newErrors.startTime = t('events.startTimeRequired');
    }

    if (!formData.endTime) {
      newErrors.endTime = t('events.endTimeRequired');
    }

    // Validate end time is after start time
    if (formData.startTime && formData.endTime && formData.startTime >= formData.endTime) {
      newErrors.endTime = t('events.endTimeAfterStart');
    }

    // Validate date is not in the past
    if (formData.date) {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = t('events.dateInFuture');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const pat = localStorage.getItem('tdc_system_pat');

      if (!pat) {
        showToast.error(t('auth.authRequired'));
        setLoading(false);
        return;
      }

      const eventData = {
        name: formData.name.trim(),
        date: formData.date,
        startTime: formData.startTime,
        endTime: formData.endTime,
        description: formData.description.trim(),
        createdBy: currentUser.username,
        createdByRole: currentUser.role
      };

      if (editEvent) {
        // Update existing event
        await updateEvent(editEvent.id, eventData, pat);
        showToast.success(t('events.eventUpdated'));
      } else {
        // Create new event
        await createEvent(eventData, pat);
        showToast.success(t('events.eventCreated'));
      }

      // Reset form and close
      setFormData({
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        description: ''
      });

      onEventCreated();
      onClose();
    } catch (error) {
      console.error('Error saving event:', error);
      showToast.error(editEvent ? t('events.updateFailed') : t('events.createFailed'));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        description: ''
      });
      setErrors({});
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-creed-base to-creed-dark p-6 border-b border-creed-lighter flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-creed-primary" />
            <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide">
              {editEvent ? t('events.editEvent') : t('events.createEvent')}
            </h2>
          </div>
          <button
            onClick={handleClose}
            disabled={loading}
            className="p-2 hover:bg-creed-lighter/20 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5 text-creed-text" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Timezone Notice */}
          <div className="flex items-center gap-2 px-4 py-3 bg-creed-accent/10 border border-creed-accent/30 rounded-lg">
            <Clock className="w-4 h-4 text-creed-accent flex-shrink-0" />
            <p className="text-sm text-creed-text font-body">
              {t('events.timesInServerTime')}: <strong className="text-creed-accent">{getServerTimezoneDisplay()}</strong>
            </p>
          </div>

          {/* Event Name */}
          <div>
            <label className="block text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
              {t('events.eventName')} <span className="text-creed-danger">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('events.eventNamePlaceholder')}
              className={`w-full px-4 py-3 bg-creed-base border rounded-lg
                       text-creed-text placeholder-creed-muted font-body
                       focus:outline-none focus:ring-2 focus:ring-creed-primary
                       ${errors.name ? 'border-creed-danger' : 'border-creed-lighter'}`}
              disabled={loading}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-creed-danger font-body">{errors.name}</p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
              {t('events.eventDate')} <span className="text-creed-danger">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-creed-base border rounded-lg
                       text-creed-text font-body
                       focus:outline-none focus:ring-2 focus:ring-creed-primary
                       ${errors.date ? 'border-creed-danger' : 'border-creed-lighter'}`}
              disabled={loading}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-creed-danger font-body">{errors.date}</p>
            )}
          </div>

          {/* Start Time & End Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
                {t('events.startTime')} <span className="text-creed-danger">*</span>
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-creed-base border rounded-lg
                         text-creed-text font-body
                         focus:outline-none focus:ring-2 focus:ring-creed-primary
                         ${errors.startTime ? 'border-creed-danger' : 'border-creed-lighter'}`}
                disabled={loading}
              />
              {errors.startTime && (
                <p className="mt-1 text-sm text-creed-danger font-body">{errors.startTime}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
                {t('events.endTime')} <span className="text-creed-danger">*</span>
              </label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-creed-base border rounded-lg
                         text-creed-text font-body
                         focus:outline-none focus:ring-2 focus:ring-creed-primary
                         ${errors.endTime ? 'border-creed-danger' : 'border-creed-lighter'}`}
                disabled={loading}
              />
              {errors.endTime && (
                <p className="mt-1 text-sm text-creed-danger font-body">{errors.endTime}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-2">
              {t('events.description')} <span className="text-creed-muted">({t('common.optional')})</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t('events.descriptionPlaceholder')}
              rows={4}
              className={`w-full px-4 py-3 bg-creed-base border border-creed-lighter rounded-lg
                       text-creed-text placeholder-creed-muted font-body
                       focus:outline-none focus:ring-2 focus:ring-creed-primary
                       resize-none`}
              disabled={loading}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3
                       bg-gradient-to-r from-creed-primary to-creed-secondary
                       text-white rounded-lg font-display font-bold uppercase tracking-wide
                       hover:shadow-glow-primary transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{editEvent ? t('common.saving') : t('common.creating')}</span>
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  <span>{editEvent ? t('common.save') : t('events.createEvent')}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="px-6 py-3 bg-creed-base border border-creed-lighter
                       text-creed-text rounded-lg font-display font-semibold uppercase tracking-wide
                       hover:border-creed-primary transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('common.cancel')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
