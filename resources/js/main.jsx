import './i18n';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ContactModalProvider } from './hooks/useContactModal';
import App from './AppShell';

const root = document.getElementById('app');
createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContactModalProvider>
                <App />
            </ContactModalProvider>
        </BrowserRouter>
    </React.StrictMode>
);
