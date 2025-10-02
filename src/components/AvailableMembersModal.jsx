import { X, Users, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AvailableMembersModal({ isOpen, onClose, members, dayName, timeSlot }) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  // Sort members by car power (descending)
  const sortedMembers = [...members].sort((a, b) => b.carPower - a.carPower);

  return (
    <div className="fixed inset-0 bg-creed-darker/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-creed-light border-2 border-creed-primary rounded-lg shadow-glow-primary max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-creed-base to-creed-dark p-6 border-b border-creed-lighter">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-6 h-6 text-creed-primary" />
                <h2 className="text-2xl font-display font-bold text-creed-text uppercase tracking-wide">
                  {t('optimalSchedule.availableMembers')}
                </h2>
              </div>
              <p className="text-creed-muted font-body">
                <span className="text-creed-accent font-semibold">{dayName}</span> • {timeSlot}
              </p>
              <p className="text-creed-text font-display font-semibold mt-1">
                {members.length} {members.length !== 1 ? t('optimalSchedule.members') : t('optimalSchedule.member')} {t('optimalSchedule.available')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-creed-base hover:bg-creed-danger border border-creed-lighter
                       hover:border-creed-danger transition-all group"
            >
              <X className="w-5 h-5 text-creed-text group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Members Grid */}
        <div
          className="p-6 overflow-y-auto flex-1 custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#2d3748 #0f1419'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-creed-base border border-creed-lighter rounded-lg p-4
                         hover:border-creed-primary transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-display font-bold text-creed-text uppercase tracking-wide truncate">
                      {member.username}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 ml-3 px-3 py-1.5 bg-creed-lighter border border-creed-primary/30 rounded-lg group-hover:border-creed-primary transition-all">
                    <Zap className="w-4 h-4 text-creed-primary" />
                    <span className="text-base font-display font-bold text-creed-primary whitespace-nowrap">
                      {member.carPower}M
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-creed-base border-t border-creed-lighter p-4">
          <div className="flex items-center justify-center gap-2 text-sm text-creed-muted font-body">
            <Zap className="w-4 h-4 text-creed-accent" />
            <span>{t('optimalSchedule.sortedByCarPower')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
