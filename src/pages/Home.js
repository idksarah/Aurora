import React, { useState } from 'react';
import './Home.css';
import logo from './../img/logo.svg';
import QuestionAnswer from '../components/QuestionAnswer';
import Card from '../components/Card';
import Workshop from '../components/Workshop';

import solstice from '../img/solstice.png'
import luna from '../img/luna.webp'
import ascend from '../img/ascend.webp'
import celestial from '../img/celestial.webp'
import golden from '../img/golden.jfif'
import workshop1 from '../img/workshop1.png'
import workshop2 from '../img/workshop2.png'
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
                <div className="topBar">
                    <p className = "topBarElement">Aurora</p>
                    <p className = "topBarElement">About</p>
                    <p className = "topBarElement">Workshops</p>
                    <p className = "topBarElement">FAQ</p>
                </div>
                <div className="logoDiv">
                    <img src={logo} className="logo" alt="logo" />
                    <p className="location h3">Location | San Francisco, CA</p>
                </div>
                <div className = "about">
                    <p className ="h3">Aurora?</p>
                <p className ="text">A female and non-binary focused learnathon seeking to spread a love for coding!</p>
                </div>
                <div className="pastEvents container">
                    <p className="h3">Past Events</p>
                    <div className="pastCards">
                        <Card name="Ascend | Nov '24" img={ascend}></Card>
                        <Card name="Celestial | Oct '24" img={celestial}></Card>
                        <Card name="Luna | Oct '24" img={solstice}></Card>
                    </div>
                </div>
                <div className="workshops container">
                    <p className="h3">Workshops</p>
                    <div className="workshopCards">
                        <Workshop title="Onboard" content="idk" img={workshop1}></Workshop>
                        <Workshop title="Webdev" content="idk" img={workshop2}></Workshop>
                    </div>
                </div>
                <div className="faq container">
                    <p className="h3">FAQs</p>
                    <div className="questionCards">
                        <QuestionAnswer question ="What's a hackathon?" answer ="A social learning event"></QuestionAnswer>
                        <QuestionAnswer question ="Who can attend?" answer ="girlst"></QuestionAnswer>
                        <QuestionAnswer question ="What if I've never coded before?" answer ="come brother"></QuestionAnswer>
                        <QuestionAnswer question ="What should I bring?" answer ="a laptop lol"></QuestionAnswer>
                        <QuestionAnswer question ="I have more questions!" answer ="Join the slack or email"></QuestionAnswer>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
