import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  TextField,
  Container,
  Grid
} from '@mui/material';
import { 
  FaCode, 
  FaMicrochip, 
  FaLayerGroup, 
  FaCommentDots, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe 
} from 'react-icons/fa';

import lk from '../assets/lk.png'
import HeroCarousel from './HeroCarousel';

const features = [
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your business needs",
    icon: <FaMicrochip size={24} />,
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions",
    icon: <FaLayerGroup size={24} />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: <FaCommentDots size={24} />,
  },
];

const services = [
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs",
  },
  {
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation",
  },
  {
    title: "Cloud Services",
    description: "Secure and scalable cloud infrastructure solutions",
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <FaCode className="mr-2" /> LkSolution
          </Typography>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <HeroCarousel/>

      <main>
        <section className="py-20">
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" gutterBottom>
                  Transform Your Business with Modern Technology
                </Typography>
                <Typography variant="body1" paragraph>
                  We deliver innovative IT solutions that help businesses grow, scale, and succeed in the digital age.
                </Typography>
                <Button variant="contained" color="primary" size="large">Get Started</Button>
                <Button variant="outlined" color="primary" size="large" sx={{ ml: 2 }}>Learn More</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="https://via.placeholder.com/600x400" alt="Hero" className="w-full rounded-lg" />
              </Grid>
            </Grid>
          </Container>
        </section>

        <section id="features" className="py-20 bg-blue-800">
          <Container>
            <Typography variant="h3" align="center" gutterBottom>Features</Typography>
            <Typography variant="body1" align="center" paragraph>
              Our comprehensive suite of services is designed to meet all your technology needs
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {features.map((feature, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Card>
                    <CardContent className="text-center">
                      <div className="text-blue-500 mb-4">{feature.icon}</div>
                      <Typography variant="h6">{feature.title}</Typography>
                      <Typography variant="body2">{feature.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="services" className="py-20">
          <Container>
            <Typography variant="h3" align="center" gutterBottom>Our Services</Typography>
            <Typography variant="body1" align="center" paragraph>
              We offer a wide range of IT services to help your business succeed
            </Typography>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{service.title}</Typography>
                      <Typography variant="body2">{service.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </section>

        <section id="about" className="py-20 bg-blue-800">
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <img src={lk} alt="About Us" className="w-full rounded-lg" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" gutterBottom>About Us</Typography>
                <Typography variant="body1" paragraph>
                  We are a team of passionate technology experts dedicated to helping businesses succeed in the digital age.
                  With years of experience and a commitment to excellence, we deliver innovative solutions that drive
                  growth and efficiency.
                </Typography>
                <Button variant="outlined" color="primary">Learn More About Us</Button>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section id="contact" className="py-20">
          <Container>
            <Typography variant="h3" align="center" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" align="center" paragraph>
              Get in touch with us to discuss how we can help your business
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" className="flex items-center mb-2">
                  <FaEnvelope className="mr-2" /> info@lksolution.com
                </Typography>
                <Typography variant="body1" className="flex items-center mb-2">
                  <FaPhone className="mr-2" /> +1 (555) 123-4567
                </Typography>
                <Typography variant="body1" className="flex items-center mb-2">
                  <FaGlobe className="mr-2" /> 123 Tech Street, Silicon Valley, CA 94025
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <form>
                  <TextField fullWidth label="Name" margin="normal" />
                  <TextField fullWidth label="Email" margin="normal" />
                  <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
                  <Button variant="contained" color="primary" size="large">Send Message</Button>
                </form>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>

      <footer className="py-6 text-center">
        <Typography variant="body2">© 2025 LkSolution. All rights reserved.</Typography>
        <Button color="inherit">Terms of Service</Button>
        <Button color="inherit">Privacy</Button>
      </footer>
    </div>
  );
}

export default Page;

