import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeSlotPicker from './TimeSlotPicker';
import { initializeAvailability } from '../utils/timeSlots';
import { saveMemberSchedule } from '../services/github';

export default function ScheduleForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    carPower: '',
    towerLevel: ''
  });
  const [availability, setAvailability] = useState(initializeAvailability());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.username.trim()) {
      setError('Please enter your in-game username');
      return;
    }

    const carPower = parseFloat(formData.carPower);
    if (isNaN(carPower) || carPower <= 0) {
      setError('Please enter a valid car power (in millions)');
      return;
    }

    const towerLevel = parseInt(formData.towerLevel);
    if (isNaN(towerLevel) || towerLevel < 1 || towerLevel > 33) {
      setError('Tower level must be between 1 and 33');
      return;
    }

    // Check if at least one time slot is selected
    const hasSlots = Object.values(availability).some(daySlots => daySlots.length > 0);
    if (!hasSlots) {
      setError('Please select at least one time slot');
      return;
    }

    setLoading(true);

    try {
      setStatus('Preparing your schedule data...');
      const memberData = {
        id: `member-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        username: formData.username.trim(),
        carPower: carPower,
        towerLevel: towerLevel,
        availability: availability
      };

      setStatus('Submitting to GitHub...');

      // Get PAT from sessionStorage (stored during setup)
      let pat = sessionStorage.getItem('tdc_temp_pat');

      // If no PAT, prompt user for it
      if (!pat) {
        pat = prompt('Enter GitHub Personal Access Token (needed for first submission this session):');
        if (!pat) {
          throw new Error('PAT is required to submit schedules');
        }
        // Store for this session
        sessionStorage.setItem('tdc_temp_pat', pat);
      }

      await saveMemberSchedule(memberData, pat);

      setStatus('Waiting for GitHub to process changes (10 seconds)...');
      await new Promise(resolve => setTimeout(resolve, 10000));

      setSuccess(true);
      setStatus('Success! Redirecting to members page...');

      // Navigate to members page after showing success
      setTimeout(() => {
        navigate('/members');
      }, 1500);
    } catch (err) {
      console.error('Submit error:', err);
      setError('Failed to submit schedule. Please try again.');
      setStatus('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Submit Your Schedule
          </h2>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {status && (
            <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6 flex items-center">
              <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {status}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              ✓ Schedule submitted successfully! Redirecting to members list...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  In-Game Username *
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your username"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="carPower" className="block text-sm font-medium text-gray-700 mb-2">
                  Main Car Power (M) *
                </label>
                <input
                  type="number"
                  id="carPower"
                  name="carPower"
                  value={formData.carPower}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 2.5"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="towerLevel" className="block text-sm font-medium text-gray-700 mb-2">
                  Tower Level (1-33) *
                </label>
                <input
                  type="number"
                  id="towerLevel"
                  name="towerLevel"
                  value={formData.towerLevel}
                  onChange={handleInputChange}
                  min="1"
                  max="33"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 25"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Time Slots Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Select Your Available Time Slots
              </h3>
              <TimeSlotPicker availability={availability} onChange={setAvailability} />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Submitting...' : 'Submit Schedule'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
