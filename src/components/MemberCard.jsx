import { useState } from 'react';
import { User, Zap, Building2, ChevronDown, Calendar, Clock, Globe, Edit2, Check, X, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DAYS_OF_WEEK, getDayDisplayName, getTimeSlotLabel } from '../utils/timeSlots';
import { getTimezoneDisplay } from '../utils/timezone';
import { saveMemberSchedule, fetchDataFromAPI } from '../services/github';
import { showToast } from '../utils/toast';

export default function MemberCard({ member, onUpdate }) {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingCarPower, setIsEditingCarPower] = useState(false);
  const [editedCarPower, setEditedCarPower] = useState(member.carPower);
  const [isEditingTowerLevel, setIsEditingTowerLevel] = useState(false);
  const [editedTowerLevel, setEditedTowerLevel] = useState(member.towerLevel);
  const [isSaving, setIsSaving] = useState(false);

  const hasAvailability = Object.values(member.availability || {}).some(
    slots => slots && slots.length > 0
  );

  const handleEditCarPower = () => {
    setEditedCarPower(member.carPower);
    setIsEditingCarPower(true);
  };

  const handleCancelEdit = () => {
    setEditedCarPower(member.carPower);
    setIsEditingCarPower(false);
  };

  const handleSaveCarPower = async () => {
    const newCarPower = parseFloat(editedCarPower);

    // Validation
    if (isNaN(newCarPower) || newCarPower <= 0) {
      showToast.error(t('memberCard.invalidCarPower'));
      return;
    }

    if (newCarPower === member.carPower) {
      setIsEditingCarPower(false);
      return;
    }

    setIsSaving(true);
    const toastId = showToast.loading(t('memberCard.updatingCarPower'));

    try {
      const pat = localStorage.getItem('tdc_pat');

      if (!pat) {
        showToast.dismiss(toastId);
        showToast.error(t('auth.authRequired'));
        setIsSaving(false);
        return;
      }

      // Update member data with new car power
      const updatedMemberData = {
        ...member,
        carPower: newCarPower,
        lastUpdated: new Date().toISOString()
      };

      await saveMemberSchedule(updatedMemberData, pat);

      showToast.loading(t('memberCard.verifyingUpdate'), { id: toastId });

      // Verify update by polling (similar to submit and delete flows)
      const maxAttempts = 10;
      let attempts = 0;
      let updateVerified = false;

      // Add initial delay before first verification
      await new Promise(resolve => setTimeout(resolve, 2000));

      while (attempts < maxAttempts && !updateVerified) {
        attempts++;

        try {
          const data = await fetchDataFromAPI(pat);
          const updatedMember = data.members.find(m => m.username === member.username);

          if (updatedMember && updatedMember.carPower === newCarPower) {
            updateVerified = true;
            break;
          } else {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } catch (error) {
          console.error('Error verifying update:', error);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (!updateVerified) {
        showToast.dismiss(toastId);
        showToast.error(t('memberCard.couldNotVerifyUpdate'));
        setIsSaving(false);
        setEditedCarPower(member.carPower);
        setIsEditingCarPower(false);
        return;
      }

      showToast.success(t('memberCard.carPowerUpdated'), { id: toastId });
      setIsEditingCarPower(false);

      // Notify parent to refresh data
      if (onUpdate) {
        onUpdate();
      }
    } catch (err) {
      console.error('Update error:', err);
      showToast.dismiss(toastId);
      showToast.error(t('memberCard.failedToUpdateCarPower'));
      setEditedCarPower(member.carPower);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditTowerLevel = () => {
    setEditedTowerLevel(member.towerLevel);
    setIsEditingTowerLevel(true);
  };

  const handleCancelEditTower = () => {
    setEditedTowerLevel(member.towerLevel);
    setIsEditingTowerLevel(false);
  };

  const handleSaveTowerLevel = async () => {
    const newTowerLevel = parseInt(editedTowerLevel, 10);

    // Validation
    if (isNaN(newTowerLevel) || newTowerLevel <= 0 || newTowerLevel > 35) {
      showToast.error(t('memberCard.invalidTowerLevel'));
      return;
    }

    if (newTowerLevel === member.towerLevel) {
      setIsEditingTowerLevel(false);
      return;
    }

    setIsSaving(true);
    const toastId = showToast.loading(t('memberCard.updatingTowerLevel'));

    try {
      const pat = localStorage.getItem('tdc_pat');

      if (!pat) {
        showToast.dismiss(toastId);
        showToast.error(t('auth.authRequired'));
        setIsSaving(false);
        return;
      }

      // Update member data with new tower level
      const updatedMemberData = {
        ...member,
        towerLevel: newTowerLevel,
        lastUpdated: new Date().toISOString()
      };

      await saveMemberSchedule(updatedMemberData, pat);

      showToast.loading(t('memberCard.verifyingUpdate'), { id: toastId });

      // Verify update by polling
      const maxAttempts = 10;
      let attempts = 0;
      let updateVerified = false;

      // Add initial delay before first verification
      await new Promise(resolve => setTimeout(resolve, 2000));

      while (attempts < maxAttempts && !updateVerified) {
        attempts++;

        try {
          const data = await fetchDataFromAPI(pat);
          const updatedMember = data.members.find(m => m.username === member.username);

          if (updatedMember && updatedMember.towerLevel === newTowerLevel) {
            updateVerified = true;
            break;
          } else {
            await new Promise(resolve => setTimeout(resolve, 2000));
          }
        } catch (error) {
          console.error('Error verifying update:', error);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (!updateVerified) {
        showToast.dismiss(toastId);
        showToast.error(t('memberCard.couldNotVerifyUpdate'));
        setIsSaving(false);
        setEditedTowerLevel(member.towerLevel);
        setIsEditingTowerLevel(false);
        return;
      }

      showToast.success(t('memberCard.towerLevelUpdated'), { id: toastId });
      setIsEditingTowerLevel(false);

      // Notify parent to refresh data
      if (onUpdate) {
        onUpdate();
      }
    } catch (err) {
      console.error('Update error:', err);
      showToast.dismiss(toastId);
      showToast.error(t('memberCard.failedToUpdateTowerLevel'));
      setEditedTowerLevel(member.towerLevel);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-creed-light border border-creed-lighter rounded-lg shadow-tactical hover:shadow-glow-primary transition-all p-6">
      {/* Tactical corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-creed-accent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-creed-accent opacity-50"></div>

      {/* Member Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-creed-primary to-creed-secondary
                        flex items-center justify-center shadow-glow-primary">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-creed-text uppercase tracking-wide">
              {member.username}
            </h3>
            <p className="text-xs text-creed-muted font-body">
              {member.lastUpdated && `${t('memberCard.updated')} ${new Date(member.lastUpdated).toLocaleDateString()}`}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-creed-base border border-creed-lighter rounded-lg p-3 relative">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-3 h-3 text-creed-primary" />
            <div className="text-xs text-creed-text font-display uppercase tracking-wide">{t('memberCard.carPower')}</div>
          </div>

          {!isEditingCarPower ? (
            <div className="flex items-center justify-between">
              <div className="text-lg font-display font-bold text-creed-primary">{member.carPower}M</div>
              <button
                onClick={handleEditCarPower}
                disabled={isSaving}
                className="p-1.5 rounded bg-creed-lighter hover:bg-creed-primary/20
                         border border-creed-primary/30 hover:border-creed-primary
                         transition-all group disabled:opacity-50"
                title={t('memberCard.editCarPower')}
              >
                <Edit2 className="w-3.5 h-3.5 text-creed-primary group-hover:scale-110 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="0.1"
                min="0"
                value={editedCarPower}
                onChange={(e) => setEditedCarPower(e.target.value)}
                disabled={isSaving}
                className="w-full px-2 py-1 bg-creed-dark border border-creed-primary
                         rounded text-creed-text font-display font-bold text-sm
                         focus:ring-2 focus:ring-creed-primary focus:outline-none
                         disabled:opacity-50"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveCarPower();
                  if (e.key === 'Escape') handleCancelEdit();
                }}
              />
              <div className="flex gap-1">
                <button
                  onClick={handleSaveCarPower}
                  disabled={isSaving}
                  className="p-1.5 rounded bg-creed-primary hover:bg-creed-primary/80
                           transition-all disabled:opacity-50"
                  title={t('memberCard.save')}
                >
                  {isSaving ? (
                    <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                  ) : (
                    <Check className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={handleCancelEdit}
                  disabled={isSaving}
                  className="p-1.5 rounded bg-creed-danger hover:bg-creed-danger/80
                           transition-all disabled:opacity-50"
                  title={t('memberCard.cancel')}
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-creed-base border border-creed-lighter rounded-lg p-3 relative">
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-3 h-3 text-creed-accent" />
            <div className="text-xs text-creed-text font-display uppercase tracking-wide">{t('memberCard.tower')}</div>
          </div>

          {!isEditingTowerLevel ? (
            <div className="flex items-center justify-between">
              <div className="text-lg font-display font-bold text-creed-accent">{member.towerLevel}</div>
              <button
                onClick={handleEditTowerLevel}
                disabled={isSaving}
                className="p-1.5 rounded bg-creed-lighter hover:bg-creed-accent/20
                         border border-creed-accent/30 hover:border-creed-accent
                         transition-all group disabled:opacity-50"
                title={t('memberCard.editTowerLevel')}
              >
                <Edit2 className="w-3.5 h-3.5 text-creed-accent group-hover:scale-110 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="number"
                step="1"
                min="1"
                max="35"
                value={editedTowerLevel}
                onChange={(e) => setEditedTowerLevel(e.target.value)}
                disabled={isSaving}
                className="w-full px-2 py-1 bg-creed-dark border border-creed-accent
                         rounded text-creed-text font-display font-bold text-sm
                         focus:ring-2 focus:ring-creed-accent focus:outline-none
                         disabled:opacity-50"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveTowerLevel();
                  if (e.key === 'Escape') handleCancelEditTower();
                }}
              />
              <div className="flex gap-1">
                <button
                  onClick={handleSaveTowerLevel}
                  disabled={isSaving}
                  className="p-1.5 rounded bg-creed-accent hover:bg-creed-accent/80
                           transition-all disabled:opacity-50"
                  title={t('memberCard.save')}
                >
                  {isSaving ? (
                    <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                  ) : (
                    <Check className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
                <button
                  onClick={handleCancelEditTower}
                  disabled={isSaving}
                  className="p-1.5 rounded bg-creed-danger hover:bg-creed-danger/80
                           transition-all disabled:opacity-50"
                  title={t('memberCard.cancel')}
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Timezone Info */}
      {member.timezone && (
        <div className="mb-4 px-3 py-2 bg-creed-base border border-creed-accent/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Globe className="w-3 h-3 text-creed-accent" />
            <span className="text-xs text-creed-muted font-body">
              {t('memberCard.timezone')} <span className="text-creed-text font-semibold">{getTimezoneDisplay(member.timezone)}</span>
            </span>
          </div>
        </div>
      )}

      {/* Availability Toggle */}
      {hasAvailability && (
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between px-4 py-2.5
                     bg-creed-base border border-creed-lighter hover:border-creed-primary
                     rounded-lg transition-all group"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-creed-muted group-hover:text-creed-primary transition-colors" />
              <span className="font-display font-semibold text-creed-text uppercase tracking-wide text-sm">
                {isExpanded ? t('memberCard.hideSchedule') : t('memberCard.showSchedule')} {t('memberCard.schedule')}
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-creed-muted group-hover:text-creed-primary transition-all ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Availability Details */}
          {isExpanded && (
            <div className="mt-4 space-y-3 bg-creed-base rounded-lg p-4 border border-creed-lighter">
              <div className="mb-3 px-3 py-2 bg-creed-accent/10 border border-creed-accent/30 rounded">
                <p className="text-xs text-creed-muted font-body">
                  <Globe className="w-3 h-3 text-creed-accent inline mr-1" />
                  {t('memberCard.timesInServerTime')} <strong className="text-creed-accent">{t('memberCard.serverTimeUTC2')}</strong>
                </p>
              </div>
              {DAYS_OF_WEEK.map(day => {
                const daySlots = member.availability[day] || [];
                if (daySlots.length === 0) return null;

                return (
                  <div key={day} className="border-l-2 border-creed-primary pl-3">
                    <h4 className="font-display font-bold text-creed-text uppercase tracking-wide text-sm mb-2">
                      {getDayDisplayName(day, t)}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {daySlots.map(slot => (
                        <span
                          key={slot}
                          className="inline-flex items-center gap-1 px-2 py-1
                                   bg-creed-lighter border border-creed-primary/30
                                   text-creed-text text-xs font-display font-semibold
                                   rounded uppercase tracking-wide"
                        >
                          <Clock className="w-3 h-3 text-creed-primary" />
                          {getTimeSlotLabel(slot)}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {!hasAvailability && (
        <div className="text-center py-4 border border-creed-lighter rounded-lg bg-creed-base">
          <p className="text-creed-muted text-sm font-body">{t('memberCard.noAvailability')}</p>
        </div>
      )}
    </div>
  );
}
