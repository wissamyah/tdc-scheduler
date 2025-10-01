import { DAYS_OF_WEEK, getDayDisplayName, generateTimeSlots } from '../utils/timeSlots';

export default function TimeSlotPicker({ availability, onChange }) {
  const timeSlots = generateTimeSlots();

  const handleToggleSlot = (day, slotValue) => {
    const daySlots = availability[day] || [];
    const newDaySlots = daySlots.includes(slotValue)
      ? daySlots.filter(s => s !== slotValue)
      : [...daySlots, slotValue];

    onChange({
      ...availability,
      [day]: newDaySlots
    });
  };

  const isSlotSelected = (day, slotValue) => {
    const daySlots = availability[day] || [];
    return daySlots.includes(slotValue);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Instructions:</strong> Select all time slots when you are available to play.
          You can select multiple slots per day.
        </p>
      </div>

      {DAYS_OF_WEEK.map(day => (
        <div key={day} className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {getDayDisplayName(day)}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {timeSlots.map(slot => (
              <label
                key={slot.value}
                className={`
                  flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all
                  ${isSlotSelected(day, slot.value)
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={isSlotSelected(day, slot.value)}
                  onChange={() => handleToggleSlot(day, slot.value)}
                  className="sr-only"
                />
                <span className="text-xs font-medium text-center">
                  {slot.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
