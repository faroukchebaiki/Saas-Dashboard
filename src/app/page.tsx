import React from 'react';
import HeroSection from '@/components/hero-section';
import Features from '@/components/features';
import ContentSection from '@/components/content';
import FooterSection from '@/components/footer';

const AppPage: React.FC = () => {
    return (
        <main>
           <HeroSection />
           <ContentSection />
           <Features />
           <FooterSection />
        </main>
    );
};

export default AppPage;