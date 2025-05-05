import React, { useState } from 'react';
import './Home.css';
import logo from './../img/aurora.png';
import QuestionAnswer from '../components/QuestionAnswer';
import Card, { PastEventCard } from '../components/Card';
import Workshop from '../components/Workshop';

import solstice from '../img/solstice.png'
import luna from '../img/luna.png'
import ascend from '../img/ascend.webp'
import celestial from '../img/celestial.webp'
import golden from '../img/golden.jfif'
import pcb from '../img/orpheus-skateboarding-PCB.png'
import hackClub from '../img/flag-orpheus-left.png'
import gamedev from '../img/orpheus.png'
import webdev from '../img/orpheus1.png'

document.title = "Aurora"

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
                    {/* <p
                    className="topBarElement registerTop" id="register"
                    onClick={() => window.location.href = "http://hack.club/aurora-sf"}
                    style={{ cursor: 'pointer' }}
                    >Sign up!</p> */}
                </div>
                <div className="logoContainer" id="aurora">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <p className="location white">San Francisco, CA | 8:00 AM - 2:30 PM July 18-20</p>
                <div className="about container" id="about">
                    <p className="aboutContent center p2"><span className="accent">Aurora</span> is a beginner-friendly, gender-focused hackathon with 3 days of workshops, mentors, and hands-on coding & engineering projects—no experience needed!</p>
                </div>
                <p
                className="reg white"
                onClick={() => window.location.href = "http://hack.club/aurora-sf"}
                style={{ cursor: 'pointer' }}
                >Register!</p>
                <div className="pastEventCards container">
                    <p className="h3 accent">Past Events</p>
                    <div className="pastEventCards">
                        <PastEventCard name="Ascend | Nov '24" img={ascend} />
                        <PastEventCard name="Celestial | Oct '24" img={celestial} />
                        <PastEventCard name="Luna | Oct '24" img={luna} />
                        <PastEventCard name="Solstice | Oct '24" img={solstice} />
                        <PastEventCard name="Golden | Oct '24" img={golden} />
                    </div>
                </div>
                <div className="workshops container" id="workshops">
                    <p className="h3 accent">Workshops</p>
                    <div className="workshopCards">
                        <Workshop title="Day 1 | PCBs" content="Design and print a circuit board!" img={pcb} />
                        <Workshop title="Day 2 | Web Dev + 3D Village" content="Build a website with HTML, CSS, JS, and 3D models!" img={webdev} />
                        <a
                            href="https://drive.google.com/drive/folders/1JdYlUSjH3DoACI68TpAbFUhNrgiEMYCj"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none"}}
                            >
                            <Workshop
                                title="Day 3 | Game Dev"
                                content="Create your own videogame!"
                                img={gamedev}
                            />
                            </a>
                    </div>
                </div>
                {/* <div className="schedule">
                    <p className="h3 accent">Schedule</p>
                    <p className="text p2 white">event - time</p>
                </div> */}
                <div className="faq container" id="faq">
                    <p className="h3 accent">FAQs</p>
                    <div className="questionCards">
                        <QuestionAnswer question="What's a hackathon?" answer="Aurora is a social coding event—spend a day coding, learning, and creating with support from mentors, workshops, and lots of food and swag. No experience? No problem!" />
                        <QuestionAnswer question="Who can attend?" answer="Aurora is open to all girls and non-binary persons excited to learn and build, no matter their experience level." />
                        <QuestionAnswer question="What if I've never coded before?" answer="Come join us! We’ll have beginner-friendly workshops, mentors, and plenty of support to get you started." />
                        <QuestionAnswer question="What should I bring?" answer="A laptop, charger, and your excitement to learn! Food will be provided." />
                        <QuestionAnswer question="I have more questions!" answer="You can find us in the #sf-athena channel on Hack Club Slack, or email us at sarah.p.ngai@gmail.com." />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

/*
-reg form
-schedule
-logo

-workshops
-domain
*/