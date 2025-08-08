import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/personen', label: 'Personen' },
        { path: '/addperson', label: 'Person hinzufügen' }
    ];

    return (
        <header>
            <Navbar links={navLinks} />
        </header>
    );
};

export default Header;