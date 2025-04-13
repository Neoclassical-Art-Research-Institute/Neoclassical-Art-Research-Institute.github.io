// src/components/Section.tsx
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming path alias
import { cn } from '@/lib/utils'; // Assuming path alias

type PageName = 'home' | 'systems' | 'gaming' | 'cultures';

interface SectionProps {
    headline: string;
    description: string;
    linkText: string;
    linkUrl: PageName; // Use the specific type
    icon: React.ComponentType<{ className?: string }>;
    isDark?: boolean;
    id: string;
    onNavigate: (page: PageName) => void;
}

export const Section: React.FC<SectionProps> = ({
    headline,
    description,
    linkText,
    linkUrl,
    icon: Icon,
    isDark = false,
    id,
    onNavigate,
}) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className={cn(
                'py-16 md:py-24 px-4 sm:px-6 lg:px-8',
                // Use Tailwind classes based on the theme configuration
                isDark ? 'bg-nari-dark-gray text-white' : 'bg-white text-black'
            )}
        >
            <div className="max-w-7xl mx-auto text-center">
                {/* Use custom red color from theme */}
                <Icon className="w-12 h-12 mx-auto mb-6 text-nari-red-primary" />
                <h2
                    className={cn(
                        'text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4',
                        // Use appropriate text colors
                        isDark ? 'text-white' : 'text-gray-900' // text-gray-900 is a standard dark text
                    )}
                >
                    {headline}
                </h2>
                <p
                    className={cn(
                        'text-lg sm:text-xl md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto',
                        // Use appropriate text colors
                        isDark ? 'text-gray-300' : 'text-gray-600' // Standard Tailwind grays
                    )}
                >
                    {description}
                </p>
                <Button
                    as="a" // Keep as 'a' if you want it to be a link semantically
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor jump
                        onNavigate(linkUrl); // Navigate using state
                    }}
                    // href={`#${linkUrl}`} // You might want to keep this for non-JS fallback or SEO, but SPA navigation handles it
                    className={cn(
                        // Use configured colors for the gradient
                        'bg-gradient-to-r from-nari-red-primary to-nari-blue-primary text-white',
                        'hover:from-nari-red-primary/90 hover:to-nari-blue-primary/90', // Example hover effect
                        'px-8 py-3 rounded-full',
                        'inline-flex items-center justify-center gap-2', // Ensure button content is centered
                        'shadow-lg hover:shadow-xl',
                        'transition-all duration-300 ease-in-out', // Refined transition
                        'text-lg'
                    )}
                >
                    {linkText}
                    <ChevronRight className="w-5 h-5" />
                </Button>
            </div>
        </motion.section>
    );
};