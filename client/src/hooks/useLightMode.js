import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useLightMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('theme', initialValue);
    
    const body = document.querySelector('body')
    
    useEffect(() => {
        if (someValue === true) {
            body.classList.add('light-mode')
        } else {
            body.classList.remove('light-mode')
        }
    }, [someValue, body])

    return [someValue, setSomeValue];
}