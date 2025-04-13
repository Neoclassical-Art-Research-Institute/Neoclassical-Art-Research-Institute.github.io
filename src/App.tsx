// src/App.tsx
import  { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Gamepad2,
    BookOpen,
    Menu,
    X,
} from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming path alias
import { cn } from '@/lib/utils'; // Assuming path alias
import { SystemsPage } from '@/components/pages/SystemsPage'; // Adjusted import path
import { GamingPage } from '@/components/pages/GamingPage';   // Adjusted import path
import { CulturesPage } from '@/components/pages/CulturesPage';   // Adjusted import path
import { Section } from '@/components/Section';               // Adjusted import path


// import Logo from './assets/logo.svg?react';

import logoUrl from './assets/logo.svg';
// Define page types
type PageName = 'home' | 'systems' | 'gaming' | 'cultures';

const NeoclassicalArtResearchInstitute = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<PageName>('home');
    const navRef = useRef<HTMLElement>(null);

    // Click outside handler for mobile menu
    const handleClickOutside = useCallback((event: MouseEvent) => {
        // Ensure the click is outside the nav element and also not on the menu toggle button
        const target = event.target as Node;
        const menuButton = document.getElementById('mobile-menu-button'); // Added ID to button

        if (
            navRef.current &&
            !navRef.current.contains(target) &&
            (!menuButton || !menuButton.contains(target)) // Don't close if clicking the button itself
        ) {
            setIsMobileMenuOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev); // Safer state update
    };

    const navItems: { id: string; label: string; href: PageName }[] = [
        // Link Overview to 'home' page state
        { id: 'overview', label: 'Overview', href: 'home' },
        { id: 'systems', label: 'Systems', href: 'systems' },
        { id: 'gaming', label: 'Gaming', href: 'gaming' },
        { id: 'cultures', label: 'Cultures', href: 'cultures' },
    ];

    // Navigation handler
    const handleNavigation = (page: PageName) => {
        setCurrentPage(page);
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    // Update document title based on page
    useEffect(() => {
        let title = 'Neoclassical Art Research Institute';
        switch (currentPage) {
            case 'systems':
                title = 'NARI - Systems';
                break;
            case 'gaming':
                title = 'NARI - Gaming';
                break;
            case 'cultures':
                title = 'NARI - Cultures';
                break;
        }
        document.title = title;
    }, [currentPage]);

    // Animation variants for page transitions
    const pageVariants = {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
        exit: { opacity: 0, x: -30, transition: { duration: 0.3, ease: 'easeInOut' } },
    };

    // Render the current page content
    const renderPageContent = () => {
        switch (currentPage) {
            case 'systems':
                return <SystemsPage />;
            case 'gaming':
                return <GamingPage />;
            case 'cultures':
                return <CulturesPage />;
            case 'home':
            default:
                return (
                    
                    <>
                        {/* Overview Section - Using Tailwind classes */}
                        <div>
                        <section id="overview" className="bg-gray-100 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                            <div className="max-w-7xl mx-auto text-center">
                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    viewport={{ once: true }}
                                    // Use standard text color, adjust size if needed
                                    className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black"
                                >
                                    About Us
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                                    viewport={{ once: true }}
                                    // Use standard gray text color
                                    className="text-lg sm:text-xl max-w-3xl mx-auto text-nari-about-text"
                                >
                                    The Neoclassical Art Research Institute (NARI) is dedicated to exploring the evolving
                                    relationship between technology, culture, and society. Our interdisciplinary research spans a wide range of
                                    topics, from the underlying systems that power and interconnect our digital world to the game mechanics and ethnical
                                    implications of technological advancements. We strive to foster innovation, promote responsible
                                    practices, and contribute to a deeper understanding of the complex interplay between art and
                                    technology in the modern era.
                                </motion.p>
                            </div>
                        </section>
                        </div>

                        {/* Sections - Pass the refined handler */}
                        <Section
                            id="systems"
                            headline="Systems, Security, and Networking"
                            description="Delving into the core infrastructure that powers our digital world. From robust systems architecture to impenetrable security measures and seamless networking solutions, we explore the foundations of modern technology."
                            linkText="Explore Systems Research"
                            linkUrl="systems"
                            icon={Cpu}
                            isDark={true} // Example: Keep this section dark
                            onNavigate={handleNavigation}
                        />
                        <Section
                            id="gaming"
                            headline="Gaming and Arts"
                            description="Investigating the dynamic relationship between games and arts. We examine how gaming evolves as an art form, and how artistic principles shape the gaming experience, creating immersive and interactive worlds."
                            linkText="Discover Gaming & Arts"
                            linkUrl="gaming"
                            icon={Gamepad2}
                            isDark={false} // Example: Make this section light
                            onNavigate={handleNavigation}
                        />
                        <Section
                            id="cultures"
                            headline="Cultures and Representations"
                            description="Examining the cultural and ethical implications of technological advancements. We explore how cultures are shaped by the histories, and the sophisticated considerations that guide responsible innovation."
                            linkText="Learn about Cultures & Ethics"
                            linkUrl="cultures"
                            icon={BookOpen}
                            isDark={true} // Example: Keep this section dark
                            onNavigate={handleNavigation}
                        />
                    </>
                );
        }
    };

    return (
        // Consider a min-height to ensure footer stays down
        <div className="bg-white flex flex-col min-h-screen">
            {/* Top Navigation Bar */}
            <header
                ref={navRef} // Ref for click outside detection
                // Use Tailwind classes for background and text color
                className={cn(
                    'py-4 md:py-5 sticky top-0 z-50 w-full',
                    'border-b border-gray-700',
                    'bg-black text-white'
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavigation('home')}
                        className="text-xl font-bold text-white hover:text-gray-300 transition-colors flex items-center" // Added flex
                        aria-label="Go to homepage"
                    >
                        {/* V V V --- USE THE LOGO COMPONENT --- V V V */}
                        {/* <Logo className="h-8 w-auto mr-2" aria-hidden="true" /> Set size, add margin */}
                        {/* <span>LOGO</span> */}
                        <img src={logoUrl} alt="Logo" className="h-8 w-auto mr-2" />
                        {/* You could keep the NARI text or remove it */}
                        {/* NARI */}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-6">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <button // Use button for SPA nav
                                        className={cn(
                                            "transition-colors duration-300 text-lg",
                                            currentPage === item.href ? "text-nari-red-primary font-semibold" : "text-white hover:text-gray-300"
                                        )}
                                        onClick={() => handleNavigation(item.href)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            id="mobile-menu-button" // Add ID for click outside logic
                            variant="ghost" // Assuming Button component has variants
                            size="icon" // Assuming Button component has sizes
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-300 hover:bg-gray-700" // Add hover bg
                            aria-label="Toggle menu" // Accessibility
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden bg-nari-dark-gray" // Use custom dark gray
                        >
                            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <li key={item.id}>
                                        <button // Use button for SPA nav
                                            className={cn(
                                                "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                                                currentPage === item.href
                                                    ? "bg-gray-900 text-nari-red-primary"
                                                    : "text-white hover:bg-gray-700 hover:text-white"
                                            )}
                                            onClick={() => handleNavigation(item.href)}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content Area */}
            {/* Added flex-grow to make main content fill available space */}
            <main className="flex-grow">
                {/* AnimatePresence handles enter/exit animations for page changes */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentPage} // Key change triggers animation
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {renderPageContent()}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            {/* Use Tailwind classes */}
            <footer className="py-6 text-center bg-black text-nari-footer-text">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Neoclassical Art Research Institute. All rights reserved.
                    </p>
                    {/* Add social links or other footer content here if needed */}
                </div>
            </footer>
        </div>
    );
};

// Export the main component
// In a real app, you'd likely render this in your main index.js or App.js
export default NeoclassicalArtResearchInstitute; // Use as needed