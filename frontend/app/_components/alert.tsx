"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import Svg from '@/components/svg';


const AlertContext = createContext<any>(null);

export function useAlert() {
    return useContext(AlertContext);
}

export function AlertProvider({ children }: { children: ReactNode }) {

    // States
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [accentColor, setAccentColor] = useState('');

    const duration = 4000;

    // Functions
    const showAlert = (message: string, type: string) => {
        setMessage(message);
        setType(type);
        setAccentColor(type == 'success' ? '#008000' : '#FF0000');
        
        if (!isVisible) setTimeout(() => { hideAlert() }, duration); // start the timer if the alert isn't already visible
        
        setIsVisible(true);
    };

    const hideAlert = () => {
        setIsVisible(false);
    };

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            <div 
                className="fixed bottom-4 right-4 flex gap-2 bg-[--white] p-4 rounded-xl shadow-md z-50 transition-all duration-500 overflow-hidden"
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(calc(100% + 1rem))',
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: isVisible ? '0ms, 50ms' : '50ms, 0ms', // opacity enter transition delay & transform out transition delay
                    transitionProperty: 'transform, opacity',
                }}    
            >
                <div className="rounded-full w-6 aspect-square flex justify-center items-center" style={{background: accentColor}}>
                    <Svg name={ type == 'success' ? 'check' : 'cross' } color="#FFFFFF" strokeWidth="2" width="16" height="16" />
                </div>
                <p>{message}</p>

                <div
                    className={`absolute bottom-1 left-3 right-3 h-1 origin-left ease-linear transition-transform scale-x-0 rounded-full`}
                    style={{
                        background: `linear-gradient(to right, transparent, ${accentColor})`,
                        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                        transitionDuration: isVisible ? `${duration + 100}ms` : '0ms', // one way transition
                        transitionDelay: isVisible ? '0ms' : '100ms', // to avoid progressbar disappearing before the alert
                    }}
                ></div>
            </div>
        </AlertContext.Provider>
    );
}