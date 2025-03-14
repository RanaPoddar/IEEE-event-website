'use client'
import React, { useEffect, useState, JSX } from 'react';

interface CountDownProps {
  targetDate: string;
}

const CountDown: React.FC<CountDownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center justify-center border-2 border-elegantOrange rounded-lg p-2 min-w-[50px]">
        <span className="text-elegantOrange text-xl font-bold">{timeLeft[interval]}</span>
        <span className="text-elegantOrange text-xs">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center items-center gap-2">
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default CountDown;