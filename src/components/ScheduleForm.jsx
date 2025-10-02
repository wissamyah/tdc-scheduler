import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Zap, Building2, Send, Loader2, Calendar, Globe } from 'lucide-react';
import TimeSlotPicker from './TimeSlotPicker';
import { initializeAvailability } from '../utils/timeSlots';
import { saveMemberSchedule } from '../services/github';
import { fetchDataFromAPI } from '../services/github';
import { showToast } from '../utils/toast';
import {
  getUserTimezone,
  getCommonTimezones,
  getTimezoneDisplay,
  convertAvailabilityToServerTime
} from '../utils/timezone';

export default function ScheduleForm() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    username: '',
    carPower: '',
    towerLevel: ''
  });
  const [availability, setAvailability] = useState(initializeAvailability());
  const [timezone, setTimezone] = useState('');
  const [loading, setLoading] = useState(false);

  // Auto-detect user's timezone on mount
  useEffect(() => {
    const detectedTimezone = getUserTimezone();
    setTimezone(detectedTimezone);
    console.log('Detected user timezone:', detectedTimezone);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username.trim()) {
      showToast.error('In-game username is required');
      return;
    }

    const carPower = parseFloat(formData.carPower);
    if (isNaN(carPower) || carPower <= 0) {
      showToast.error('Valid car power is required (in millions)');
      return;
    }

    const towerLevel = parseInt(formData.towerLevel);
    if (isNaN(towerLevel) || towerLevel < 1 || towerLevel > 33) {
      showToast.error('Tower level must be between 1 and 33');
      return;
    }

    // Check if at least one time slot is selected
    const hasSlots = Object.values(availability).some(daySlots => daySlots.length > 0);
    if (!hasSlots) {
      showToast.error('Select at least one time slot');
      return;
    }

    setLoading(true);

    // Scroll to center of form after state update
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest'
        });
      }
    }, 100);
    const toastId = showToast.loading('Submitting schedule...');

    try {
      // Convert user's local availability to server time (UTC-2)
      const serverAvailability = convertAvailabilityToServerTime(availability, timezone);

      const memberData = {
        id: `member-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        username: formData.username.trim(),
        carPower: carPower,
        towerLevel: towerLevel,
        timezone: timezone, // Store user's timezone
        availability: serverAvailability // Store in server time
      };

      // Get PAT from localStorage
      let pat = localStorage.getItem('tdc_pat');

      if (!pat) {
        throw new Error('Authentication required. Please refresh the page.');
      }

      await saveMemberSchedule(memberData, pat);

      // Update single toast message
      showToast.loading('Verifying data is saved...', { id: toastId });

      // Poll until the member appears in the data (GitHub API is much faster now)
      const maxAttempts = 20; // 20 attempts = up to 40 seconds
      let attempts = 0;
      let memberFound = false;

      while (attempts < maxAttempts && !memberFound) {
        attempts++;

        // Wait before first check to give GitHub time to propagate
        await new Promise(resolve => setTimeout(resolve, attempts === 1 ? 3000 : 2000));

        try {
          // Use API fetch to bypass CDN cache
          const data = await fetchDataFromAPI(pat);
          memberFound = data.members.some(m => m.username === memberData.username);

          if (memberFound) {
            break;
          }
        } catch (error) {
          console.error('Error verifying submission:', error);
        }
      }

      if (!memberFound) {
        showToast.dismiss(toastId);
        showToast.error('Could not verify data was saved. Please check the members list manually.');
        setLoading(false);
        return;
      }

      showToast.success('Schedule submitted and verified successfully!', { id: toastId });

      // Navigate to members page
      setTimeout(() => {
        navigate('/members', { state: { refresh: Date.now() } });
      }, 1500);
    } catch (err) {
      console.error('Submit error:', err);
      showToast.dismiss(toastId);
      showToast.error('Submission failed - Try again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-creed-darker via-creed-dark to-creed-base py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div ref={formRef} className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-6 md:p-8 relative">
          {/* Loading Overlay - Prevents all interaction during submission */}
          {loading && (
            <div className="absolute inset-0 bg-creed-darker/95 backdrop-blur-md z-50 rounded-lg flex items-center justify-center pointer-events-auto">
              <div className="text-center">
                <Loader2 className="w-16 h-16 text-creed-primary animate-spin mx-auto mb-4" />
                <p className="text-creed-text font-display font-semibold uppercase tracking-wide text-xl">
                  Processing Submission...
                </p>
                <p className="text-creed-muted font-body mt-2">
                  Please do not close this window
                </p>
                <div className="mt-4 px-4 py-2 bg-creed-base/50 rounded-lg border border-creed-lighter/30">
                  <p className="text-xs text-creed-muted font-body">
                    Saving data and verifying...
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-creed-primary" />
            <h2 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
              Submit Schedule
            </h2>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-primary via-creed-accent to-transparent mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Timezone Selection */}
            <div>
              <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-4">
                Timezone Configuration
              </h3>
              <div className="bg-creed-base border-l-4 border-creed-accent rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-creed-text font-body mb-2">
                      <strong className="text-creed-accent font-display uppercase tracking-wide">Important:</strong>{' '}
                      Select your local timezone. Times will be shown in your timezone, then converted to game server time (UTC-2) automatically.
                    </p>
                    <div className="mt-3">
                      <label htmlFor="timezone" className="block text-xs font-display font-semibold text-creed-text mb-2 uppercase tracking-wide">
                        Your Timezone
                      </label>
                      <select
                        id="timezone"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full px-4 py-2.5 bg-creed-light border border-creed-lighter rounded-lg
                                 focus:ring-2 focus:ring-creed-accent focus:border-creed-accent
                                 text-creed-text font-body transition-all duration-200"
                        disabled={loading}
                      >
                        <option value="">Detecting timezone...</option>
                        {getCommonTimezones().map(tz => (
                          <option key={tz.value} value={tz.value}>
                            {tz.label} - {getTimezoneDisplay(tz.value)}
                          </option>
                        ))}
                      </select>
                    </div>
                    {timezone && (
                      <div className="mt-3 px-3 py-2 bg-creed-lighter/30 rounded border border-creed-accent/30">
                        <p className="text-xs text-creed-muted font-body">
                          <span className="text-creed-accent font-semibold">Selected:</span> {getTimezoneDisplay(timezone)}
                        </p>
                        <p className="text-xs text-creed-muted font-body mt-1">
                          <span className="text-creed-accent font-semibold">Server Time:</span> UTC-2 (Game Server)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Info Section */}
            <div>
              <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-4">
                Operator Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="username" className="block text-xs font-display font-semibold text-creed-text mb-2 uppercase tracking-wide">
                    In-Game Username *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-creed-muted" />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-creed-base border border-creed-lighter rounded-lg
                               focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                               text-creed-text placeholder-creed-muted font-body
                               transition-all duration-200"
                      placeholder="Your callsign"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="carPower" className="block text-xs font-display font-semibold text-creed-text mb-2 uppercase tracking-wide">
                    Car Power (M) *
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-creed-muted" />
                    <input
                      type="number"
                      id="carPower"
                      name="carPower"
                      value={formData.carPower}
                      onChange={handleInputChange}
                      step="0.1"
                      min="0"
                      className="w-full pl-10 pr-4 py-2.5 bg-creed-base border border-creed-lighter rounded-lg
                               focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                               text-creed-text placeholder-creed-muted font-body
                               transition-all duration-200"
                      placeholder="e.g., 2.5"
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="towerLevel" className="block text-xs font-display font-semibold text-creed-text mb-2 uppercase tracking-wide">
                    Tower Level (1-33) *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-creed-muted" />
                    <input
                      type="number"
                      id="towerLevel"
                      name="towerLevel"
                      value={formData.towerLevel}
                      onChange={handleInputChange}
                      min="1"
                      max="33"
                      className="w-full pl-10 pr-4 py-2.5 bg-creed-base border border-creed-lighter rounded-lg
                               focus:ring-2 focus:ring-creed-primary focus:border-creed-primary
                               text-creed-text placeholder-creed-muted font-body
                               transition-all duration-200"
                      placeholder="e.g., 25"
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots Section */}
            <div>
              <h3 className="text-sm font-display font-semibold text-creed-text uppercase tracking-wide mb-4">
                Availability Schedule
              </h3>
              <div className="mb-4 px-4 py-3 bg-creed-accent/10 border border-creed-accent/30 rounded-lg">
                <p className="text-sm text-creed-text font-body">
                  <Globe className="w-4 h-4 text-creed-accent inline mr-2" />
                  Times shown below are in <strong className="text-creed-accent">your local timezone</strong>.
                  They will be automatically converted to server time (UTC-2) when saved.
                </p>
              </div>
              <TimeSlotPicker availability={availability} onChange={setAvailability} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-creed-primary to-creed-secondary
                         text-white rounded-lg font-display font-bold uppercase tracking-wider
                         hover:shadow-glow-primary disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200 flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Schedule</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
