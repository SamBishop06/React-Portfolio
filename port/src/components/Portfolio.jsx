import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../styles/Portfolio.css";
import portfolio from "../data/portfolio";


function Portfolio() {
    // Assuming `projects` is your array of portfolio items

    return (
        <div className="Project-img">
            <div className="Main-project-item">
            {portfolio.map(project => (
                <PortfolioItem
                    key={project.key} // Assuming title is unique for each project
                    title={project.title}
                    imgUrl={project.imgUrl}
                    link={project.link}
                    githublink={project.githublink}
                    
                />
                
            ))}
            
            </div>
        </div>
    );
}

export default Portfolio;
