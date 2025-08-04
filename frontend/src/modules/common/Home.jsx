import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Carousel } from 'react-bootstrap';
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import AllPropertiesCards from '../user/AllPropertiesCards';

const Home = () => {
    const [index, setIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Inline CSS as a string, applied via <style> tag or directly if compatible
    const componentStyles = `
        /* General Body and HTML Setup */
        html, body, #root {
            height: 100%;
            margin: 0;
            font-family: 'Inter', sans-serif; /* Example font, choose one suitable */
        }

        .home-page-wrapper {
            background: #f4f4f4;
            min-height: 100vh;
            padding-top: 90px; /* Space for fixed navbar */
        }

        /* --- Navbar Styling --- */
        .modern-navbar {
            transition: all 0.3s ease;
        }

        .brand-logo {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 800;
            font-size: 2rem;
            margin: 0;
            transition: font-size 0.3s ease; /* Smooth font size transition */
        }

        .nav-link-item {
            font-weight: 600;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 25px;
            transition: all 0.3s ease;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            color: white; /* Default color */
            white-space: nowrap; /* Prevent wrapping */
        }

        .nav-link-item.scrolled {
            color: #333; /* Color when scrolled */
        }

        .nav-link-item:hover {
            transform: translateY(-2px);
            background: rgba(255, 255, 255, 0.2);
            color: inherit; /* Keep color consistent on hover */
        }

        .nav-link-register {
            color: white;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 25px;
            border-radius: 25px;
            transition: all 0.3s ease;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            white-space: nowrap; /* Prevent wrapping */
        }

        .nav-link-register:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            color: white; /* Ensure text remains white on hover */
        }

        /* --- Hero Carousel Section --- */
        .hero-carousel-section {
            height: 80vh; /* Keep consistent height */
            position: relative;
            overflow: hidden; /* Ensure content doesn't spill out */
        }

        .carousel-image {
            width: 100%;
            height: 80vh; /* Set a consistent height */
            object-fit: cover;
            filter: brightness(0.8); /* Slightly dim all images for better text contrast */
            transition: transform 8s ease-in-out;
        }

        .carousel-caption-overlay {
            position: absolute;
            top: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 60px 60px 0 0;
            z-index: 2;
            pointer-events: none; /* Allows clicks through to carousel controls if present */
            text-align: right; /* Default text alignment */
            width: 55%; /* Default width */
            right: 0; /* Align to right */
            box-sizing: border-box; /* Include padding in width calculation */
        }

        .carousel-title {
            font-size: 3.2rem;
            font-weight: 900;
            margin-bottom: 18px;
            color: #f8fafc;
            letter-spacing: 1px;
            text-shadow: 0 4px 24px rgba(31,38,135,0.18), 0 1px 2px #2222;
            line-height: 1.1;
        }

        .carousel-subtitle {
            font-size: 1.35rem;
            color: #e0e7ff;
            font-weight: 500;
            margin-bottom: 28px;
            max-width: 480px;
            line-height: 1.5;
            text-shadow: 0 2px 8px rgba(31,38,135,0.10);
            margin-left: auto; /* Align to right within its container */
            margin-right: 0;
        }

        /* Carousel CTA Buttons */
        .hero-cta-button {
            font-weight: 700;
            border-radius: 20px;
            padding: 12px 38px;
            font-size: 1.2rem;
            box-shadow: 0 4px 18px rgba(31,38,135,0.10);
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-block; /* Makes padding work consistently */
            pointer-events: auto; /* Re-enable clicks */
        }

        .hero-cta-button.primary {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: #222;
        }

        .hero-cta-button.secondary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
        }

        .hero-cta-button.tertiary {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: #fff;
        }

        .hero-cta-button.success {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            color: #222;
        }

        .hero-cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(31,38,135,0.18);
            color: inherit; /* Keep color consistent on hover */
        }


        /* --- Main Hero Section Below Carousel --- */
        .main-hero-section {
            width: 100%;
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
            padding: 70px 20px 40px 20px; /* Add horizontal padding */
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04);
            text-align: center; /* Center align all text by default */
        }

        .main-hero-title {
            font-size: 3.2rem;
            font-weight: 900;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 18px;
            letter-spacing: 1px;
            line-height: 1.1;
        }

        .main-hero-title .highlight-text {
            color: #f5576c;
            -webkit-text-fill-color: unset; /* Override gradient for this span */
            background: unset;
        }

        .main-hero-description {
            font-size: 1.35rem;
            color: #444;
            font-weight: 500;
            margin-bottom: 32px;
            max-width: 700px;
            line-height: 1.7;
            letter-spacing: 0.2px;
        }

        .main-hero-buttons {
            display: flex;
            gap: 18px;
            flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
            justify-content: center;
        }

        .main-cta-button {
            border: none;
            border-radius: 25px;
            padding: 14px 36px;
            font-weight: 700;
            font-size: 1.15rem;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.13);
            transition: all 0.3s cubic-bezier(.4,2,.6,1);
            margin-bottom: 8px; /* Space when wrapped */
            white-space: nowrap; /* Prevent text wrapping inside button */
        }

        .main-cta-button.primary {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: #222;
        }

        .main-cta-button.secondary {
            border: 2px solid #667eea;
            color: #667eea;
            background: #fff;
            box-shadow: 0 4px 15px rgba(102,126,234,0.08);
        }

        .main-cta-button.secondary:hover {
            background: #f4f6fa;
            color: #222;
        }

        .main-cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        }

        .owner-prompt-text {
            margin-top: 38px;
            color: #888;
            font-size: 1.08rem;
            font-weight: 500;
        }

        .owner-link {
            color: #f5576c;
            font-weight: 700;
            text-decoration: none;
            transition: color 0.2s ease;
        }

        .owner-link:hover {
            color: #ff3d5e;
            text-decoration: underline;
        }

        /* --- Media Queries for Mobile Responsiveness --- */

        /* Small devices (phones, 576px and down) */
        @media (max-width: 767.98px) {
            .brand-logo {
                font-size: 1.5rem; /* Smaller logo on mobile */
            }

            .main-nav-links {
                gap: 10px; /* Reduce gap between links */
                flex-direction: column; /* Stack nav items in dropdown */
                align-items: center; /* Center items in dropdown */
                padding-top: 15px;
            }

            .nav-link-item, .nav-link-register {
                width: 80%; /* Make links wider for easier tapping */
                text-align: center;
                margin-bottom: 8px; /* Add space between stacked links */
            }

            /* Carousel adjustments for mobile */
            .hero-carousel-section {
                height: 60vh; /* Make carousel shorter on mobile */
            }

            .carousel-image {
                height: 60vh; /* Adjust image height */
            }

            .carousel-caption-overlay {
                width: 100%; /* Caption takes full width */
                align-items: center; /* Center content */
                justify-content: center; /* Center vertically */
                padding: 20px; /* Adjust padding */
                text-align: center; /* Center text */
                background: rgba(0, 0, 0, 0.4); /* Add a subtle overlay for readability */
                left: 0;
                right: 0;
            }

            .carousel-title {
                font-size: 2rem; /* Smaller font size for titles */
                margin-bottom: 10px;
            }

            .carousel-subtitle {
                font-size: 1rem; /* Smaller font size for subtitles */
                margin-bottom: 20px;
                max-width: 90%; /* Adjust max-width */
                margin-left: auto;
                margin-right: auto;
            }

            .hero-cta-button {
                padding: 10px 25px; /* Smaller padding for buttons */
                font-size: 1rem;
            }

            /* Main Hero Section adjustments */
            .main-hero-section {
                padding: 50px 15px 30px 15px; /* More padding on sides */
            }

            .main-hero-title {
                font-size: 2.2rem; /* Smaller title */
            }

            .main-hero-description {
                font-size: 1.1rem; /* Smaller description */
            }

            .main-hero-buttons {
                flex-direction: column; /* Stack buttons vertically */
                width: 100%;
                max-width: 300px; /* Limit button width */
            }

            .main-cta-button {
                width: 100%; /* Full width buttons */
                padding: 12px 25px;
            }

            .owner-prompt-text {
                font-size: 0.95rem;
            }
        }

        /* Medium devices (tablets, 768px to 991.98px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .brand-logo {
                font-size: 1.8rem;
            }

            .nav-link-item, .nav-link-register {
                padding: 8px 18px;
                font-size: 0.95rem;
            }

            .hero-carousel-section {
                height: 70vh;
            }

            .carousel-image {
                height: 70vh;
            }

            .carousel-caption-overlay {
                padding: 40px 40px 0 0;
            }

            .carousel-title {
                font-size: 2.8rem;
            }

            .carousel-subtitle {
                font-size: 1.2rem;
                max-width: 400px;
            }

            .hero-cta-button {
                padding: 10px 30px;
                font-size: 1.1rem;
            }

            .main-hero-title {
                font-size: 2.8rem;
            }

            .main-hero-description {
                font-size: 1.2rem;
                max-width: 600px;
            }

            .main-cta-button {
                padding: 12px 30px;
                font-size: 1.05rem;
            }
        }

        /* Landscape orientation for smaller devices */
        @media screen and (max-height: 450px) and (max-width: 767.98px) and (orientation: landscape) {
            .hero-carousel-section {
                height: 100vh; /* Use full height in landscape if needed */
            }
            .carousel-image {
                height: 100vh;
            }
            .carousel-caption-overlay {
                padding: 20px;
                justify-content: center;
            }
            .carousel-title {
                font-size: 1.8rem;
            }
            .carousel-subtitle {
                font-size: 0.9rem;
                margin-bottom: 15px;
            }
            .hero-cta-button {
                padding: 8px 20px;
                font-size: 0.9rem;
            }
        }
    `;

    return (
        <>
            {/* Inject styles into the DOM */}
            <style>{componentStyles}</style>

            <Navbar
                expand="lg"
                className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
                // Inline styles for basic layout and transitions, specific responsive styles handled by CSS string
                style={{
                    background: scrolled
                        ? 'rgba(255, 255, 255, 0.95)'
                        : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                    padding: '15px 0'
                }}
            >
                <Container fluid>
                    <Navbar.Brand>
                        <h2 className="brand-logo">
                            🏠 HouseHunt
                        </h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
                        <Nav className="main-nav-links">
                            <Link
                                to={'/'}
                                className={`nav-link-item ${scrolled ? 'scrolled' : ''}`}
                            >
                                Home
                            </Link>
                            <Link
                                to={'/login'}
                                className={`nav-link-item ${scrolled ? 'scrolled' : ''}`}
                            >
                                Login
                            </Link>
                            <Link
                                to={'/register'}
                                className="nav-link-register"
                            >
                                Register
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='home-page-wrapper'>
                <div className='hero-carousel-section'>
                    <Carousel
                        activeIndex={index}
                        onSelect={handleSelect}
                        interval={5000}
                        pause={false}
                        indicators={false}
                        style={{ height: '100%' }}
                    >
                        <Carousel.Item>
                            <img
                                src={p1}
                                alt="Luxury Modern Properties"
                                className="carousel-image"
                            />
                            <div className="carousel-caption-overlay right-aligned">
                                <p className="carousel-title">
                                    Unlock Your Dream Home
                                </p>
                                <div className="carousel-subtitle">
                                    Discover handpicked luxury homes and modern spaces that fit your lifestyle. Your perfect match is just a click away.
                                </div>
                                <div>
                                    <Link to="/register" className="hero-cta-button primary">
                                        Start Your Journey
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={p2}
                                alt="Premium Real Estate"
                                className="carousel-image"
                            />
                            <div className="carousel-caption-overlay right-aligned">
                                <p className="carousel-title">
                                    Live Where It Matters
                                </p>
                                <div className="carousel-subtitle">
                                    Explore homes in top neighborhoods with world-class amenities and vibrant communities.
                                </div>
                                <div>
                                    <Link to="/login" className="hero-cta-button secondary">
                                        Browse Properties
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={p3}
                                alt="Modern Architecture"
                                className="carousel-image"
                            />
                            <div className="carousel-caption-overlay right-aligned">
                                <p className="carousel-title">
                                    Experience Smart Living
                                </p>
                                <div className="carousel-subtitle">
                                    Step into the future with smart homes featuring advanced technology and sustainable design.
                                </div>
                                <div>
                                    <Link to="/register" className="hero-cta-button tertiary">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={p4}
                                alt="Exclusive Properties"
                                className="carousel-image"
                            />
                            <div className="carousel-caption-overlay right-aligned">
                                <p className="carousel-title">
                                    Get Exclusive Access
                                </p>
                                <div className="carousel-subtitle">
                                    Unlock special deals and off-market listings before anyone else. Be the first to know.
                                </div>
                                <div>
                                    <Link to="/register" className="hero-cta-button success">
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

                {/* Enhanced Hero Section */}
                <section className="main-hero-section">
                    <h1 className="main-hero-title">
                        Find Your <span className="highlight-text">Perfect Home</span><br />
                        With Ease and Confidence
                    </h1>
                    <p className="main-hero-description">
                        Discover thousands of modern properties, handpicked to fit every lifestyle. Whether you’re searching for a cozy apartment, a luxury villa, or a downtown studio, HouseHunt helps you find the right place, faster and smarter.
                    </p>
                    <div className="main-hero-buttons">
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <Button className="main-cta-button primary">
                                Start By Registering as Owner
                            </Button>
                        </Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" className="main-cta-button secondary">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                    <div className="owner-prompt-text">
                        <span>Are you a property owner? </span>
                        <Link to="/register" className="owner-link">
                            List your property for free
                        </Link>
                    </div>
                </section>

                {/* Section propriétés */}
                <div className='property-content'>
                    <Container style={{ position: 'relative', zIndex: 1, marginTop: '40px' }}>
                        <AllPropertiesCards />
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Home;
