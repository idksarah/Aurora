import React, { useState } from 'react';
import './Home.css';
import logo from './../img/logo.svg';
import QuestionAnswer from '../components/QuestionAnswer';
import Card, { PastEventCard } from '../components/Card';
import Workshop from '../components/Workshop';

import solstice from '../img/solstice.png'
import luna from '../img/luna.webp'
import ascend from '../img/ascend.webp'
import celestial from '../img/celestial.webp'
import golden from '../img/golden.jfif'
import workshop1 from '../img/workshop1.png'
import workshop2 from '../img/workshop2.png'
import hackClub from '../img/flag-orpheus-left.png'

function Home() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <div className="content">
                <div className="topBar">
                    <img className="hackclubLogo" src={hackClub} alt="Hack Club Logo"/>
                    <div className="topBarElements">
                        <p className="topBarElement" onClick={() => scrollToSection('aurora')}>Aurora</p>
                        <p className="topBarElement" onClick={() => scrollToSection('workshops')}>Workshops</p>
                        <p className="topBarElement" onClick={() => scrollToSection('faq')}>FAQ</p>
                    </div>
                </div>
                <div className="logoContainer" id="aurora">
                    <img src={logo} className="logo" alt="logo" />
                    <p className="location white">date and time to date and time | San Francisco, CA</p>
                </div>
                <div className="about container" id="about">
                    <p className="h3 accent">Aurora?</p>
                    <p className="aboutContent p2">Aurora is a beginner-friendly, gender-focused hackathon. We’ll have workshops, mentors, and speakers to help you build your first coding project and meet new people!</p>
                </div>
                <div className="pastEventCards container">
                    <p className="h3 accent">Past Events</p>
                    <div className="pastEventCards">
                        <PastEventCard name="Ascend | Nov '24" img={ascend} />
                        <PastEventCard name="Celestial | Oct '24" img={celestial} />
                        <PastEventCard name="Luna | Oct '24" img={solstice} />
                    </div>
                </div>
                <div className="workshops container" id="workshops">
                    <p className="h3 accent">Workshops</p>
                    <div className="workshopCards">
                        <Workshop title="Onboard" content="Design and print a circuit board!" img={workshop1} />
                        <Workshop title="Webdev" content="Build a website from scratch with HTML, CSS, and JS!" img={workshop2} />
                    </div>
                </div>
                <div className="faq container" id="faq">
                    <p className="h3 accent">FAQs</p>
                    <div className="questionCards">
                        <QuestionAnswer question="What's a hackathon?" answer="Aurora is a social coding event—spend a day coding, learning, and creating with support from mentors, workshops, and lots of food and swag. No experience? No problem!" />
                        <QuestionAnswer question="Who can attend?" answer="Aurora is open to all girls and non-binary persons excited to learn and build, no matter their experience level." />
                        <QuestionAnswer question="What if I've never coded before?" answer="Come join us! We’ll have beginner-friendly workshops, mentors, and plenty of support to get you started." />
                        <QuestionAnswer question="What should I bring?" answer="A laptop, charger, and your excitement to learn!" />
                        <QuestionAnswer question="I have more questions!" answer="You can find us in the #sf-athena channel on Hack Club Slack, or email us at sarah.p.ngai@gmail.com." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
