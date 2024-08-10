'use client';
import { useState } from 'react';
import { Box, Button, Container, Typography, AppBar, Toolbar, CssBaseline, Stack, Modal, IconButton, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChatBot from '../chatbot/page';
import TestimonialsCarousel from '../testimonials/page';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const themePrimary = createTheme({
    typography: {
        fontFamily: 'Georgia, serif', 
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#5d9cec', 
        },
        secondary: {
            main: '#f7a7a7', 
        },
        background: {
            default: '#1f1f1f', 
            paper: '#1f1f1f', 
        },
        text: {
            primary: '#ffffff', 
            secondary: '#cccccc',
        },
    },
});
  

const LandingPage = () => {
    // const[theme, setTheme] = useState('');
    const [open, setOpen] = useState(false); 
    // const router = useRouter();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={themePrimary}>
            <CssBaseline />
            <AppBar position="static" color="inherit" sx={{ bgcolor: '#1f1f1f', boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo and text */}
                    <Stack direction="row" spacing={2} alignItems="center" width="auto" >
                        <img src="/images/logo.png"
                            alt="NextAway Stays Logo"
                            style={{
                                width: '30px',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
                            }} />
                        <Typography variant="h6" color="inherit" fontWeight={'bold'}>
                            Next<span style={{ color: "#00fffb" }}>Away</span> Stays
                        </Typography>
                    </Stack>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 5 }} />
                    <Box sx={{ flexGrow: 5 }} />

                    {/* Centered text */}
                    <Typography width={'auto'} textAlign={'center'} >
                        <span> Discover <span style={{ fontWeight: 'bold', fontSize: '130%', color: "#00fffb" }}> Your </span> Ideal and Redefined <span style={{ fontWeight: 'bold', fontSize: '130%', color: "#00fffb" }}> Escape</span></span>
                    </Typography>

                    {/* Spacer */}
                    <Box sx={{ flexGrow: 5 }} />
                    <Box sx={{ flexGrow: 5 }} />
                    <Box sx={{ flexGrow: 5 }} />

                    {/* Help Button */}
                    <Box>
                        <Button variant="contained" color="background" sx={{ border: `2px solid #00fffb`, boxShadow: '0 12px 24px rgba(0,0,0,0.3)' }} onClick={handleOpen}>
                            Help
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container
                maxWidth="md"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '100vh',
                  textAlign: 'center',
                  backgroundColor: themePrimary.paper,
                }}>
                <Stack direction="column">
                    <Box>
                        {/* Header */}
                        <Box 
                            sx={{
                                mt:'10%',
                                backgroundColor: themePrimary.paper,
                                padding: '40px',
                                borderRadius: '12px',
                                boxShadow: '0 40px 50px rgba(0,0,0,0.5)',
                                width: '100%',
                                maxWidth: '700px',
                                minHeight: '100px',
                            }}>
                            <Typography sx={{fontSize:'250%', fontWeight: 'bold'}}>
                                <span><span style={{fontWeight: 'bold', color: "#00fffb"}}>Stays</span> that transform your travels <span style={{fontWeight: 'bold', color: "#00fffb"}}>into</span> extraordinary <span style={{fontWeight: 'bold', color: "#00fffb"}}>experiences</span></span>
                            </Typography>
                            <Typography sx={{fontSize:'100%', fontWeight: 'bold', mt: '3%'}}>
                                From charming city retreats to serene countryside havens!
                            </Typography>
                            <Stack direction='row' sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 3,
                                mt: '5%'
                            }}>
                                <Button variant="contained" color="background" sx={{border: `2px solid #00fffb`, boxShadow: '0 12px 24px rgba(0,0,0,0.3)'}}>
                                    <Typography>
                                        Explore
                                    </Typography>
                                </Button>
                                <Button variant="contained" sx={{bgcolor: '#00fffb'}}>
                                    <Typography>
                                        Book Now
                                    </Typography>
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
                {/* Testimonials */}
                <TestimonialsCarousel />
            </Container>
            {/* ChatBot Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'right',
                    ml: '60%',
                    mt: "5%",
                }}>
                <Box
                    bgcolor="transparent">
                    <ChatBot />
                </Box>
            </Modal>
            {/* Footer */}
            <AppBar position="static" color="inherit" sx={{ display: 'flex', justifyContent: 'space-between' }} ml={'3%'}>
                <Toolbar sx={{bgcolor: '#1f1f1f', boxShadow: '0 12px 24px rgba(0,0,0,0.8)'}}>
                    <Stack direction="column" sx={{alignItems:'center', justifyContent: 'center'}}>
                        <Stack direction="row" >
                        
                            <Stack direction="column" width="40%" padding={4}>
                                <Stack direction="row" spacing={1} alignItems="center" width="auto" >
                                    <img src="/images/logo.png"
                                        alt="NextAway Stays Logo"
                                        style={{
                                            width: '30px',
                                            height: 'auto',
                                            borderRadius: '10px',
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.5)'
                                        }} />
                                    <Typography variant="h6" color="inherit" fontWeight={'bold'}>
                                        Next<span style={{ color: "#00fffb" }}>Away</span> Stays
                                    </Typography>
                                </Stack>
                                <Typography variant="h11" color="inherit" sx={{ml: 1, mt: 2, width: '50%'}} >
                                    Our mission is to offer exceptional, personalized stays that make every trip feel like home.
                                </Typography>
                                <Typography sx={{mt: 6}} fontWeight={'bold'}>
                                    Connect with us:
                                </Typography>
                                <Stack direction="row" spacing={3} sx={{ml: 2, mt: 1}}>
                                    <IconButton sx={{ border: `2px solid #00fffb`, borderRadius: '4px', padding: '8px' }}>
                                        <Link href="https://www.linkedin.com/in/edombelayneh/" underline="hover" color="inherit">
                                            <LinkedInIcon />
                                        </Link>
                                    </IconButton>
                                    <IconButton sx={{ border: `2px solid #00fffb`, borderRadius: '4px', padding: '8px' }}>
                                        <Link href="https://www.instagram.com/dev.diaries._/" underline="hover" color="inherit">
                                            <InstagramIcon />
                                        </Link>
                                    </IconButton>
                                </Stack>
                            </Stack>
                            <Stack direction="row" width='60%'>
                                <Stack direction="column" width="40%" padding={4} sx={{mt: 3}}>
                                    <Typography variant="h7" color="#00fffb" fontWeight={'bold'}>
                                        Customer Links
                                    </Typography>
                                    <Stack direction="column" spacing={2} sx={{ml: 1, mt: 2}}>
                                        <Link href="" underline="hover" color="inherit">
                                            FAQ's
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Booking Policies
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Privacy Policy
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Terms of Service
                                        </Link>
                                    </Stack>
                                </Stack>
                                <Stack direction="column" width="50%" padding={4} sx={{mt: 3}}>
                                    <Typography variant="h7" color="#00fffb" fontWeight={'bold'}>
                                        Contact Info:
                                    </Typography>
                                    <Stack direction="column" spacing={2} sx={{ml: 1, mt: 2}}>
                                        <Link href="mailto:info@nestawaystays.com" underline="hover" color="inherit">
                                            Email: info@nestawaystays.com
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Phone: +1 (555) 654-7890
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Create Ticket
                                        </Link>
                                    </Stack>
                                </Stack>
                                <Stack direction="column" width="40%" padding={4} sx={{mt: 3}}>
                                    <Typography variant="h7" color="#00fffb" fontWeight={'bold'}>
                                        Company Info:
                                    </Typography>
                                    <Stack direction="column" spacing={2} sx={{ml: 1, mt: 2}}>
                                        <Link href="#" underline="hover" color="inherit">
                                            <span>About Next<span style={{fontWeight: 'bold', color: "#00fffb"}}>Away</span></span>
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Careers
                                        </Link>
                                        <Link href="#" underline="hover" color="inherit">
                                            Press/Media 
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <hr style={{ width: '100%', border: '1px solid #00fffb', margin: '20px 0' }} />
                        <Box> 
                            <Typography sx={{mt: 4, mb: 4}}>
                               <span>Copyright © 2024 Nest<span style={{fontWeight: 'bold', color: "#00fffb"}}>Away</span> Stays - <span style={{fontWeight: 'bold', color: "#00fffb"}}> Edom Belayneh</span>. All rights reserved.</span>
                            </Typography>
                        </Box>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
export default LandingPage
