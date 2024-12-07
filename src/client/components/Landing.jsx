import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';

function LandingPage() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <Hero className="flex-1" />
            <Footer />
        </div>
    );
}

export default LandingPage;