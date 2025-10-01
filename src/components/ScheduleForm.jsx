import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Zap, Building2, Send, Loader2, Calendar } from 'lucide-react';
import TimeSlotPicker from './TimeSlotPicker';
import { initializeAvailability } from '../utils/timeSlots';
import { saveMemberSchedule } from '../services/github';
import { showToast } from '../utils/toast';

export default function ScheduleForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    carPower: '',
    towerLevel: ''
  });
  const [availability, setAvailability] = useState(initializeAvailability());
  const [loading, setLoading] = useState(false);

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
    const toastId = showToast.loading('Preparing schedule data...');

    try {
      const memberData = {
        id: `member-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        username: formData.username.trim(),
        carPower: carPower,
        towerLevel: towerLevel,
        availability: availability
      };

      // Get PAT from sessionStorage (stored during setup)
      let pat = sessionStorage.getItem('tdc_temp_pat');

      // If no PAT, prompt user for it
      if (!pat) {
        showToast.dismiss(toastId);
        pat = prompt('Enter Personal Access Token (needed for first submission this session):');
        if (!pat) {
          throw new Error('PAT is required to submit schedules');
        }
        // Store for this session
        sessionStorage.setItem('tdc_temp_pat', pat);
        showToast.loading('Submitting schedule...', { id: toastId });
      }

      await saveMemberSchedule(memberData, pat);

      showToast.dismiss(toastId);
      showToast.loading('Processing changes (10 seconds)...', { id: toastId });
      await new Promise(resolve => setTimeout(resolve, 10000));

      showToast.dismiss(toastId);
      showToast.success('Schedule submitted successfully!');

      // Navigate to members page after showing success
      setTimeout(() => {
        navigate('/members');
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
        <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-creed-primary" />
            <h2 className="text-3xl font-display font-bold text-creed-text uppercase tracking-wide">
              Submit Schedule
            </h2>
          </div>
          <div className="h-0.5 w-full bg-gradient-to-r from-creed-primary via-creed-accent to-transparent mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
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
