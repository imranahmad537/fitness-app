import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box } from '@mui/material'; // Added Box import for potential background

import Logo from '../assets/images/logo1.jpg';

const Navbar = () => (
    <Stack 
        direction="row" 
        justifyContent="space-around" 
        sx={{ 
            // Setting a slight bottom border for a clean separation line
            borderBottom: '1px solid #E0E0E0', 
            // Added padding top/bottom for better spacing
            py: { sm: '20px', xs: '15px' }, 
            px: '20px',
            // Adjusted horizontal gap for better distribution
            gap: { sm: '120px', xs: '40px' },
            // Ensure full width and top positioning
            width: '100%',
            // We use space-between for typical header layout: Logo on left, Links on right
            justifyContent: 'space-between', 
        }}
    >
        {/* Logo Section */}
        <Link to="/">
            <img 
                src={Logo} 
                alt="logo" 
                style={{ 
                    width: '88px', 
                    height: '88px', 
                    // No margin here, use padding on the parent Stack if needed
                }} 
            />
        </Link>

        {/* Navigation Links */}
        <Stack
            direction="row"
            gap={{ sm: '40px', xs: '20px' }} // Adjusted gap for mobile
            fontFamily="Alegreya"
            fontSize={{ sm: '20px', xs: '18px' }} // Slightly smaller, cleaner font size
            alignItems="center" // Center the links vertically
        >
            {/* Home Link (The currently selected/active link) */}
            <Link 
                to="/" 
                style={{ 
                    textDecoration: 'none', 
                    color: '#3A1212', 
                    fontWeight: '700', // Bold current link
                    borderBottom: '3px solid #FF2625', // Use the striking red accent
                    paddingBottom: '5px', // Add padding for visual spacing
                }}
            >
                Home
            </Link>

            {/* Exercises Link */}
            <a 
                href="#exercises" 
                style={{ 
                    textDecoration: 'none', 
                    color: '#3A1212',
                    transition: 'color 0.3s ease', // Add a subtle transition
                }}
                // Add a hover style via sx prop for a modern look (MUI only works on MUI components, so we'll leave it simple here or wrap in a Box)
            >
                Exercises
            </a>
            
            {/* Optional: Add a third link or Button for a more comprehensive header */}
            {/* <a 
                href="#contact" 
                style={{ 
                    textDecoration: 'none', 
                    color: '#3A1212', 
                }}
            >
                Contact
            </a> 
            */}
        </Stack>
    </Stack>
);

export default Navbar;