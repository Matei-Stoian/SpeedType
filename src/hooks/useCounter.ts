import { useState, useRef, useCallback, useEffect } from "react";


export const useCounter = (initialValue: number, interval = 1000) => {
    const intervalRef = useRef<number | null>(null);
    const [counter, setCounter] = useState(initialValue);
  
    const startCounter = useCallback(() => {
      if (intervalRef.current !== null) return;
      intervalRef.current = window.setInterval(() => {
        setCounter((prev) => {
          if (prev > 0) {
            return prev - interval;
          }
          if (prev === 0) clearInterval(intervalRef.current!);
  
          return prev;
        });
      }, interval);
    }, [initialValue, interval]);
  
    const resetCounter = useCallback(() => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setCounter(initialValue);
      }
    }, [initialValue]);
  
    useEffect(() => {
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);
  
    return { counter, startCounter, resetCounter };
  };