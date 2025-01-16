import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Define the responsive breakpoints for the carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ProjectCard = () => {
    const projects = [
        {
            title: "Yelp Campground",
            description: "Created a campground platform for leaving reviews about different places using JavaScript, EJS, Bootstrap, MongoDB, Express, and Node.js."
        },
        {
            title: "Weather App",
            description: "Developed a weather app displaying weather reports for cities worldwide using JavaScript, HTML, CSS, and APIs."
        },
        {
            title: "Movie App",
            description: "Built a movie app in React providing information on movies, including genres and ratings."
        },
        {
            title: "Another Movie App",
            description: "Built another movie app in React, focusing on a different set of movies and features."
        }
    ];

    return (
        <div className="project-card">
            <Carousel responsive={responsive}>
                <div className="carousel-item">
                    <h3>Test Title</h3>
                    <p>Test description content to check rendering.</p>
                </div>
                <div className="carousel-item">
                    <h3>Another Test Title</h3>
                    <p>Another test description to check rendering.</p>
                </div>
            </Carousel>


        </div>
    );
};

// Styles for the carousel items
const carouselItemStyles = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
};

const descriptionStyles = {
    fontSize: '1rem',
    color: '#555',
};

export default ProjectCard;
