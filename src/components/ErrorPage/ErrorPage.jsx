import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section class="notFound">
                <div class="img">
                    <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                    <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                </div>
                <div class="text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <h3>BACK TO HOME?</h3>
                    <Link to='/'>YES</Link>
                    <a href="https://web.programming-hero.com/">NO</a>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;