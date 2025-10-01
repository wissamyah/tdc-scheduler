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
      const memberData = {
        id: `member-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        username: formData.username.trim(),
        carPower: carPower,
        towerLevel: towerLevel,
        availability: availability
      };

      await saveMemberSchedule(memberData);

      setSuccess(true);

      // Reset form after 2 seconds and navigate to members page
      setTimeout(() => {
        navigate('/members');
      }, 2000);
    } catch (err) {
      console.error('Submit error:', err);
      setError('Failed to submit schedule. Please try again.');
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

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              Schedule submitted successfully! Redirecting to members list...
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
