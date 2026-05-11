import React, { useState, useEffect } from 'react';
import './Countdown.css';

export interface CountdownProps {
  targetDate?: string;
  title?: string;
  description?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const DEFAULT_TARGET_DATE = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

export const Countdown: React.FC<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE,
  title = "Coming Soon",
  description = "We're working hard to launch our new product. Stay tuned!"
}) => {
  const calculateTimeRemaining = React.useCallback((): TimeRemaining => {
    const total = Date.parse(targetDate) - Date.now();
    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    console.log("Timer started for:", targetDate);
    const timer = setInterval(() => {
      const newTime = calculateTimeRemaining();
      setTimeLeft(newTime);
    }, 1000);

    return () => {
      console.log("Timer cleared");
      clearInterval(timer);
    };
  }, [calculateTimeRemaining, targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="wf-countdown__item">
      <div className="wf-countdown__value">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="wf-countdown__label">{label}</div>
    </div>
  );

  return (
    <div className="wf-countdown">
      <h2 className="wf-countdown__title">{title}</h2>
      <p className="wf-countdown__description">{description}</p>
      <div className="wf-countdown__grid">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      {timeLeft.total <= 0 && (
        <div className="wf-countdown__finished">The event has started!</div>
      )}
    </div>
  );
};

export default Countdown;
