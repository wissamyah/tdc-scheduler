import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for auto-refreshing data at specified intervals
 * @param {Function} refreshCallback - Function to call on each refresh
 * @param {number} interval - Refresh interval in milliseconds (default: 60000ms = 1 minute)
 * @param {boolean} enabled - Whether auto-refresh is enabled (default: true)
 * @returns {Object} - { isRefreshing, lastRefreshTime, toggleAutoRefresh, manualRefresh }
 */
export function useAutoRefresh(refreshCallback, interval = 60000, enabled = true) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState(null);
  const [isEnabled, setIsEnabled] = useState(enabled);
  const intervalRef = useRef(null);
  const callbackRef = useRef(refreshCallback);

  // Update callback ref when it changes
  useEffect(() => {
    callbackRef.current = refreshCallback;
  }, [refreshCallback]);

  // Auto-refresh logic
  useEffect(() => {
    if (!isEnabled) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const executeRefresh = async () => {
      try {
        setIsRefreshing(true);
        await callbackRef.current();
        setLastRefreshTime(new Date());
      } catch (error) {
        console.error('Auto-refresh error:', error);
      } finally {
        setIsRefreshing(false);
      }
    };

    // Set up interval
    intervalRef.current = setInterval(executeRefresh, interval);

    // Cleanup on unmount or when dependencies change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [interval, isEnabled]);

  // Manual refresh function
  const manualRefresh = async () => {
    try {
      setIsRefreshing(true);
      await callbackRef.current();
      setLastRefreshTime(new Date());
    } catch (error) {
      console.error('Manual refresh error:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Toggle auto-refresh on/off
  const toggleAutoRefresh = () => {
    setIsEnabled(prev => !prev);
  };

  return {
    isRefreshing,
    lastRefreshTime,
    isEnabled,
    toggleAutoRefresh,
    manualRefresh
  };
}
