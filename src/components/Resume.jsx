import React from 'react'; // Importing React
import { Container, Row, Col, Button } from 'react-bootstrap'; // Importing necessary components from react-bootstrap
import '../style/Resume.css'; // Importing custom CSS file
import PDF from '../'; // Importing resume PDF file

// Resume component
function Resume () {
    return (
        <section id='resume' className='resume-margin'> {/* Resume section with custom class */}
            <Container className='resume-section'> {/* Container for the resume */}
                {/* Section for the resume header */}
                <Row>
                    <Col className='text-center'>
                        <h1>Resume</h1> {/* Resume title */}
                        <hr className='star-primary' /> {/* Primary divider */}
                        <Button variant='dark' href={PDF} download> {/* Download button for the resume PDF */}
                            Download Resume
                        </Button>
                    </Col>
                </Row>
                {/* Section for career summary */}
                <Row>
                    <Col>
                        <hr className='star-secondary' /> {/* Secondary divider */}
                        <h3><u>Career Summary</u></h3> {/* Subtitle for career summary */}
                        <div className='resume-item'> {/* Container for career summary content */}
                            <ul>
                                <p>
                                I bring a passion for technology and a strong foundation in programming concepts. With a keen interest in learning and a dedication to continuous improvement, I am eager to contribute to innovative projects and collaborate with experienced professionals. My education and hands-on experience have equipped me with proficiency in programming languages such as [mention relevant languages], as well as familiarity with software development methodologies and tools. I am excited to apply my skills to real-world challenges, contribute to the success of dynamic teams, and embark on a fulfilling journey of growth within the software development field.
                                </p>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* Section for top 3 projects */}
                <Row>
                    <Col>
                        <hr className='star-secondary' /> {/* Secondary divider */}
                        <h3><u>Top 3 Projects</u></h3> {/* Subtitle for top 3 projects */}
                        {/* Container for each project */}
                        <div className='resume-item'>
                            <h4><a href=''>Social Network API</a></h4> {/* Project title with link */}
                            <ul>
                                <li><strong>Technology:</strong> Github | JavaScript | Express | Mongoose | MongoDB | Insomnia</li> {/* Project technologies */}
                                <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li> {/* Project description */}
                                <li>API that allows users to interact with each other and make their own posts.</li> {/* Project description */}
                            </ul>
                        </div>
                        {/* Container for each project */}
                        <div className='resume-item'>
                            <h4><a href=''>Backend for E-Commerce</a></h4> {/* Project title with link */}
                            <ul>
                                <li><strong>Technology:</strong> Github | JavaScript | Express | MySQL | Sequelize | Insomnia</li> {/* Project technologies */}
                                <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li> {/* Project description */}
                                <li>Backend for an e-commerce website that allows users to interact with the database.</li> {/* Project description */}
                            </ul>
                        </div>
                        {/* Container for each project */}
                        <div className='resume-item'>
                            <h4><a href=''>SQL Employee Tracker</a></h4> {/* Project title with link */}
                            <ul>
                                <li><strong>Technology:</strong> Github | JavaScript | Inquirer | MySQL</li> {/* Project technologies */}
                                <li>Demonstrated functionality on YouTube -- video attached in the Github README.</li> {/* Project description */}
                                <li>User-Friendly CLI for managing employees.</li> {/* Project description */}
                            </ul>
                        </div>
                    </Col>
                </Row>
                {/* Section for full stack development skills */}
                <Row>
                    <Col>
                        <hr className='star-secondary' /> {/* Secondary divider */}
                        <h3><u>Full Stack Development</u></h3> {/* Subtitle for full stack development */}
                        {/* List of full stack development skills */}
                        <ul className='list-inline'>
                            <li className='list-inline-item'><strong>Languages:</strong>HTML, CSS, JS</li>
                            <li className='list-inline-item'><strong>Libraries and Frameworks:</strong>Bootstrap, jQuery, React, Express, Node.js, Express.js, Handlebars, Sequelize.js</li>
                            <li className='list-inline-item'><strong>Databases:</strong>MySQL, MongoDB, NoSQL</li>
                            <li className='list-inline-item'><strong>Tools:</strong>Git, GitHub, Heroku, Insomnia, Heroku, Render, Microsoft Office Suite, MongoDB Compass, NPM</li>
                            <li className='list-inline-item'><strong>Methodologies:</strong>Agile, Scrum, Kanban</li>
                            <li className='list-inline-item'><strong>Testing:</strong>Jest, Insomnia</li>
                            <li className='list-inline-item'><strong>Deployment:</strong>Heroku, GitHub Pages, Render</li>
                            <li className='list-inline-item'><strong>Operating Systems:</strong>Windows, Android, iOS, Ubuntu</li>
                            <li className='list-inline-item'><strong>Skills:</strong>Basic Soldering, Hardware Knowledge, Hardware Troubleshooting, Inventory Management, Time Management, Organization, Attention to Detail</li>
                        </ul>
                    </Col>
                </Row>
                {/* Section for education */}
                <Row>
                    <Col>
                        <hr className='star-secondary' /> {/* Secondary divider */}
                        <h3><u>Education</u></h3> {/* Subtitle for education */}
                        {/* Container for education details */}
                        <div className='resume-item'>
                            <h4>Full Stack Development Coding Bootcamp</h4> {/* Education title */}
                            <ul>
                                <li>University of Texas at San Antonio</li> {/* University name */}
                                <li>2023-2024</li> {/* Duration of education */}
                            </ul>
                        </div>
                        {/* Container for education details */}
                        <div className='resume-item'>
                            <h4></h4> {/* Education title */}
                            <ul>
                                <li>High School Diploma</li> {/* Degree */}
                                <li>2012</li> {/* Graduation year */}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Resume; // Exporting the Resume component
