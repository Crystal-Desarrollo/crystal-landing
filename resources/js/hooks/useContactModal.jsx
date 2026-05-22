import { createContext, useContext, useState } from 'react';

const ContactModalContext = createContext(null);

export function ContactModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [preselectedArea, setPreselectedArea] = useState('');

    function open(area = '') {
        setPreselectedArea(area);
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
        setPreselectedArea('');
    }

    return (
        <ContactModalContext.Provider value={{ isOpen, open, close, preselectedArea }}>
            {children}
        </ContactModalContext.Provider>
    );
}

export function useContactModal() {
    const ctx = useContext(ContactModalContext);
    if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider');
    return ctx;
}
