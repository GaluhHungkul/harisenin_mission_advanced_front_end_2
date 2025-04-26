import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const getTimeParts = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = getTimeParts(timeLeft);

  return (
    <div className=" text-white text-center bg-slate-300/10 rounded-lg py-5 mb-4 ">
      <h1>Lakukan Pembayaran Sebelum</h1>
      <main className="flex justify-center items-center gap-3 mt-2 ">
        <div className="bg-white/10 px-4  py-2 rounded-lg text-sm font-bold lg:text-base">{hours} <span className="text-gray-400">Jam</span></div>
        <span className="text-xl font-bold">:</span>
        <div className="bg-white/10 px-4  py-2 rounded-lg text-sm font-bold lg:text-base">{minutes} <span className="text-gray-400">Menit</span></div>
        <span className="text-xl font-bold">:</span>
        <div className="bg-white/10 px-4  py-2 rounded-lg text-sm font-bold lg:text-base">{seconds} <span className="text-gray-400">Detik</span></div>
      </main>
    </div>
  );
};

export default CountdownTimer;
