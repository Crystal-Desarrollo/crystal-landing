import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContactModal from './components/ui/ContactModal';
import WhatsAppButton from './components/ui/WhatsAppButton';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home';
import Desarrollo from './pages/Desarrollo';
import Productos from './pages/Productos';
import Soporte from './pages/Soporte';

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/desarrollo" element={<Desarrollo />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/soporte" element={<Soporte />} />
                </Routes>
            </main>
            <Footer />
            <ContactModal />
            <WhatsAppButton />
        </>
    );
}
