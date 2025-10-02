import { Info } from 'lucide-react';
import { DAYS_OF_WEEK, getDayDisplayName, generateTimeSlots } from '../utils/timeSlots';
import { useLanguage } from '../context/LanguageContext';

export default function TimeSlotPicker({ availability, onChange }) {
  const { t } = useLanguage();
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
      {/* Instructions */}
      <div className="bg-creed-base border-l-4 border-creed-accent p-4 rounded-lg">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-creed-accent flex-shrink-0 mt-0.5" />
          <p className="text-sm text-creed-text font-body">
            <strong className="text-creed-accent font-display uppercase tracking-wide">{t('timeSlotPicker.missionBrief')}</strong>{' '}
            {t('timeSlotPicker.instructions')}
          </p>
        </div>
      </div>

      {/* Day Slots */}
      {DAYS_OF_WEEK.map(day => (
        <div key={day} className="bg-creed-base border border-creed-lighter rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-6 bg-creed-primary rounded-full"></div>
            <h3 className="text-lg font-display font-bold text-creed-text uppercase tracking-wide">
              {getDayDisplayName(day, t)}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {timeSlots.map(slot => (
              <label
                key={slot.value}
                className={`
                  flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all
                  font-display font-semibold text-xs uppercase tracking-wide
                  ${isSlotSelected(day, slot.value)
                    ? 'bg-gradient-to-r from-creed-primary to-creed-secondary text-white shadow-glow-primary'
                    : 'bg-creed-lighter text-creed-muted hover:bg-creed-light hover:text-creed-text border border-creed-base'
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={isSlotSelected(day, slot.value)}
                  onChange={() => handleToggleSlot(day, slot.value)}
                  className="sr-only"
                />
                <span className="text-center">
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
