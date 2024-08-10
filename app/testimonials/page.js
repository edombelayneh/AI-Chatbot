import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import { Box, Typography, Container, Stack } from '@mui/material';

// Sample data for testimonials with images
const testimonials = [
    { name: 'John Doe', text: 'This was an amazing experience! The stay was fantastic and the service was top-notch.', image: '/images/sample1.png', rating: 5, photo: '/images/photo1.png' },
    { name: 'Jane Smith', text: 'A wonderful escape from the city. Highly recommend to anyone looking for relaxation.', image: '/images/sample2.png', rating: 4, photo: '/images/photo2.png' },
    { name: 'Alex Johnson', text: 'The perfect blend of comfort and adventure. Will definitely book again!', image: '/images/sample3.png', rating: 5, photo: '/images/photo3.png' },
    { name: 'Emily Brown', text: 'A truly memorable stay with exceptional service. Will be returning soon!', image: '/images/sample4.png', rating: 5, photo: '/images/photo4.png' },
    { name: 'Michael Davis', text: 'An incredible experience! The amenities were superb and the location was ideal.', image: '/images/sample5.png', rating: 4, photo: '/images/photo5.png' },
    { name: 'Sarah Wilson', text: 'Everything about the stay was perfect. The atmosphere was relaxing and the staff was friendly.', image: '/images/sample6.png', rating: 5, photo: '/images/photo6.png' },
    { name: 'David Lee', text: 'A charming getaway that exceeded our expectations. Highly recommend!', image: '/images/sample7.png', rating: 4, photo: '/images/photo7.png' },
    { name: 'Laura Martinez', text: 'The stay was fantastic from start to finish. Beautiful place and excellent service.', image: '/images/sample8.png', rating: 5, photo: '/images/photo8.png' },
];

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const TestimonialsCarousel = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                padding: '5%',
                textAlign: 'center',
                marginTop: '40px',
            }}
        >
            <Typography variant="h4" color='#00fffb' fontWeight={'bold'} mb={3} gutterBottom>
                Our Guests Say
            </Typography>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Box
                        key={index}
                        sx={{
                            
                            padding: '2%',
                            borderRadius: '10px',
                            boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            maxWidth: '600px', // Adjust the width of the box
                            margin: '0 auto', // Center the box horizontally
                        }}
                    >
                        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                        &quot;{testimonial.text}&quot;
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={testimonial.image}
                                alt="Edom Belayneh"
                                style={{
                                    width: '60%', 
                                    height: 'auto',
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                                    border: `5px solid #00fffb`,
                                }}
                            />
                        </Box>
                        <Stack direction="column" spacing={2} sx={{display:'flex', flexDirection: 'row', justifyContent:'center', mt: 2}}> 
                            <img src={testimonial.photo}
                                 alt="Edom Belayneh"
                                 style={{
                                    width: '10%',
                                    height: '10%',
                                    borderRadius: '60px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                 }}
                            />
                         </Stack>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
                            {testimonial.name}
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            {/* Rating Stars */}
                            {Array.from({ length: 5 }, (_, i) => (
                                <FaStar
                                    key={i}
                                    style={{
                                        color: i < testimonial.rating ? '#00fffb' : '#e4e5e9', // Gold for filled, light grey for empty
                                        margin: '0 2px',
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Container>
    );
};

export default TestimonialsCarousel;

