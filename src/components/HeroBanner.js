// // import React from 'react';
// // import { Box, Stack, Typography } from '@mui/material';

// // import HeroBannerImage from '../assets/images/banner.png';

// // const HeroBanner = () => (
// //   <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
// //     <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
// //     <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
// //       Sweat, Smile <br />
// //       And Repeat
// //     </Typography>
// //     <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
// //       Check out the most effective exercises personalized to you
// //     </Typography>
// //     <Stack>
// //       <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
// //     </Stack>
// //     <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
// //       Exercise
// //     </Typography>
// //     <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
// //   </Box>
// // );

// // export default HeroBanner;
// import React from 'react';
// import { Box, Stack, Typography, Button } from '@mui/material'; // Added Button import

// import HeroBannerImage from '../assets/images/banner3.jpg';

// const HeroBanner = () => (
//     <Box 
//         sx={{ 
//             mt: { lg: '150px', xs: '50px' }, // Adjusted top margin for better fit
//             ml: { sm: '50px' }, 
//             position: 'relative', 
//             p: '20px',
//             maxWidth: '100%', // Ensure it doesn't overflow horizontally
//         }}
//     >
//         {/* Branding/Title */}
//         <Typography 
//             color="#FF2625" 
//             fontWeight="700" // Made brand title bolder
//             fontSize="28px" // Slightly increased font size
//             sx={{ mb: 1 }} // Added a small margin bottom
//         >
//             THE FITNESS CLUB
//         </Typography>

//         {/* Main Headline */}
//         <Typography 
//             fontWeight={900} // Increased font weight for maximum impact
//             variant="h1"    // Used H1 for semantic meaning and stronger default styling
//             sx={{ 
//                 fontSize: { lg: '60px', xs: '46px' }, // Made headline significantly larger
//                 lineHeight: { lg: '1.1', xs: '1.2' }, // Tighter line spacing for a strong block of text
//                 mb: '28px', 
//                 mt: '20px' 
//             }}
//         >
//             Ignite Your <span style={{ color: '#FF2625' }}>Power</span>, <br />
//             Forge Your Best Self
//         </Typography>

//         {/* Sub-text */}
//         <Typography 
//             fontSize="22px" 
//             fontFamily="Alegreya" 
//             lineHeight="35px"
//             sx={{ mb: 4 }} // Increased bottom margin for separation
//         >
//             Check out the most effective exercises personalized to your goals.
//         </Typography>

//         {/* Call to Action (CTA) Button - Changed Stack/<a> to MUI Button */}
//         <Button
//             variant="contained" // Use the built-in contained (filled) style
//             color="error"       // Use MUI's error color, which is typically red
//             href="#exercises"
//             sx={{ 
//                 padding: '14px 30px', // More horizontal padding
//                 fontSize: '20px', 
//                 textTransform: 'uppercase', // Uppercase for the CTA is often punchier
//                 fontWeight: 600,
//                 boxShadow: '0 8px 15px rgba(255, 38, 37, 0.4)', // Added a prominent shadow
//                 borderRadius: '8px', // Slightly rounded corners
//                 transition: 'transform 0.2s', // Add a subtle hover effect
//                 '&:hover': {
//                     transform: 'translateY(-2px)', // Lift button on hover
//                     backgroundColor: '#E60000',
//                 }
//             }}
//         >
//             Explore Exercises
//         </Button>
        
//         {/* Large Background Text */}
//         <Typography 
//             fontWeight={900} // Increased weight
//             color="#FF2625" 
//             sx={{ 
//                 opacity: '0.08', // Slightly more visible
//                 display: { lg: 'block', xs: 'none' }, 
//                 fontSize: '240px', // Made even bigger
//                 position: 'absolute', // Absolute positioning
//                 bottom: '10px',      // Placement adjusted
//                 right: '-40px',      // Placement adjusted
//                 zIndex: -1,          // Ensure it stays in the background
//                 userSelect: 'none',  // Prevent text selection
//             }}
//         >
//             FITNESS
//         </Typography>

//         {/* Hero Image */}
//         <img 
//             src={HeroBannerImage} 
//             alt="hero-banner" 
//             className="hero-banner-img" 
//             // You should also define the .hero-banner-img CSS class to position this correctly!
//         />
//     </Box>
// );

// export default HeroBanner;
import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import backgroundImage from '../assets/images/banner3.jpg';

const HeroBanner = () => (
    <Box
        sx={{
            width: '100%',
            minHeight: { lg: '850px', xs: '600px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            p: '20px',
            position: 'relative',
            
            // --- Background Image Styling ---
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            
            // Assuming your header has a white background, 
            // the transition should make the top section dark to ensure readability,
            // or match the header color. Let's create a subtle dark overlay for depth.
            // If your header is white, the image will appear to fade into white 
            // at the very top edge, or simply transition from the dark overlay.
            
            // The top of the image needs to match the color of your Navbar/Header.
            // If the header is white, the following gradient will need adjustment.
        }}
    >
        {/* --- Gradient Overlay for Blending & Readability --- */}
        <Box 
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                // Creating a dark overall tint AND a specific blending gradient
                background: `
                    linear-gradient(
                        to bottom, 
                        rgba(0, 0, 0, 0.7) 0%,   /* Start with a strong dark tint at the top (blending area) */
                        rgba(0, 0, 0, 0.4) 30%,  /* Continue with a medium tint */
                        rgba(0, 0, 0, 0.2) 100%  /* Fade to a lighter tint at the bottom */
                    )
                `,
            }}
        />

        {/* All content needs zIndex > 0 to appear above the overlay */}
        <Stack sx={{ zIndex: 1, position: 'relative', alignItems: 'center', maxWidth: '900px' }}> 
            
            {/* Branding/Title */}
            <Typography
                color="#FF2625"
                fontWeight="700"
                fontSize="28px"
                sx={{ mb: 1 }}
            >
                THE FITNESS CLUB
            </Typography>

            {/* Main Headline */}
            <Typography
                fontWeight={900}
                variant="h1"
                sx={{
                    fontSize: { lg: '60px', xs: '46px' },
                    lineHeight: { lg: '1.1', xs: '1.2' },
                    mb: '28px',
                    mt: '20px',
                    color: 'white',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.8)', // Stronger shadow for better pop
                }}
            >
                Ignite Your <span style={{ color: '#FF2625' }}>Power</span>, <br />
                Forge Your Best Self
            </Typography>

            {/* Sub-text */}
            <Typography
                fontSize="22px"
                fontFamily="Alegreya"
                lineHeight="35px"
                sx={{ mb: 4, color: 'white' }}
            >
                Check out the most effective exercises personalized to your goals.
            </Typography>

            {/* Call to Action (CTA) Button */}
            <Button
                variant="contained"
                color="error"
                href="#exercises"
                sx={{
                    padding: '14px 30px',
                    fontSize: '20px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    boxShadow: '0 8px 15px rgba(255, 38, 37, 0.4)',
                    borderRadius: '8px',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'translateY(-2px)',
                        backgroundColor: '#E60000',
                    }
                }}
            >
                Explore Exercises
            </Button>
        </Stack>

        {/* Large Background Text */}
        <Typography
            fontWeight={900}
            color="#FF2625"
            sx={{
                opacity: '0.05',
                display: { lg: 'block', xs: 'none' },
                fontSize: '240px',
                position: 'absolute',
                bottom: '10px',
                right: '-40px',
                zIndex: 0,
                userSelect: 'none',
            }}
        >
            FITNESS
        </Typography>
    </Box>
);

export default HeroBanner;