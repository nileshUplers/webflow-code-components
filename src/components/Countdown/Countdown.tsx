import React, { useState, useEffect } from 'react';
import './Countdown.css';

export interface CountdownProps {
  targetDate?: string;
  title?: string;
  showLabels?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Helper: calculate remaining time from now until targetDate
const getTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = new Date(targetDate).getTime() - Date.now();

  // If the target date has already passed, return null
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// Helper: pad a number to always show 2 digits (e.g. 5 → "05")
const pad = (n: number) => String(n).padStart(2, '0');

export const Countdown = ({
  targetDate = '2026-01-01T00:00:00',
  title = 'Countdown',
  showLabels = true,
}: CountdownProps) => {
  // useState stores the current time remaining
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft(targetDate));

  // useEffect runs once on mount and sets up a 1-second interval
  useEffect(() => {
    // Recalculate immediately when targetDate changes
    setTimeLeft(getTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    // Cleanup: clear the interval when the component unmounts
    // This prevents memory leaks — always clean up intervals!
    return () => clearInterval(interval);
  }, [targetDate]); // Re-run effect if targetDate prop changes

  const segments = timeLeft
    ? [
        { value: pad(timeLeft.days), label: 'Days' },
        { value: pad(timeLeft.hours), label: 'Hours' },
        { value: pad(timeLeft.minutes), label: 'Minutes' },
        { value: pad(timeLeft.seconds), label: 'Seconds' },
      ]
    : null;

  return (
    <div className="wf-countdown">
      {title && <p className="wf-countdown__title">{title}</p>}

      {segments ? (
        <div className="wf-countdown__grid">
          {segments.map(({ value, label }, i) => (
            <React.Fragment key={label}>
              <div className="wf-countdown__segment">
                <span className="wf-countdown__value">{value}</span>
                {showLabels && <span className="wf-countdown__label">{label}</span>}
              </div>
              {/* Colon separator between segments, but not after the last one */}
              {i < segments.length - 1 && (
                <span className="wf-countdown__separator">:</span>
              )}
            </React.Fragment>
          ))}
        </div>
      ) : (
        <p className="wf-countdown__expired">🎉 Time's up!</p>
      )}
    </div>
  );
};
