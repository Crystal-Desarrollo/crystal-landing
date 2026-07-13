import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactModal from './components/ui/ContactModal';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Desarrollo = lazy(() => import('./pages/Desarrollo'));
const Productos = lazy(() => import('./pages/Productos'));
const Soporte = lazy(() => import('./pages/Soporte'));

function PageLoader() {
    return (
        <div className="min-h-[40vh] flex items-center justify-center">
            <span className="w-6 h-6 rounded-full border-2 border-white/10 border-t-[#7F46F0] animate-spin" />
        </div>
    );
}

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/desarrollo" element={<Desarrollo />} />
                        <Route path="/productos" element={<Productos />} />
                        <Route path="/soporte" element={<Soporte />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
            <ContactModal />
            <WhatsAppButton />
        </>
    );
}