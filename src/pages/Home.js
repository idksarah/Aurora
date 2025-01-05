import React, { useState } from 'react';
import './Home.css';
import TopBar from '../components/TopBar';
import Question from '../components/Question';
import Card from '../components/Card';
import Faq from '../components/Card';
import logo from './../img/logo.svg';
import star from './../img/star.webp';

function showFAQs() {
    return (
        <Faq />
    )
}

function showMission() {
    return (
        <div>
            <p>Our Mission</p>
            <p>Empowering girls to code and stuff</p>
        </div>
    )
}

function goRegister() {
    
}

function Home() {
    const [isDimmed, setIsDimmed] = useState(false);
    const [selected, setSelected] = useState('');

    const handleClick = (type) => {
        setIsDimmed(true);
        setSelected(type);
    };

    return (
        <>
            {isDimmed && <div className="dimmer" />}
            <div className="content">
                <div className="left">
                    <div className="firstCard">
                        <Card content={`Step into a world where code meets cosmos, and imagination knows no bounds.\n(shift + scroll wheel)`} />
                    </div>
                    <div className="secondCard">
                        <Card content={"A space where high school girls shine brighter than the stars—"} />
                    </div>
                    <div className="thirdCard">
                        <Card content={"Collaborating, innovating, and building projects that could change the world."} />
                    </div>
                </div>
                <div className="right">
                    <div className="logoContainer">
                        <div className="logoDiv">
                            <img src={logo} className="logo" alt="logo" />
                            <div className={`Mission ${selected === 'Mission' ? 'centeredContent' : ''}`} onClick={() => handleClick('Mission')}>
                                <p className="text">Mission</p>
                            </div>
                            <div className={`Faq ${selected === 'Faq' ? 'centeredContent' : ''}`} onClick={() => handleClick('Faq')}>
                                <p className="text">FAQs</p>
                            </div>
                            <div className="Register">
                                <p className="text">Ready?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selected === 'Mission' && showMission()}
            {selected === 'Faq' && showFAQs()}
        </>
    );
}

export default Home;
