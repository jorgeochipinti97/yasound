import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Indicador para saber si estamos en el cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Se activa solo en el cliente
    setIsClient(true);
  }, []);

  // Fecha objetivo
  const countDownDate = new Date("2024-04-30").getTime();

  // Calcular la diferencia de tiempo inicial solo si isClient es true
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    // Actualizar el contador cada segundo solo si estamos en el cliente
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(countDownDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [isClient, timeLeft]); // Dependencias actualizadas para incluir timeLeft

  // Función para calcular el tiempo restante
  function calculateTimeLeft(countDownDate) {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
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

  // Renderizado condicional basado en isClient para evitar la renderización en el servidor
  return (
    <div className="mt-5 cantidad" style={{opacity:0}}>
      {isClient ? (
        <p className="text-center font-semibold opacity-[.8] text-3xl tracking-tighter">
          {timeLeft.days} Días {timeLeft.hours} Horas {timeLeft.minutes} Minutos{" "}
          {timeLeft.seconds} Segundos
        </p>
      ) : (
        // Se puede mostrar un placeholder o nada mientras se carga el componente en el cliente
        <p className="text-center font-semibold opacity-[.8] text-3xl tracking-tighter">
          Cargando...
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
