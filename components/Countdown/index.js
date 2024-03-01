import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Fecha objetivo
  const countDownDate = new Date('2024-03-21').getTime();

  // Calcular la diferencia de tiempo inicial
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countDownDate));

  useEffect(() => {
    // Actualizar el contador cada segundo
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(countDownDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Función para calcular el tiempo restante
  function calculateTimeLeft(countDownDate) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Si el contador llega a cero, detener el tiempo
    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className='mt-5'>

      <p className='text-center font-semibold opacity-[.8] text-3xl tracking-tighter '>{timeLeft.days} Días {timeLeft.hours} Horas {timeLeft.minutes} Minutos {timeLeft.seconds} Segundos</p>
    </div>
  );
};

export default CountdownTimer;
