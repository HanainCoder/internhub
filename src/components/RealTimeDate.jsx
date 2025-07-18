import React, {useEffect, useState} from 'react';
import {CalendarDays, Clock} from 'lucide-react';

const RealTimeDate = () =>{
    const [currentTime,setCurrentTime] = useState(new Date())

    useEffect(()=>{
        const timer=setInterval(()=>setCurrentTime(new Date()),1000);
        return () => clearInterval(timer);
     },[]);

     const options = { weekday: 'long', month: 'long', day: 'numeric' };
     const formattedDate = currentTime.toLocaleDateString('en-US', options);
     const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
   return (
    <div className="flex items-center gap-6 bg-gradient-to-r from-gray-100 via-neutral-200 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-100 px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition duration-300 font-['Inter'] text-sm">
      <div className="flex items-center gap-2">
        <CalendarDays className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        <span>{formattedDate}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
        <span>{formattedTime}</span>
      </div>
    </div>
  );
}
export default RealTimeDate;