// import React from "react";
import "../styles/PortfolioItem.css";

function PortfolioItem ({ title, imgUrl, githublink, link, key }) {
    return (
        

            
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="P-I"
            >
            {/* <a 
            href={githublink}
            target="_blank"
            rel="noopener noreferrer"
            className="gitlink"
        /> */}
            <img src={imgUrl} alt="portfolio" className="Pro-image"
        />
        <div className="Space-pj">
            <h3 className="Project-Title">{title}</h3>
            <p className="Top-Project-Title">{key}</p>
            <span className="idk-yet"></span>
        </div>
        </a>
    )
}
export default PortfolioItem;