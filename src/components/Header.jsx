import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    const navLinks = [
        { path: '/', label: 'Dashboard' },
        { path: '/personen', label: 'Personen' }
    ];

    return (
        <header>
            <Navbar links={navLinks} />
        </header>
    );
};

export default Header;