import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './index.scss';
import Headshot from '../../assets/images/headshot.jpg'
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'D', 'h', 'r', 'u', 'v', ' ', 'B', 'a', 'g', 'g', 'a', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // cleanup on unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container home-page">
            <img src={Headshot} alt="developer"/>
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>l</span>
                <span className={`${letterClass} _14`}>l</span>
                <span className={`${letterClass} _15`}>o</span>
                <span className={`${letterClass} _16`}>,</span>
                <br />
                <span className={`${letterClass} _17`}>I</span>
                <span className={`${letterClass} _18`}>'m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={22} />
                </h1>
                <h2>Computer Engineering Student @ McMaster University

                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    );
}

export default Home