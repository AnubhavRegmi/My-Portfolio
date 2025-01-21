import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Define the responsive breakpoints for the carousel
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

// Define inline styles
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

const ProjectCard = () => {
    const projects = [
        {
            title: 'Yelp Campground',
            description:
                'Created a campground platform for leaving reviews about different places by signing up through email.',
        },
        {
            title: 'Weather App',
            description:
                'Developed a weather app displaying weather reports for cities worldwide using JavaScript, HTML, CSS, and APIs.',
        },
        {
            title: 'Movie App',
            description:
                'Built a movie app in React providing information on movies, including genres and ratings.',
        },
        {
            title: 'Database',
            description:
                'Built a database surfer using java which helps user to track the users according to the faculty ',
        },
    ];

    return (
        <div className="project-card">
            <Carousel responsive={responsive}>
                {projects.map((project, index) => (
                    <div key={index} style={carouselItemStyles}>
                        <h3 style={titleStyles}>{project.title}</h3>
                        <p style={descriptionStyles}>{project.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ProjectCard;
